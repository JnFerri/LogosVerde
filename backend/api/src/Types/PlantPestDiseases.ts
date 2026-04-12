import type z from "zod";
import type { PlantPestDiseaseCreateSchema, PlantPestDiseaseParamIdPestDiseaseSchema, PlantPestDiseaseParamIdPlantSchema, PlantPestDiseaseSchema } from "../Models/DTO/PlantPestDiseases";

export type PlantPestDisease = z.infer<typeof PlantPestDiseaseSchema>;

export type PlantPestDiseaseCreate = z.infer<typeof PlantPestDiseaseCreateSchema>;

export type PlantPestDiseaseIdPlantParam = z.infer<typeof PlantPestDiseaseParamIdPlantSchema>;

export type PlantPestDiseaseIdPestDiseaseParam = z.infer<typeof PlantPestDiseaseParamIdPestDiseaseSchema>;