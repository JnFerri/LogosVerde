import type z from "zod";
import type { PlantingAreaFertilizingCreateSchema, PlantingAreaFertilizingSchema } from "../Models/DTO/PlantAreaFertilizing";

export type PlantingAreaFertilizingType = z.infer<
  typeof PlantingAreaFertilizingSchema
>;

export type PlantingAreaFertilizingCreateType = z.infer<
  typeof PlantingAreaFertilizingCreateSchema
>;

export type PlantingAreaFertilizingUpdateType = z.infer<
  typeof PlantingAreaFertilizingSchema
>;


export type PlantingAreaFertilizingIdParam = z.infer<
  typeof PlantingAreaFertilizingSchema
>;