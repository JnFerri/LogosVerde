import type z from "zod";
import type { PlantingAreaCreateSchema, PlantingAreaIdParamSchema, PlantingAreaUpdateSchema } from "../../../Schemas/PlantingAreas";
import type PlantingArea from "./PlantingArea.entity";
import type PlantingAreaPlant from "../PlantingAreaPlant/PlantingAreaPlant.entity";
import type PlantingAreaFertilizing from "../PlantingAreaFertilizing/PlantingAreaFertilizing.entity";

export type PlantingAreaWithRelations = PlantingArea &{
  plantingAreaPlants: PlantingAreaPlant[];
  plantingAreaFertilizings: PlantingAreaFertilizing[];
};
export type PlantingAreaCreate = z.infer<typeof PlantingAreaCreateSchema>;

export type PlantingAreaUpdate = z.infer<typeof PlantingAreaUpdateSchema >;

export type PlantingAreaIdParam = z.infer<typeof PlantingAreaIdParamSchema >;