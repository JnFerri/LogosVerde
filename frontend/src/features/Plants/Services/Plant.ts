import { api } from "../../../api/axios";
import type { PlantCreate, PlantIdParam, PlantUpdate } from "../Types/Plant";


const getAll = () => {
  return api.get(`/plants/`);
};

const getById = (id: PlantIdParam) => {
  return api.get(`/plants/${id}`);
};

const create = (data: PlantCreate) => {
  return api.post("/plants", data);
};

const update = (id: PlantIdParam, data: PlantUpdate) => {
  return api.put(`/plants/${id}`, data);
};

const remove = (id: PlantIdParam) => {
  return api.delete(`/plants/${id}`);
};

const getAllPlantsTypes = () => {
  return api.get(`/plantTypes/`);
};



export const plantService = {
  getAll,
  getById,
  create,
  update,
  remove,
  getAllPlantsTypes,
};
