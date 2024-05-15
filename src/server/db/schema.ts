// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { relations, sql, type InferSelectModel } from "drizzle-orm";
import {
  index,
  pgTableCreator,
  timestamp,
  unique,
  varchar,
} from "drizzle-orm/pg-core";
import { createId } from "@paralleldrive/cuid2";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator(
  (name) => `translucent-detyre_${name}`,
);

export const users = createTable(
  "user",
  {
    id: varchar("cuid", { length: 24 })
      .notNull()
      .$default(createId)
      .primaryKey(),
    email: varchar("email", { length: 256 }).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow()
      .$onUpdateFn(() => sql`now()`),
  },
  (user) => ({ emailIndex: index("email_idx").on(user.email) }),
);

export const usersRelations = relations(users, ({ many }) => ({
  sectionRights: many(sectionRights),
}));

export const sections = createTable(
  "section",
  {
    id: varchar("cuid", { length: 24 })
      .notNull()
      .$default(createId)
      .primaryKey(),
    name: varchar("name", { length: 50 }).notNull().unique(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow()
      .$onUpdateFn(() => sql`now()`),
  },
  (section) => ({ nameIndex: index("name_idx").on(section.name) }),
);

export const sectionsRelations = relations(sections, ({ many }) => ({
  sectionRights: many(sectionRights),
}));

export const sectionRights = createTable(
  "section_right",
  {
    id: varchar("cuid", { length: 24 })
      .notNull()
      .$default(createId)
      .primaryKey(),
    userId: varchar("user_cuid", { length: 50 }).notNull().unique(),
    sectionId: timestamp("section_cuid", { withTimezone: true })
      .notNull()
      .defaultNow(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow()
      .$onUpdateFn(() => sql`now()`),
  },
  (sectionRight) => ({
    userSectionRight: unique("user_section_idx").on(
      sectionRight.userId,
      sectionRight.sectionId,
    ),
  }),
);

export const sectionRightsRelations = relations(sectionRights, ({ one }) => ({
  user: one(users, { fields: [sectionRights.userId], references: [users.id] }),
  section: one(sections, {
    fields: [sectionRights.sectionId],
    references: [sections.id],
  }),
}));
