import type z from "zod";
import type { UnitMeasurementIdParamSchema } from "../../../Schemas/UnitMesurement";


export type unitMeasurementIdParam = z.infer<typeof UnitMeasurementIdParamSchema>;