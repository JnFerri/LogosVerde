import type z from "zod";
import type { PlantingAreaPlantsCreateSchema, PlantingAreaPlantsSchema, PlantingAreaPlantsUpdateSchema } from "../Models/DTO/PlantingAreaPlants";


export type PlantingAreaPlants = z.infer<typeof PlantingAreaPlantsSchema>;

export type PlantingAreaPlantsCreate = z.infer<typeof PlantingAreaPlantsCreateSchema>;

export type PlantingAreaPlantsUpdate = z.infer<typeof PlantingAreaPlantsUpdateSchema>;

export type PlantingAreaPlantsIdParam = z.infer<typeof PlantingAreaPlantsSchema>;