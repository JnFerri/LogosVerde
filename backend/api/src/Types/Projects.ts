import type z from "zod";
import type { ProjectCreateSchema, ProjectIdParamSchema, ProjectSchema, ProjectUpdateSchema } from "../Schemas/Projects";

export type Project = z.infer<typeof ProjectSchema>;

export type ProjectCreate = z.infer<typeof ProjectCreateSchema >;

export type ProjectUpdate = z.infer<typeof ProjectUpdateSchema>;

export type ProjectIdParam = z.infer<typeof ProjectIdParamSchema>;