
import type { PrismaClient } from "../../../generated/prisma/client";
import { prisma } from "../../Configs/Prisma";
import { ProjectMapper } from "../../Mappers/Project";
import type Project from "../../Models/Entities/Project/Project.entity";
import type { ProjectCreate, ProjectIdParam, ProjectUpdate } from "../../Models/Entities/Project/Project.type";


class ProjectsRepository {
  private db: PrismaClient

  constructor(db: PrismaClient = prisma) {
    this.db = db;
  }

  async getAll(): Promise<Project[]> {
    const projects = await this.db.projects.findMany();
    return ProjectMapper.toEntities(projects);

  }

  async getAllWithRelations(): Promise<Project[]> {
    const projectsWithRelations = await this.db.projects.findMany(
      {
        include: {
          plantingAreas: true
        }
      }
    );
    return ProjectMapper.toEntitiesWithRelations(projectsWithRelations);
  }


  async getById(id: ProjectIdParam): Promise<Project | null> {
    const project = await this.db.projects.findUnique({
      where: {id:id}
  });
    if (!project) return null;
    return ProjectMapper.toEntity(project);

  }

  async create(data: ProjectCreate): Promise<Project> {
    const projectCreated = await this.db.projects.create({
      data,
    });
    return ProjectMapper.toEntity(projectCreated);

  }

  async update(id: ProjectIdParam, data: ProjectUpdate): Promise<Project> {
    const projectUpdated = await this.db.projects.update({
      where: { id:id },
      data,
    });
    return ProjectMapper.toEntity(projectUpdated);
  }

  async delete(id: ProjectIdParam): Promise<Project> {
    const projectDeleted = await this.db.projects.delete({
      where: {id:id},
    });
    return ProjectMapper.toEntity(projectDeleted);
  }

}

export default ProjectsRepository;