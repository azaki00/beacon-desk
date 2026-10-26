import type { Role } from "./roles.js";

export type TokenClaims = {
    sub: string;
    email: string;
    name: string;
    tenant_id: string;
    roles: Role[];
}