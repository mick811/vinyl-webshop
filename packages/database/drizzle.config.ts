import { env } from "@env";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
	dialect: "postgresql",
	schema: "./schema.ts",
	out: "./migrations",
	dbCredentials: {
		url: env.DATABASE_URL,
	},
	verbose: true,
	strict: true,
	schemaFilter: ["vinyl_webshop_*"],
});
