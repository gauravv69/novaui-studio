import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(100, "Password is too long"),
  rememberMe: z.boolean().optional().default(false),
});

export type LoginSchema = z.infer<typeof loginSchema>;
