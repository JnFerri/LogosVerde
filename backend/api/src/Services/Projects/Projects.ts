import { ApiError } from "../../Models/DTO/ApiResponse/ApiError";
import { ProjectSchema } from "../../Schemas/Projects";
import type ProjectsRepository from "../../Repository/Projects/Projects";
import type Project from "../../Models/Entities/Project/Project.entity";
import type { ProjectCreate, ProjectIdParam, ProjectUpdate } from "../../Models/Entities/Project/Project.type";

export class ProjectsService {
  constructor(private repository: ProjectsRepository) {
    this.repository = repository;
  }

  async findAll(): Promise<Project[]> {
    const response = await this.repository.getAll();
    return ProjectSchema.array().parse(response);
  }

  async findById(id: ProjectIdParam): Promise<Project> {
    const response = await this.repository.getById(id);
    if (!response) {
      throw ApiError.NotFound("Project not found");
    }
    const responseValidated = ProjectSchema.parse(response);
    return responseValidated;
  }

  async create(data: ProjectCreate): Promise<Project> {
    const response = await this.repository.create(data);
    const responseValidated = ProjectSchema.parse(response);
    return responseValidated;
  }

  async update(id: ProjectIdParam, data: ProjectUpdate): Promise<Project> {
    const response = await this.repository.update(id, data);
    const responseValidated = ProjectSchema.parse(response);
    return responseValidated;
  }

  async delete(id: ProjectIdParam): Promise<void> {
    await this.repository.delete(id);
  }
}

export default ProjectsService;
