import { z } from "zod";

export const PlantTypesSchema = z.object({
  id: z.number().int().positive(),
  description: z.string().min(1).max(180),
});

export const PlantTypesCreateSchema = PlantTypesSchema.pick({
  description: true,
});

export const PlantTypesUpdateSchema = PlantTypesSchema.pick({
  description: true,
}).partial();

export const PlantTypesIdParamSchema = z.coerce.number().int().positive();
