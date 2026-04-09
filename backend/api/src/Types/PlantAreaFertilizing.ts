import type z from "zod";
import type { PlantingAreaFertilizingCreateSchema, PlantingAreaFertilizingSchema } from "../Models/DTO/PlantAreaFertilizing";

export type PlantingAreaFertilizing = z.infer<
  typeof PlantingAreaFertilizingSchema
>;

export type PlantingAreaFertilizingCreate = z.infer<
  typeof PlantingAreaFertilizingCreateSchema
>;

export type PlantingAreaFertilizingUpdate = z.infer<
  typeof PlantingAreaFertilizingSchema
>;


export type PlantingAreaFertilizingIdParam = z.infer<
  typeof PlantingAreaFertilizingSchema
>;