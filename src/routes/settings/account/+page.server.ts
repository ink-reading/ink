import { auth } from "$lib/server/auth";
import { fail, redirect } from "@sveltejs/kit";

import type { Actions } from "./$types";

export const load = async ({ locals }) => {
  const session = await locals.auth.validate();
  if (!session) throw redirect(302, "/login");
  return {
    userId: session.user.userId,
    username: session.user.username,
  };
};

export const actions: Actions = {
  logout: async ({ locals }) => {
    const session = await locals.auth.validate();
    if (!session) return fail(401);
    await auth.invalidateSession(session.sessionId); // invalidate session
    locals.auth.setSession(null); // remove cookie
    throw redirect(302, "/login"); // redirect to login page
  },
};
