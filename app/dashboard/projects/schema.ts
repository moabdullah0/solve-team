import { z } from 'zod';

const ClientSchema = z.object({
    id: z.number(),
    name: z.string(),
    email: z.string().email(),
    company_name: z.string(),
});

const TeamMemberSchema = z.object({
    id: z.number(),
    name: z.string(),
    role: z.string(),
    department: z.string(),
});

export const ProjectSchema = z.object({
    id: z.number(),
    name: z.string(),
    description: z.string(),
    start_date: z.string().datetime(), // Zod supports validating ISO datetime strings
    end_date: z.string().datetime(),
    status: z.string(),
    client: ClientSchema,
    budget: z.string(), // If budget is a stringified number
    progress: z.number(),
    image: z.string().nullable(), // If image can be null
    team_members: z.array(TeamMemberSchema),
});

