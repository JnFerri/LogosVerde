import { api } from "../../../api/axios";
import type { ProjectIdParam } from "../../Projects/Types/Project";
import type { PlantingAreaCreate, PlantingAreaIdParam, PlantingAreaUpdate } from "../Types/PlantingAreas";


const getAll = () => {
  return api.get(`/plantingAreas/`);
};

const getById = (id: PlantingAreaIdParam) => {
  return api.get(`/plantingAreas/${id}`);
};

const getByProjectId = (id: ProjectIdParam) =>{
  return api.get(`/plantingAreas/project/${id}`);
}

const create = (data: PlantingAreaCreate) => {
  return api.post("/plantingAreas", data);
};

const update = (id: PlantingAreaIdParam, data: PlantingAreaUpdate) => {
  return api.put(`/plantingAreas/${id}`, data);
};

const remove = (id: PlantingAreaIdParam) => {
  return api.delete(`/plantingAreas/${id}`);
};

export const projectService = {
  getAll,
  getById,
  getByProjectId,
  create,
  update,
  remove,
};
