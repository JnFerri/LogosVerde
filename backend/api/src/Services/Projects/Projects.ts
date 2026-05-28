import { ApiError } from "../../Models/DTO/ApiResponse/ApiError";
import type ProjectsRepository from "../../Repository/Projects/Projects";
import type Project from "../../Models/Entities/Project/Project.entity";
import type { ProjectCreate, ProjectIdParam, ProjectUpdate } from "../../Models/Entities/Project/Project.type";

export class ProjectsService {
  constructor(private repository: ProjectsRepository) {
    this.repository = repository
  }

  async findAll(): Promise<Project[]> {
    const response = await this.repository.getAllWithRelations()
    return response
  }

  async findById(id: ProjectIdParam): Promise<Project> {
    const response = await this.repository.getById(id)
    if (!response) {
      throw ApiError.NotFound("Project not found")
    }
    return response
  }

  async create(data: ProjectCreate): Promise<Project> {
    const response = await this.repository.create(data)
    return response
  }

  async update(id: ProjectIdParam, data: ProjectUpdate): Promise<Project> {
    const response = await this.repository.update(id, data)
    return response
  }

  async delete(id: ProjectIdParam): Promise<void> {
    await this.repository.delete(id)
  }
}

export default ProjectsService;
