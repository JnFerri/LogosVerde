import { z } from "zod";


export const PlantIntercroppingSchema = z.object({
  plantId: z.number(),

  intercroppingPlantId: z.number()
});

export const PlantIntercroppingCreateSchema = PlantIntercroppingSchema.pick({
  plantId: true,
  intercroppingPlantId: true,
}).refine(
    (data) => data.plantId < data.intercroppingPlantId,
    {
      message: "plantId deve ser menor que intercroppingPlantId",
      path: ["plantId"],
    }
  );

  export const PlantIntercroppingParamIdPlantSchema = z.coerce.number().int().positive();








