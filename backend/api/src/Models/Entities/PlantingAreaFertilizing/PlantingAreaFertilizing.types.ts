import type z from "zod";
import type { PlantingAreaFertilizingCreateSchema, PlantingAreaFertilizingParamIdSchema, PlantingAreaFertilizingUpdateSchema } from "../../../Schemas/PlantAreaFertilizing";




export type PlantingAreaFertilizingCreate = z.infer<
  typeof PlantingAreaFertilizingCreateSchema
>;

export type PlantingAreaFertilizingUpdate = z.infer<
  typeof PlantingAreaFertilizingUpdateSchema
>;


export type PlantingAreaFertilizingIdParam = z.infer<
  typeof PlantingAreaFertilizingParamIdSchema
>;