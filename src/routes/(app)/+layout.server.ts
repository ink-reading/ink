import { listing } from "$lib/__mock";
import { redirect } from "@sveltejs/kit";

import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ locals }) => {
  const session = await locals.auth.validate();
  if (!session) {
    redirect(302, "/login");
  }
  return {
    currentUser: {
      ...session.user,
      isAdmin: session.user.role === "admin",
    },
    listing: listing,
  };
};
