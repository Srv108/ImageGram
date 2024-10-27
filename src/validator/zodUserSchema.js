import { z } from 'zod';

export const zodUserSchema = z.object({
    username: z.string({message: "Invalid Username! "}).min(6),
    email: z.string().email({message:"Email is required"}),
    password: z.string().min(6),
}) 