import { z } from "zod";

export const PlantingAreaFertilizingSchema = z.object({
  id: z.number(),

  description: z.string(),

  plantingAreaId: z.number(),

  fertilizingDate: z.coerce.date(),

  createdAt: z.coerce.date()
});

export const PlantingAreaFertilizingCreateSchema = PlantingAreaFertilizingSchema.pick({
  description: true,
  plantingAreaId: true,
  fertilizingDate: true,
});

export const PlantingAreaFertilizingUpdateSchema = PlantingAreaFertilizingSchema.pick({
  description: true,
  plantingAreaId: true,
  fertilizingDate: true,
}).partial();

export const PlantingAreaFertilizingParamIdSchema = z.object({
  id: z.coerce.number().int().positive(),
});