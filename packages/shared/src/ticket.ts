export type Ticket = {
    id: string;
    status:  "open" | "in_progress" | "resolved";
    priority: "low" | "medium" | "high";
    tenantId: string;
    title: string;
    description: string;
    assignee: string | null;
    createdAt: string;
    createdBy: string;
    updatedAt: string;
}