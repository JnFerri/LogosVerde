import { useQuery } from "@tanstack/react-query";
import { projectService } from "../Services/UnitMeasurement";

export const useUnitMeasurements = () => {
  return useQuery({
    queryKey: ["unitMeasurements"],
    queryFn: async () => {
      const response = await projectService.getAll();
      return response.data.data;
    },
  });
};
