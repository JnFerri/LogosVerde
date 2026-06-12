import type z from "zod";
import type { UnitMeasurementIdParamSchema } from "../Schema/UnitMeasurement";



export type unitMeasurementIdParam = z.infer<typeof UnitMeasurementIdParamSchema>;