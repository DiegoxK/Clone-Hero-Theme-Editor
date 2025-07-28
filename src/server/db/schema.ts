import { relations, sql } from "drizzle-orm";
import {
  index,
  jsonb,
  pgTableCreator,
  primaryKey,
  serial,
  text,
} from "drizzle-orm/pg-core";
import { type AdapterAccount } from "next-auth/adapters";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator(
  (name) => `clone-hero-theme-editor_${name}`,
);

export const users = createTable("user", (d) => ({
  id: d
    .varchar({ length: 255 })
    .notNull()
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: d.varchar({ length: 255 }),
  email: d.varchar({ length: 255 }).notNull(),
  emailVerified: d
    .timestamp({
      mode: "date",
      withTimezone: true,
    })
    .default(sql`CURRENT_TIMESTAMP`),
  image: d.varchar({ length: 255 }),
}));

export const usersRelations = relations(users, ({ many }) => ({
  accounts: many(accounts),
  themes: many(themes),
  ratings: many(ratings),
}));

export const themes = createTable(
  "theme",
  (d) => ({
    id: serial("id").primaryKey(),
    name: d.varchar("name", { length: 256 }).notNull(),
    description: text("description"),
    colorData: jsonb("color_data").notNull(),
    isPublic: d.boolean("is_public").default(false).notNull(),
    authorId: d
      .varchar("author_id", { length: 255 })
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }), // If a user is deleted, their themes are deleted.
    createdAt: d
      .timestamp("created_at", {
        mode: "date",
        withTimezone: true,
      })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: d
      .timestamp("updated_at", {
        mode: "date",
        withTimezone: true,
      })
      .$onUpdate(() => new Date()),
  }),
  (t) => [index("theme_author_id_idx").on(t.authorId)],
);

export const themesRelations = relations(themes, ({ one, many }) => ({
  author: one(users, {
    fields: [themes.authorId],
    references: [users.id],
  }),

  ratings: many(ratings),
}));

export const ratings = createTable(
  "rating",
  (d) => ({
    userId: d
      .varchar("user_id", { length: 255 })
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }), // If a user is deleted, their ratings are deleted.
    themeId: d
      .integer("theme_id")
      .notNull()
      .references(() => themes.id, { onDelete: "cascade" }), // If a theme is deleted, its ratings are deleted.
  }),
  (t) => [primaryKey({ columns: [t.userId, t.themeId] })],
);

export const ratingsRelations = relations(ratings, ({ one }) => ({
  user: one(users, {
    fields: [ratings.userId],
    references: [users.id],
  }),
  theme: one(themes, {
    fields: [ratings.themeId],
    references: [themes.id],
  }),
}));

export const accounts = createTable(
  "account",
  (d) => ({
    userId: d
      .varchar({ length: 255 })
      .notNull()
      .references(() => users.id),
    type: d.varchar({ length: 255 }).$type<AdapterAccount["type"]>().notNull(),
    provider: d.varchar({ length: 255 }).notNull(),
    providerAccountId: d.varchar({ length: 255 }).notNull(),
    refresh_token: d.text(),
    access_token: d.text(),
    expires_at: d.integer(),
    token_type: d.varchar({ length: 255 }),
    scope: d.varchar({ length: 255 }),
    id_token: d.text(),
    session_state: d.varchar({ length: 255 }),
  }),
  (t) => [
    primaryKey({ columns: [t.provider, t.providerAccountId] }),
    index("account_user_id_idx").on(t.userId),
  ],
);

export const accountsRelations = relations(accounts, ({ one }) => ({
  user: one(users, { fields: [accounts.userId], references: [users.id] }),
}));

export const sessions = createTable(
  "session",
  (d) => ({
    sessionToken: d.varchar({ length: 255 }).notNull().primaryKey(),
    userId: d
      .varchar({ length: 255 })
      .notNull()
      .references(() => users.id),
    expires: d.timestamp({ mode: "date", withTimezone: true }).notNull(),
  }),
  (t) => [index("t_user_id_idx").on(t.userId)],
);

export const sessionsRelations = relations(sessions, ({ one }) => ({
  user: one(users, { fields: [sessions.userId], references: [users.id] }),
}));

export const verificationTokens = createTable(
  "verification_token",
  (d) => ({
    identifier: d.varchar({ length: 255 }).notNull(),
    token: d.varchar({ length: 255 }).notNull(),
    expires: d.timestamp({ mode: "date", withTimezone: true }).notNull(),
  }),
  (t) => [primaryKey({ columns: [t.identifier, t.token] })],
);
