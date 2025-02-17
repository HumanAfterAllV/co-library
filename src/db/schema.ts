import { integer, pgTable, varchar, uuid, text, pgEnum, date, timestamp } from "drizzle-orm/pg-core";

export const STATUS_ENUM = pgEnum("status", ["PENDING", "APPROVED", "REJECTED"])
export const ROL_ENUM = pgEnum("rol", ["STUDENT", "ADMIN"])
export const BORROW_STATUS = pgEnum("borrow_status", ["BORROWED", "RETURNED"])

export const users = pgTable("users", {
    id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
    fullName: varchar("full_name", {length: 25}).notNull(),
    email: text("email").notNull().unique(),
    universityId: integer("university_id").notNull().unique(),
    password: text("password").notNull(),
    status: STATUS_ENUM("status").notNull().default("PENDING"),
    rol: ROL_ENUM("rol").notNull().default("STUDENT"),
    lastActivityDate: date("last_activity_date").defaultNow(),
    createdAt: timestamp("created_at", {withTimezone: true}).defaultNow(),
})