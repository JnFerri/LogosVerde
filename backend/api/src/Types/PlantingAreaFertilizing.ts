import type z from "zod";
import type { PlantingAreaFertilizingCreateSchema, PlantingAreaFertilizingParamIdPlantingAreaSchema, PlantingAreaFertilizingParamIdSchema, PlantingAreaFertilizingSchema, PlantingAreaFertilizingUpdateSchema } from "../Schemas/PlantAreaFertilizing";

export type PlantingAreaFertilizing = z.infer<
  typeof PlantingAreaFertilizingSchema
>;

export type PlantingAreaFertilizingCreate = z.infer<
  typeof PlantingAreaFertilizingCreateSchema
>;

export type PlantingAreaFertilizingUpdate = z.infer<
  typeof PlantingAreaFertilizingUpdateSchema
>;


export type PlantingAreaFertilizingIdParam = z.infer<
  typeof PlantingAreaFertilizingParamIdSchema
>;

export type PlantingAreaFertilizingIdPlantingAreaParam = z.infer<
  typeof PlantingAreaFertilizingParamIdPlantingAreaSchema
>;