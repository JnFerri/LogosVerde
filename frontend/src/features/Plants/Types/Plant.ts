import type z from "zod";
import type { CreatePlantSchema, UpdatePlantSchema , PlantIdParamSchema } from "../../../Schemas/Plants";
import type Plant from "../Entities/Plant";
import type UnitMeasurements from "../../../Entities/UnitMesurement/UnitMeasurements.entity";
import type PlantPestDisease from "../../../Entities/PlantPestDisease/PlantPestDisease.entity";
import type PlantTypes from "../../../Entities/PlantTypes/PlantTypes.entity";



export type PlantWithRelations = Plant & {
harvestUnitMeasurement : UnitMeasurements,
plantingUnitMeasurement : UnitMeasurements,
plantTypes: PlantTypes,
plantPestDiseases: PlantPestDisease[]
}
export type PlantCreate = z.infer<typeof CreatePlantSchema>;

export type PlantUpdate = z.infer<typeof UpdatePlantSchema>;

export type PlantIdParam = z.infer<typeof PlantIdParamSchema>;