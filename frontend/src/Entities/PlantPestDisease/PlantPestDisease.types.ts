import type z from "zod";
import type { PlantPestDiseaseCreateSchema, PlantPestDiseaseParamIdPestDiseaseSchema, PlantPestDiseaseParamIdPlantSchema } from "../../../Schemas/PlantPestDiseases";

export type PlantPestDiseasesCreate = z.infer<typeof PlantPestDiseaseCreateSchema>;

export type PlantPestDiseasesIdPlantParam = z.infer<typeof PlantPestDiseaseParamIdPlantSchema>;

export type PlantPestDiseasesIdPestDiseaseParam = z.infer<typeof PlantPestDiseaseParamIdPestDiseaseSchema>;
