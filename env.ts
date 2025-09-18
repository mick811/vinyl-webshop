import z from "zod";

const envSchema = z.object({
	DATABASE_URL: z.url(),
	DISCOGS_API_KEY: z.string().optional(),
	BETTER_AUTH_SECRET: z.string(),
	BETTER_AUTH_URL: z.string(),

	// social providers for better-auth
	GITHUB_CLIENT_ID: z.string(),
	GITHUB_CLIENT_SECRET: z.string(),
});

/**
 * Parses the environment variables.
 * Throws an error if the environment variables are not valid.
 *
 * @returns The parsed environment variables.
 * @throws {ZodError} If the environment variables are not valid.
 */
const env = envSchema.parse(process.env);
export { env };
