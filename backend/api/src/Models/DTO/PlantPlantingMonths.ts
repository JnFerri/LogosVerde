import { z } from "zod";

export const PlantPlantingMonthsSchema = z.object({
  plantId: z.number(),

  monthId: z.number()

});

export const PlantPlantingMonthsCreateSchema = PlantPlantingMonthsSchema.pick({
  plantId: true,
  monthId: true,
});

export const PlantPlantingMonthsParamIdPlantSchema = z.object({
  plantId: z.coerce.number().int().positive(),
});