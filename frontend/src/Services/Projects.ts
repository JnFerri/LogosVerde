import { api } from "../api/axios";
import type { ProjectCreate, ProjectIdParam, ProjectUpdate } from "../Entities/Project/Project.type";

const getAll = () => {
  return api.get(`/projects/`);
};

const getById = (id: ProjectIdParam) => {
  return api.get(`/projects/${id}`);
};

const create = (data: ProjectCreate) => {
  return api.post("/projects", data);
};

const update = (id: ProjectIdParam, data: ProjectUpdate) => {
  return api.put(`/projects/${id}`, data);
};

const remove = (id: ProjectIdParam) => {
  return api.delete(`/projects/${id}`);
};

export const projectService = {
  getAll,
  getById,
  create,
  update,
  remove,
};
