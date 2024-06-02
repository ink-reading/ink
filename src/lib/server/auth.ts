import { Lucia, generateIdFromEntropySize } from "lucia";
import { hash } from "@node-rs/argon2";
import { DrizzlePostgreSQLAdapter } from "@lucia-auth/adapter-drizzle";
import { dev } from "$app/environment";
import { ADMIN_DEFAULT_PASSWORD } from "$env/static/private";

import { db } from "./db";
import { sessions, users } from "./schema";
const adapter = new DrizzlePostgreSQLAdapter(db, sessions, users);

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    attributes: {
      secure: !dev,
    },
  },
  getUserAttributes: attributes => {
    return {
      username: attributes.username,
      role: attributes.role,
    };
  },
});

declare module "lucia" {
  interface Register {
    Lucia: typeof lucia;
    DatabaseUserAttributes: DatabaseUserAttributes;
  }
}

interface DatabaseUserAttributes {
  username: string;
  password_hash: string;
  role: "admin" | "user";
}

export async function createAdminAccount() {
  try {
    if (!ADMIN_DEFAULT_PASSWORD) {
      throw new Error("ADMIN_DEFAULT_PASSWORD must be defined in .env");
    }
    await db
      .insert(users)
      .values({
        id: generateIdFromEntropySize(10),
        role: "admin",
        username: "admin",
        passwordHash: await hash(ADMIN_DEFAULT_PASSWORD, {
          memoryCost: 19456,
          timeCost: 2,
          outputLen: 32,
          parallelism: 1,
        }),
      })
      .onConflictDoNothing({ target: users.username });
  } catch (err) {
    console.error("Failed to create admin account: \n", err);
    process.exit(1);
  }
}
