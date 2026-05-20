import { z } from "zod";

export const UserSchema = z.object({
  id: z.number(),

  name: z.string().max(120).min(1),

  email: z.email().max(180).min(1),

  password: z.string().max(180).min(6),

  isActive: z.boolean(), 

  createdAt: z.coerce.date()
});

export const UserCreateSchema = UserSchema.pick({
  name: true,
  email: true,
  password: true,
});

export const UserUpdateSchema = UserSchema.pick({
  name: true,
  email: true,
  password: true,
}).partial();

export const UserIdParamSchema = z.coerce.number().int().positive();