import { lucia } from "lucia";
import { sveltekit } from "lucia/middleware";
import { postgres as postgresAdapter } from "@lucia-auth/adapter-postgresql";
import { dev } from "$app/environment";

import { queryClient } from "./db";

export const auth = lucia({
  env: dev ? "DEV" : "PROD",
  middleware: sveltekit(),
  adapter: postgresAdapter(queryClient, {
    user: "auth_user",
    key: "user_key",
    session: "user_session",
  }),

  getUserAttributes: data => {
    return {
      username: data.username,
      role: data.role,
    };
  },
});

export type Auth = typeof auth;

export async function createAdminAccount() {
  try {
    const adminUsers = await queryClient`select * from auth_user where username = 'admin'`;
    if (adminUsers.length > 0) {
      // Admin account already exists
      return;
    }
    await auth.createUser({
      key: {
        providerId: "username",
        providerUserId: "admin",
        password: "ink-reading",
      },
      attributes: {
        username: "admin",
        role: "admin",
      },
    });
  } catch (err) {
    console.error("Failed to create admin account: \n", err);
    process.exit(1);
  }
}
