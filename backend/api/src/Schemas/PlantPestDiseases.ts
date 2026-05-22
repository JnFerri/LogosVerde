import { z } from "zod";

export const PlantPestDiseaseSchema = z.object({
  plantId: z.number(),

  pestDiseaseId: z.number(),

});

export const PlantPestDiseaseCreateSchema = PlantPestDiseaseSchema.pick({
  plantId: true,
  pestDiseaseId: true,
});


export const PlantPestDiseaseParamIdPestDiseaseSchema = z.coerce.number().int().positive()

export const PlantPestDiseaseParamIdPlantSchema = z.coerce.number().int().positive()





