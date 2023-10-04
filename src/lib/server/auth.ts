import { lucia } from "lucia";
import { sveltekit } from "lucia/middleware";
import { prisma } from "@lucia-auth/adapter-prisma";
import { dev } from "$app/environment";

import db from "./db";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export const auth = lucia({
  env: dev ? "DEV" : "PROD",
  middleware: sveltekit(),
  adapter: prisma(db),

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
    await auth.createUser({
      key: {
        providerId: "username",
        providerUserId: "admin",
        password: "ink-reading",
      },
      attributes: {
        username: "admin",
        role: "ADMIN",
      },
    });
  } catch (err) {
    if (err instanceof PrismaClientKnownRequestError && err.code === "P2002") {
      console.log("Admin account already exists, skipping...");
      return;
    }
    console.error("Failed to create admin account: \n", err);
    process.exit(1);
  }
}
