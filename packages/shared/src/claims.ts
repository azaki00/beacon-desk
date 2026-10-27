import {z} from "zod";
import { roleSchema } from "./roles.js";

export const tokenClaimsSchema = z.object({
    sub: z.string(),
    email: z.string().email(),
    name: z.string(),
    tenant_id: z.string(),
    roles: z.array(roleSchema),
})

export type TokenClaims = z.infer<typeof tokenClaimsSchema>;

export function parseClaims(input: unknown){
    return tokenClaimsSchema.safeParse(input)
}