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
    .nullable()
    .optional(),

  projectId: z.number(),

});

export const PlantingAreaCreateSchema = PlantingAreaSchema.pick({
  name: true,
  sunshineHours: true,
  projectId: true,
});

export const PlantingAreaUpdateSchema = PlantingAreaSchema.pick({
  name: true,
  sunshineHours: true,
});

export const PlantingAreaIdParamSchema = z.object({
  id: z.coerce.number().int().positive(),
});