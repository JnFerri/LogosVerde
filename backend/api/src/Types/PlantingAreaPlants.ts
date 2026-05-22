import type z from "zod";
import type { PlantingAreaPlantsCreateSchema, PlantingAreaPlantsIdParamSchema, PlantingAreaPlantsSchema, PlantingAreaPlantsUpdateSchema } from "../Schemas/PlantingAreaPlants";


export type PlantingAreaPlants = z.infer<typeof PlantingAreaPlantsSchema>;

export type PlantingAreaPlantsCreate = z.infer<typeof PlantingAreaPlantsCreateSchema>;

export type PlantingAreaPlantsUpdate = z.infer<typeof PlantingAreaPlantsUpdateSchema>;

export type PlantingAreaPlantsIdParam = z.infer<typeof PlantingAreaPlantsIdParamSchema>;