import type z from "zod";
import type { PlantIntercroppingSchema } from "../Models/DTO/PlantIntercropping";

export type PlantIntercropping = z.infer<typeof PlantIntercroppingSchema>;

export type PlantIntercroppingCreate = z.infer<typeof PlantIntercroppingSchema>;

export type PlantIntercroppingIdPlantParam = z.infer<typeof PlantIntercroppingSchema>;