import type z from "zod";
import type { PlantingAreaSchema } from "../Models/DTO/PlantingAreas";

export type PlantingArea = z.infer<typeof PlantingAreaSchema >;
export type PlantingAreaCreate = z.infer<typeof PlantingAreaSchema >;
export type PlantingAreaUpdate = z.infer<typeof PlantingAreaSchema >;
export type PlantingAreaIdParam = z.infer<typeof PlantingAreaSchema >;