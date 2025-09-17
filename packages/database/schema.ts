import { sql } from "drizzle-orm";
import { 
	integer,
	pgEnum,
	pgTableCreator,
	text,
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
		enum: ["mint", "near_mint", "very_good_plus", "very_good", "good_plus", "good", "fair", "poor"] 
	  }).notNull(),
	sleeve_condition: text("sleeve_condition", {
		enum: ["mint", "near_mint", "very_good_plus", "very_good", "good_plus", "good", "fair", "poor", "generic", "no_cover"]
	}).notNull(),
	created_at: integer("created_at").notNull().default(sql`extract(epoch from now())`),
	updated_at: integer("updated_at").notNull().default(sql`extract(epoch from now())`),
});