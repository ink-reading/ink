import { auth, createAdminAccount } from "$lib/server/auth";
import type { Handle } from "@sveltejs/kit";

createAdminAccount();

export const handle: Handle = async ({ event, resolve }) => {
  event.locals.auth = auth.handleRequest(event);
  return await resolve(event);
};
