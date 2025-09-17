import cors from "@fastify/cors";

import type { FastifyPluginAsync } from "fastify";

const app: FastifyPluginAsync<{}> = async (fastify, opts): Promise<void> => {

    await fastify.register(cors, {
        origin: ["*"],
    })

    fastify.get("/", async (_request, reply) => {
        reply.send("hello world");
    })
}

export default app;