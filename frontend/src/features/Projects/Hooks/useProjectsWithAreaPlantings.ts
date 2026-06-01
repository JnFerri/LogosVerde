import { useQuery } from "@tanstack/react-query";
import { projectService } from "../Services/Projects";

export const useProjectsWithAreaPlantings = () => {
  return useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const response = await projectService.getAllWithAreaPlantings();
      return response.data.data;
    },
  });
};
