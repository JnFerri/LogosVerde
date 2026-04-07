import { z } from "zod";


export const UserRefreshTokenSchema = z.object({
  id: z.number(),

  userId: z.number(),

  token: z.string().max(500),

  isActive: z
    .number()
    .int()
    .transform((v) => v === 1), // transforma em boolean

  createdAt: z.coerce.date(),

  expiresAt: z.coerce.date().nullable(),

  revokedAt: z.coerce.date().nullable(),

  replacedBy: z.string().max(500).nullable(),
});

export const UserRefreshTokenCreateSchema = UserRefreshTokenSchema.pick({
  userId: true,
  token: true,
  expiresAt: true,
});

export const UserRefreshTokenUpdateSchema = UserRefreshTokenSchema.pick({
  isActive: true,
  revokedAt: true,
  replacedBy: true,
});

export const UserRefreshTokenIdParamSchema = z.object({
  id: z.coerce.number().int().positive(),
});