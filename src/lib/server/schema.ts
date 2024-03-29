import { pgTable, pgEnum, bigint, varchar } from "drizzle-orm/pg-core";

export const roleEnum = pgEnum("user_role", ["admin", "user"]);

export const user = pgTable("auth_user", {
  id: varchar("id", { length: 15 }).primaryKey(),
  username: varchar("username", { length: 255 }).notNull().unique(),
  role: roleEnum("role").notNull().default("user"),
});

export const session = pgTable("user_session", {
  id: varchar("id", { length: 128 }).primaryKey(),
  userId: varchar("user_id", { length: 15 })
    .notNull()
    .references(() => user.id),
  activeExpires: bigint("active_expires", { mode: "number" }).notNull(),
  idleExpires: bigint("idle_expires", { mode: "number" }).notNull(),
});

export const key = pgTable("user_key", {
  id: varchar("id", { length: 255 }).primaryKey(),
  userId: varchar("user_id", { length: 15 })
    .notNull()
    .references(() => user.id),
  hashedPassword: varchar("hashed_password", { length: 255 }),
});
