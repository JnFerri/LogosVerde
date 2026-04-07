import { z } from "zod";

export const PestsDiseasesSchema = z.object({
  id: z.number(),

  name: z.string().max(180),

  description: z.string().nullable().optional(),

  controlDescription: z.string().nullable().optional()
});

export const PestsDiseasesCreateSchema = PestsDiseasesSchema.pick({
  name: true,
  description: true,
  controlDescription: true,
});

export const PestsDiseasesUpdateSchema = PestsDiseasesSchema.pick({
  name: true,
  description: true,
  controlDescription: true,
});

export const PestsDiseasesIdParamSchema = z.object({
  id: z.coerce.number().int().positive(),
});