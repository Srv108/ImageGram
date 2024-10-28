import { z } from 'zod';

export const zodUserSchema = z.object({
    username: z.string({message: "Invalid Username! "}).min(6),
    email: z.string().min(1,{ message: "Email is required" }).email({ message: "Email is invalid" }),
    password: z.string().min(6),
}) 