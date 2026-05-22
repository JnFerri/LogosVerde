import type z from "zod";
import type { PlantPestDiseaseCreateSchema, PlantPestDiseaseParamIdPestDiseaseSchema, PlantPestDiseaseParamIdPlantSchema, PlantPestDiseaseSchema } from "../Schemas/PlantPestDiseases";

export type PlantPestDiseases = z.infer<typeof PlantPestDiseaseSchema>;

export type PlantPestDiseasesCreate = z.infer<typeof PlantPestDiseaseCreateSchema>;

export type PlantPestDiseasesIdPlantParam = z.infer<typeof PlantPestDiseaseParamIdPlantSchema>;

export type PlantPestDiseasesIdPestDiseaseParam = z.infer<typeof PlantPestDiseaseParamIdPestDiseaseSchema>;
