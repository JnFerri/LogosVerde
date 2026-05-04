import { z } from "zod";

export const PestDiseasesSchema = z.object({
  id: z.number(),

  name: z.string().max(180),

  description: z.string().nullable().optional(),

  controlDescription: z.string().nullable().optional()
});

export const PestDiseasesCreateSchema = PestDiseasesSchema.pick({
  name: true,
  description: true,
  controlDescription: true,
}).extend({
  description: PestDiseasesSchema.shape.description
    .optional()
    .transform((val) => val ?? null),
  controlDescription: PestDiseasesSchema.shape.controlDescription
    .optional()
    .transform((val) => val ?? null),
});;

export const PestDiseasesUpdateSchema = PestDiseasesSchema.pick({
  name: true,
  description: true,
  controlDescription: true,
}).partial();

export const PestDiseasesIdParamSchema = z.object({
  id: z.coerce.number().int().positive(),
});