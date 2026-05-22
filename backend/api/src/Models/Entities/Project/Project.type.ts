import type z from "zod";
import type { ProjectCreateSchema, ProjectIdParamSchema, ProjectUpdateSchema } from "../../../Schemas/Projects";
import type { PlantingArea } from "../../../Types/PlantingAreas";
import type Project from "./Project.entity";

export type ProjectWithRelations = Project & {
  plantingAreas: PlantingArea[];
};

export type ProjectCreate = z.infer<typeof ProjectCreateSchema >;

export type ProjectUpdate = z.infer<typeof ProjectUpdateSchema>;

export type ProjectIdParam = z.infer<typeof ProjectIdParamSchema>;