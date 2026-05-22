import type z from "zod";
import type { PlantingAreaCreateSchema, PlantingAreaIdParamSchema, PlantingAreaSchema, PlantingAreaUpdateSchema } from "../Schemas/PlantingAreas";

export type PlantingArea = z.infer<typeof PlantingAreaSchema >;

export type PlantingAreaCreate = z.infer<typeof PlantingAreaCreateSchema>;

export type PlantingAreaUpdate = z.infer<typeof PlantingAreaUpdateSchema >;

export type PlantingAreaIdParam = z.infer<typeof PlantingAreaIdParamSchema >;