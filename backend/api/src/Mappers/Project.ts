import type { Prisma } from "../../generated/prisma/client";
import Project from "../Models/Entities/Project/Project.entity";
import type { ProjectWithRelations } from "../Models/Entities/Project/Project.type";
import { PlantingAreaMapper } from "./PlantingArea";

export class ProjectMapper {
  static toEntity(data: Prisma.ProjectsGetPayload<true>): Project {
    return new Project(
      data.id,
      data.name,
      data.createdAt
    );
  }

  static toEntities(data: Prisma.ProjectsGetPayload<true>[]): Project[] {
    return data.map((item) => this.toEntity(item));
  }


  static toEntityWithRelations(data: Prisma.ProjectsGetPayload<{ include: { plantingAreas: true } }>): ProjectWithRelations {
    const project = this.toEntity(data);
    return {
      ...project,
      plantingAreas: PlantingAreaMapper.toEntities(data.plantingAreas)
    };
  }
  static toEntitiesWithRelations(data:Prisma.ProjectsGetPayload<{ include: { plantingAreas: true } }>[]): ProjectWithRelations[] {
    return data.map((item) => this.toEntityWithRelations(item));
  }

}