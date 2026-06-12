import { z } from 'zod';

export const PlantSchema = z.object({
  id: z.number(),

  name: z.string().min(1).max(180),

  scientificName: z.string().min(1).max(180),

  harvestMinDays: z.number().int().positive(),
  harvestMaxDays: z.number().int().positive(),

  sunshineMinHours: z.number().int().positive(),
  sunshineMaxHours: z.number().int().positive(),

  plantTypeId: z.number().int().positive(),

  germinationMinDays: z.number().int().positive(),
  germinationMaxDays: z.number().int().positive(),

  phMin: z.number().min(0).max(14),
  phMax: z.number().min(0).max(14),

  plantingDistancePlants: z.number().int().positive(),

  managementDescription: z.string().nullable(),
  plantingDescription: z.string().nullable(),
  plantIconName: z.string(),
  harvestUnitMeasurementId: z.number().int().positive(),
  plantingUnitMeasurementId: z.number().int().positive(),
  createdAt: z.coerce.date()


});

export const PlantSchemaWithRules = PlantSchema.pick({
  name : true,
  scientificName: true,
  harvestMinDays: true,
  harvestMaxDays: true,
  sunshineMaxHours: true,
  sunshineMinHours: true,
  plantTypeId: true,
  germinationMinDays: true,
  germinationMaxDays: true,
  phMin: true,
  phMax: true,
  plantingDistancePlants: true,
  managementDescription: true,
  plantingDescription: true,
  plantIconName: true,
  harvestUnitMeasurementId: true,
  plantingUnitMeasurementId: true
}).refine(
  (data) => data.harvestMaxDays >= data.harvestMinDays,
  {
    message: "harvestMaxDays it has to be bigger than harvestMinDays",
    path: ["harvestMaxDays"],
  }
).refine(
  (data) => data.germinationMaxDays >= data.germinationMinDays,
  {
    message: "germinationMaxDays invalid",
    path: ["germinationMaxDays"],
  }
).refine(
  (data) => data.sunshineMaxHours >= data.sunshineMinHours,
  {
    message: "sunshineMaxHours invalid",
    path: ["sunshineMaxHours"],
  }
).refine(
  (data) => data.phMax >= data.phMin,
  {
    message: "phMax it has to be bigger than phMin",
    path: ["phMax"],
  }
);

export const CreatePlantSchema = PlantSchemaWithRules;


export const UpdatePlantSchema = PlantSchema.pick({
  name: true,
  scientificName: true,
  harvestMinDays: true,
  harvestMaxDays: true,
  sunshineMinHours: true,
  sunshineMaxHours: true,
  plantTypeId: true,
  germinationMinDays: true,
  germinationMaxDays: true,
  phMin: true,
  phMax: true,
  plantingDistancePlants: true,
  managementDescription: true,
  plantingDescription: true,
} ).partial();


  export const PlantIdParamSchema = z.coerce.number().int().positive();