import type z from "zod";
import type { PlantTypesIdParamSchema } from "../../../Schemas/PlantTypes";


export type PlantTypeIdParam = z.infer<typeof PlantTypesIdParamSchema>;