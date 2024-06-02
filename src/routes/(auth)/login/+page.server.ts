import { auth } from "$lib/server/auth";
import { LuciaError } from "lucia";
import { fail, redirect } from "@sveltejs/kit";

import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
  const session = await locals.auth.validate();
  if (session) {
    redirect(302, "/");
  }
  return {};
};

export const actions = {
  default: async ({ request, locals }) => {
    const formData = await request.formData();
    const username = formData.get("username");
    const password = formData.get("password");
    if (typeof username !== "string" || username.length < 1 || username.length > 31) {
      return fail(400, {
        message: "Invalid username",
      });
    }
    if (typeof password !== "string" || password.length < 1 || password.length > 255) {
      return fail(400, {
        message: "Invalid password",
      });
    }
    try {
      const key = await auth.useKey("username", username.trim().toLowerCase(), password.trim());
      const session = await auth.createSession({
        userId: key.userId,
        attributes: {},
      });
      locals.auth.setSession(session);
    } catch (err) {
      if (
        err instanceof LuciaError &&
        (err.message === "AUTH_INVALID_KEY_ID" || err.message === "AUTH_INVALID_PASSWORD")
      ) {
        return fail(400, {
          message: "Incorrect username or password",
        });
      }
      return fail(500, {
        message: "An unknown error occurred",
      });
    }
    redirect(302, "/");
  },
} satisfies Actions;
