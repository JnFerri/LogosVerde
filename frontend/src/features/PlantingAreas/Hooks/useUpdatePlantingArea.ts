import { useMutation, useQueryClient } from "@tanstack/react-query";
import { projectService } from "../Services/PlantingArea";
import type { PlantingAreaUpdate } from "../Types/PlantingAreas";

export const useUpdatePlantingArea = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: PlantingAreaUpdate }) =>
      projectService.update(id, data),
    onSuccess: (response) => {
      const updatedArea = response.data.data;
      queryClient.invalidateQueries({ queryKey: ["plantingAreas"] });
      queryClient.invalidateQueries({ 
        queryKey: ["plantingAreas", "project", updatedArea.projectId] 
      });
    },
  });
};
