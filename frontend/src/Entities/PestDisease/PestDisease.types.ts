import type z from "zod";
import type { PestDiseasesCreateSchema, PestDiseasesIdParamSchema, PestDiseasesUpdateSchema } from "../../../Schemas/PestDisease";
import type PestDisease from "./PestDisease.entity";
import type PlantPestDisease from "../PlantPestDisease/PlantPestDisease.entity";

export type PestDiseasesWithRelations = PestDisease &{
  plantPestDiseases: PlantPestDisease[];
}


export type PestDiseasesCreate = z.infer<typeof PestDiseasesCreateSchema>;

export type PestDiseasesUpdate = z.infer<typeof PestDiseasesUpdateSchema>;

export type PestDiseasesIdParam = z.infer<typeof PestDiseasesIdParamSchema>;