import type z from "zod";
import type { PlantPlantingMonthsCreateSchema, PlantPlantingMonthsParamIdPlantSchema, PlantPlantingMonthsSchema } from "../Schemas/PlantPlantingMonths";

export type PlantPlantingMonths = z.infer<
  typeof PlantPlantingMonthsSchema
>;

export type PlantPlantingMonthsCreate = z.infer<
  typeof PlantPlantingMonthsCreateSchema
>;


export type PlantPlantingMonthsIdParam = z.infer<
  typeof PlantPlantingMonthsParamIdPlantSchema
>;