import { defineConfig } from "drizzle-kit";
import { env } from "@env";

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
})