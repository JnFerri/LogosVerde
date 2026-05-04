import type z from "zod";
import type { PestDiseasesCreateSchema, PestDiseasesIdParamSchema, PestDiseasesSchema, PestDiseasesUpdateSchema } from "../Models/DTO/PestDisease";

export type PestDiseases = z.infer<typeof PestDiseasesSchema>;

export type PestDiseasesCreate = z.infer<typeof PestDiseasesCreateSchema>;

export type PestDiseasesUpdate = z.infer<typeof PestDiseasesUpdateSchema>;

export type PestDiseasesIdParam = z.infer<typeof PestDiseasesIdParamSchema>;