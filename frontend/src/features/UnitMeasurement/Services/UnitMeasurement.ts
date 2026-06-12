import { api } from "../../../api/axios";
import type { unitMeasurementIdParam } from "../Types/UnitMeasurement";

const getAll = () => {
  return api.get(`/unitMeasurement/`);
};

const getById = (id: unitMeasurementIdParam) => {
  return api.get(`/unitMeasurement/${id}`);
};



export const projectService = {
  getAll,
  getById
};
