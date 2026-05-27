import { z } from "zod";

export const PestDiseasesSchema = z.object({
  id: z.number(),

  name: z.string().max(180),

  description: z.string().nullable(),

  controlDescription: z.string().nullable()
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

export const PestDiseasesIdParamSchema =  z.coerce.number().int().positive();