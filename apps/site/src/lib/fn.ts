import { createServerFn } from "@tanstack/react-start";
import { getHeaders } from "@tanstack/react-start/server";
import { auth } from "@vinyl-webshop/database/auth";

export const assertAuthenticatedFn = createServerFn({ method: "GET" })
    .handler(async () => {
        const headers = getHeaders()
        const session = await auth.api.getSession({
            headers: headers as unknown as Headers
        })
        if(!session) {
            throw new Error("Unauthorized")
        }
        return session
    })