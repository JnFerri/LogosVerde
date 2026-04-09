import type z from "zod";
import type { PestsDiseasesCreateSchema, PestsDiseasesIdParamSchema, PestsDiseasesSchema, PestsDiseasesUpdateSchema } from "../Models/DTO/PestDisease";

export type PestsDiseases = z.infer<typeof PestsDiseasesSchema>;

export type PestsDiseasesCreate = z.infer<typeof PestsDiseasesCreateSchema>;

export type PestsDiseasesUpdate = z.infer<typeof PestsDiseasesUpdateSchema>;

export type PestsDiseasesIdParam = z.infer<typeof PestsDiseasesIdParamSchema>;