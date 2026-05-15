import type z from "zod";
import type { CreatePlantSchema, UpdatePlantSchema , PlantSchema, PlantIdParamSchema } from "../Models/DTO/Plants";


export type Plant = z.infer<typeof PlantSchema>;

export type PlantCreate = z.infer<typeof CreatePlantSchema>;

export type PlantUpdate = z.infer<typeof UpdatePlantSchema>;

export type PlantIdParam = z.infer<typeof PlantIdParamSchema>;