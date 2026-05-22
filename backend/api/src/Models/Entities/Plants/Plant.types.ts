import type z from "zod";
import type { CreatePlantSchema, UpdatePlantSchema , PlantIdParamSchema } from "../../../Schemas/Plants";
import type Plant from "./Plant.entity";
import type UnitMeasurements from "../UnitMesurement/UnitMeasurements.entity";
import type PlantTypes from "../PlantTypes/PlantTypes.entity";


export type PlantWithRelations = Plant & {
harvestUnitMeasurement : UnitMeasurements,
plantingUnitMeasurement : UnitMeasurements,
plantTypes: PlantTypes 
}
export type PlantCreate = z.infer<typeof CreatePlantSchema>;

export type PlantUpdate = z.infer<typeof UpdatePlantSchema>;

export type PlantIdParam = z.infer<typeof PlantIdParamSchema>;