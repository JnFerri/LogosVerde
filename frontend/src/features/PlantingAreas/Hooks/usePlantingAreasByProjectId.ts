import { useQuery } from "@tanstack/react-query";
import { projectService } from "../Services/PlantingArea";

export const usePlantingAreasByProjectId = (projectId: number, enabled: boolean = true) => {
  return useQuery({
    queryKey: ["plantingAreas", "project", projectId],
    queryFn: async () => {
      const response = await projectService.getByProjectId(projectId);
      return response.data.data;
    },
    enabled: enabled && !!projectId,
  });
};
