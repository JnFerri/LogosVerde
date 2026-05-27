import z from "zod";


export const ProjectSchema = z.object({
  id: z.number().int().positive(),

  name: z
    .string()
    .max(180, "Name must have at most 180 characters"),

  createdAt: z.coerce.date(), 
  
});


export const ProjectCreateSchema = ProjectSchema.pick({
  name: true,
});

export const ProjectUpdateSchema = ProjectSchema.pick({
  name: true,
});

export const ProjectIdParamSchema = z.coerce.number().int().positive();



