import { useMutation, useQueryClient } from "@tanstack/react-query";
import { projectService } from "../Services/PlantingArea";
import type { PlantingAreaCreate } from "../Types/PlantingAreas";

export const useCreatePlantingArea = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: PlantingAreaCreate) => projectService.create(data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["plantingAreas"] });
      queryClient.invalidateQueries({ queryKey: ["plantingAreas", "project", variables.projectId] });
    },
  });
};
