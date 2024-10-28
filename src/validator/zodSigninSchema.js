import { z } from 'zod';
export const zodSigninSchema = z.object({
    email: z.string().email({message:"Email is required"}),
    password: z.string({message : "caption is required"}).min(6)
})