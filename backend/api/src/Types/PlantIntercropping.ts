import type z from "zod";
import type { PlantIntercroppingCreateSchema, PlantIntercroppingParamIdPlantSchema, PlantIntercroppingSchema } from "../Schemas/PlantIntercropping";

export type PlantIntercropping = z.infer<typeof PlantIntercroppingSchema>;

export type PlantIntercroppingCreate = z.infer<typeof PlantIntercroppingCreateSchema>;

export type PlantIntercroppingIdPlantParam = z.infer<typeof PlantIntercroppingParamIdPlantSchema>;