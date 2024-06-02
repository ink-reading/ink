import { eq } from "drizzle-orm";
import { verify } from "@node-rs/argon2";
import { fail, redirect } from "@sveltejs/kit";
import { db } from "$lib/server/db";
import { users } from "$lib/server/schema";
import { lucia } from "$lib/server/auth";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
  if (locals.user) {
    redirect(302, "/");
  }
  return {};
};

export const actions = {
  default: async ({ request, cookies }) => {
    const formData = await request.formData();
    const username = formData.get("username");
    const password = formData.get("password");
    if (
      typeof username !== "string" ||
      username.length < 3 ||
      username.length > 31 ||
      !/^[a-z0-9_-]+$/.test(username)
    ) {
      return fail(400, {
        message: "Invalid username",
      });
    }
    if (typeof password !== "string" || password.length < 6 || password.length > 255) {
      return fail(400, {
        message: "Invalid password",
      });
    }
    try {
      const existingUser = (await db.select().from(users).where(eq(users.username, username))).at(
        0,
      );
      if (!existingUser) {
        return fail(400, {
          message: "Incorrect username or password",
        });
      }
      const isPasswordValid = await verify(existingUser.passwordHash, password, {
        memoryCost: 19456,
        timeCost: 2,
        outputLen: 32,
        parallelism: 1,
      });
      if (!isPasswordValid) {
        return fail(400, {
          message: "Incorrect username or password",
        });
      }
      const session = await lucia.createSession(existingUser.id, {});
      const sessionCookie = lucia.createSessionCookie(session.id);
      cookies.set(sessionCookie.name, sessionCookie.value, {
        path: ".",
        ...sessionCookie.attributes,
      });
      redirect(302, "/");
    } catch (err) {
      return fail(500, {
        message: "An unknown error occurred",
      });
    }
  },
} satisfies Actions;
