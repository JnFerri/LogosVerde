import { z } from "zod";

export const PlantingAreaSchema = z.object({
  id: z.number(),

  name: z
    .string()
    .max(120, "Name must have at most 120 characters"),

  createdAt: z.coerce.date(),

  sunshineHours: z
    .number()
    .int()
    .nullable(),

  projectId: z.number(),

});

export const PlantingAreaCreateSchema = PlantingAreaSchema.pick({
  name: true,
  sunshineHours: true,
  projectId: true,
}).extend({
  sunshineHours: PlantingAreaSchema.shape.sunshineHours
    .optional()
    .transform((val) => val ?? null),
});

export const PlantingAreaUpdateSchema = PlantingAreaSchema.pick({
  name: true,
  sunshineHours: true
}).partial();

export const PlantingAreaIdParamSchema = z.coerce.number().int().positive();