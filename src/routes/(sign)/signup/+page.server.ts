import { fail, redirect } from "@sveltejs/kit";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { auth } from "$lib/server/auth";

import type { Actions } from "./$types";

export const load = async ({ locals }) => {
  const session = await locals.auth.validate();
  if (session) {
    throw redirect(302, "/");
  }
  return {};
};

export const actions = {
  default: async ({ request, locals }) => {
    const formData = await request.formData();
    const username = formData.get("username");
    const password = formData.get("password");
    if (typeof username != "string" || username.length < 3 || username.length > 30) {
      return fail(400, { message: "Invaild username" });
    }
    if (typeof password != "string" || password.length < 6 || password.length > 255) {
      return fail(400, { message: "Invalid password" });
    }
    try {
      const user = await auth.createUser({
        key: {
          providerId: "username",
          providerUserId: username.toLowerCase(),
          password,
        },
        attributes: {
          username,
          role: "USER",
        },
      });
      const session = await auth.createSession({
        userId: user.userId,
        attributes: {},
      });
      locals.auth.setSession(session);
    } catch (e) {
      console.log(e);
      if (e instanceof PrismaClientKnownRequestError && e.code === "P2002") {
        return fail(400, { message: "Username already exists" });
      }
      return fail(500, {
        message: "An unknown error occurred",
      });
    }
    throw redirect(302, "/");
  },
} satisfies Actions;
