import type z from "zod";
import type { ProjectCreateSchema, ProjectIdParamSchema, ProjectUpdateSchema } from "../Schemas/Projects";
import type Project from "../Entities/Project";
import type PlantingArea from "../../PlantingAreas/Entities/PlantingArea";

export type ProjectWithRelations = Project & {
  plantingAreas: PlantingArea[];
};

export type ProjectCreate = z.infer<typeof ProjectCreateSchema >;

export type ProjectUpdate = z.infer<typeof ProjectUpdateSchema>;

export type ProjectIdParam = z.infer<typeof ProjectIdParamSchema>;