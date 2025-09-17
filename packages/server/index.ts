import cors from "@fastify/cors";

import type { FastifyPluginAsync } from "fastify";

// biome-ignore lint/complexity/noBannedTypes: We intentionally use {} here
const app: FastifyPluginAsync<{}> = async (fastify, _opts): Promise<void> => {
	await fastify.register(cors, {
		origin: ["*"],
	});

	fastify.get("/", async (_request, reply) => {
		reply.send("hello world");
	});
};

export default app;
