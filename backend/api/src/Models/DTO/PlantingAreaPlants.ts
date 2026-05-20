import { z } from "zod";

export const PlantingAreaPlantsSchema = z.object({
  id: z.number(),

  plantingAreaId: z.number(),

  plantId: z.number(),

  plantingMethodId: z.number(),

  isPlanted: z.boolean(), 
  isHarvested: z.boolean(),

  plantingDate: z.coerce.date().nullable(),

  harvestDate: z.coerce.date().nullable(),

  plantingQuantity: z.number().int().nullable(),

  harvestQuantity: z
    .number()
    .nullable(),

  fertilizingId: z.number().nullable()
});

export const PlantingAreaPlantsCreateSchema = PlantingAreaPlantsSchema.pick({
  plantingAreaId: true,
  plantId: true,
  plantingMethodId: true,
  isPlanted: true,
  isHarvested: true,
  plantingDate: true,
  harvestDate: true,
  plantingQuantity: true,
  harvestQuantity: true,
  fertilizingId: true,
}).extend({
  plantingDate: PlantingAreaPlantsSchema.shape.plantingDate
    .optional()
    .transform((val) => val ?? null),
  harvestDate: PlantingAreaPlantsSchema.shape.harvestDate
    .optional()
    .transform((val) => val ?? null),
  plantingQuantity: PlantingAreaPlantsSchema.shape.plantingQuantity
    .optional()
    .transform((val) => val ?? null),
  harvestQuantity: PlantingAreaPlantsSchema.shape.harvestQuantity
    .optional()
    .transform((val) => val ?? null),
  ferilizingId: PlantingAreaPlantsSchema.shape.fertilizingId
    .optional()
    .transform((val) => val ?? null),
});

export const PlantingAreaPlantsUpdateSchema = PlantingAreaPlantsSchema.pick({
  plantId: true,
  plantingMethodId: true,
  isPlanted: true,
  isHarvested: true,
  plantingDate: true,
  harvestDate: true,
  plantingQuantity: true,
  harvestQuantity:true,
  fertilizingId: true,
}).partial();

export const PlantingAreaPlantsIdParamSchema = z.coerce.number().int().positive();



