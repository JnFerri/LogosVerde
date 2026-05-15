
import type { Prisma, PrismaClient } from "../../../generated/prisma/client";
import { prisma } from "../../Configs/Prisma";
import type { ProjectCreate, ProjectUpdate, ProjectIdParam, Project } from "../../Types/Projects";

class ProjectsRepository {
  private db: PrismaClient

  constructor(db: PrismaClient = prisma) {
    this.db = db;
  }

  async getAll(options?: Prisma.ProjectsFindManyArgs): Promise<Project[]> {
    return this.db.projects.findMany({
      ...options
    });
  }

  async getById(id: ProjectIdParam, options?: Prisma.ProjectsFindUniqueArgs): Promise<Project | null> {
    return this.db.projects.findUnique({
      ...options,
      where: id
    });
  }

  async create(data: ProjectCreate): Promise<Project> {
    return this.db.projects.create({
      data,
    });

  }

  async update(id: number, data: ProjectUpdate): Promise<Project> {
    return this.db.projects.update({
      where: { id },
      data,
    });
  }

  async delete(id: ProjectIdParam): Promise<Project> {
    return this.db.projects.delete({
      where: id,
    });
  }

}

export default ProjectsRepository;