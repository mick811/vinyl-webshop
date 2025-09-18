import { sql } from "drizzle-orm";
import {
	boolean,
	integer,
	pgTableCreator,
	text,
	timestamp,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `vinyl_webshop_${name}`);

export const products = createTable("products", {
	id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
	title: text("title").notNull(),
	artist: text("artist").notNull(),
	year: integer("year").notNull(),
	genre: text("genre").notNull(),
	price: integer("price").notNull(),
	image_uri: text("image_uri").notNull(),
	media_condition: text("media_condition", {
		enum: [
			"mint",
			"near_mint",
			"very_good_plus",
			"very_good",
			"good_plus",
			"good",
			"fair",
			"poor",
		],
	}).notNull(),
	sleeve_condition: text("sleeve_condition", {
		enum: [
			"mint",
			"near_mint",
			"very_good_plus",
			"very_good",
			"good_plus",
			"good",
			"fair",
			"poor",
			"generic",
			"no_cover",
		],
	}).notNull(),
	created_at: integer("created_at")
		.notNull()
		.default(sql`extract(epoch from now())`),
	updated_at: integer("updated_at")
		.notNull()
		.default(sql`extract(epoch from now())`),
});

export const users = createTable("users", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	email: text("email").notNull().unique(),
	emailVerified: boolean("email_verified").notNull(),
	image: text("image"),
	createdAt: timestamp("created_at").notNull(),
	updatedAt: timestamp("updated_at").notNull(),
	isAnonymous: boolean("is_anonymous").default(false),
});

export const sessions = createTable("sessions", {
	id: text("id").primaryKey(),
	expiresAt: timestamp("expires_at").notNull(),
	token: text("token").notNull().unique(),
	createdAt: timestamp("created_at").notNull(),
	updatedAt: timestamp("updated_at").notNull(),
	ipAddress: text("ip_address"),
	userAgent: text("user_agent"),
	userId: text("user_id")
		.notNull()
		.references(() => users.id, { onDelete: "cascade" }),
});

export const accounts = createTable("accounts", {
	id: text("id").primaryKey(),
	accountId: text("account_id").notNull(),
	providerId: text("provider_id").notNull(),
	userId: text("user_id")
		.notNull()
		.references(() => users.id, { onDelete: "cascade" }),
	accessToken: text("access_token"),
	refreshToken: text("refresh_token"),
	idToken: text("id_token"),
	accessTokenExpiresAt: timestamp("access_token_expires_at"),
	refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
	scope: text("scope"),
	password: text("password"),
	createdAt: timestamp("created_at").notNull(),
	updatedAt: timestamp("updated_at").notNull(),
});

export const verifications = createTable("verifications", {
	id: text("id").primaryKey(),
	identifier: text("identifier").notNull(),
	value: text("value").notNull(),
	expiresAt: timestamp("expires_at").notNull(),
	createdAt: timestamp("created_at"),
	updatedAt: timestamp("updated_at"),
});
