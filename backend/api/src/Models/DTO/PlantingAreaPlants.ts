import { z } from "zod";

export const PlantingAreaPlantsSchema = z.object({
  id: z.number(),

  plantingAreaId: z.number(),

  plantId: z.number(),

  plantingMethodId: z.number().nullable().optional(),

  isPlanted: z.number().int(), 
  isHarvested: z.number().int(),

  plantingDate: z.coerce.date().nullable().optional(),

  harvestDate: z.coerce.date().nullable().optional(),

  plantingQuantity: z.number().int().nullable().optional(),

  harvestQuantity: z
    .number()
    .nullable()
    .optional(), 

  harverstUnitMeasurementId: z.number(),

  plantingUnitMeasurementId: z.number(),

  fertilizingId: z.number().nullable().optional(),

  plantingAreaFertilizing: z.any().optional(),

  harvestUnitMeasurement: z.any().optional(),

  plants: z.any().optional(),

  plantingAreas: z.any().optional(),

  plantingUnitMeasurement: z.any().optional(),
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
  harverstUnitMeasurementId: true,
  plantingUnitMeasurementId: true,
  fertilizingId: true,
});

export const PlantingAreaPlantsUpdateSchema = PlantingAreaPlantsSchema.pick({
  plantingAreaId: true,
  plantId: true,
  plantingMethodId: true,
  isPlanted: true,
  isHarvested: true,
  plantingDate: true,
  harvestDate: true,
  plantingQuantity: true,
  harvestQuantity:true,
  harverstUnitMeasurementId:true,
  plantingUnitMeasurementId: true,
  fertilizingId: true,
});

export const PlantingAreaPlantsIdParamSchema = z.object({
  id: z.coerce.number().int().positive(),
});



