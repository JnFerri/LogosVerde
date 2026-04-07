import type z from "zod";
import type { PlantPlantingMonthsCreateSchema, PlantPlantingMonthsParamIdPlantSchema, PlantPlantingMonthsSchema } from "../Models/DTO/PlantPlantingMonths";

export type PlantPlantingMonthsType = z.infer<
  typeof PlantPlantingMonthsSchema
>;

export type PlantPlantingMonthsCreateType = z.infer<
  typeof PlantPlantingMonthsCreateSchema
>;


export type PlantPlantingMonthsIdParam = z.infer<
  typeof PlantPlantingMonthsParamIdPlantSchema
>;