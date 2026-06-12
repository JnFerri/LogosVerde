import { z } from "zod";

export const UnitMeasurementSchema = z.object({
  id: z.number().int().positive(),
  description: z.string().min(1).max(180),
  abbreviation: z.string().min(1).max(10),
});

export const UnitMeasurementCreateSchema = UnitMeasurementSchema.pick({
  description: true,
  abbreviation: true,
});

export const UnitMeasurementUpdateSchema = UnitMeasurementSchema.pick({
  description: true,
  abbreviation: true,
}).partial();

export const UnitMeasurementIdParamSchema = z.coerce.number().int().positive();
