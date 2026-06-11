import { useMutation, useQueryClient } from "@tanstack/react-query";
import { plantingAreaService} from "../Services/PlantingArea";
import type { PlantingAreaCreate } from "../Types/PlantingAreas";

export const useCreatePlantingArea = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: PlantingAreaCreate) => plantingAreaService.create(data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["plantingAreas"] });
      queryClient.invalidateQueries({ queryKey: ["plantingAreas", "project", variables.projectId] });
    },
  });
};
