import z from "zod";

const envSchema = z.object({
	DATABASE_URL: z.url(),
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
