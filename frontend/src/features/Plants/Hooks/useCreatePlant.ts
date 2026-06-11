import { useMutation, useQueryClient } from "@tanstack/react-query";
import { plantService } from "../Services/Plant";
import type { PlantCreate } from "../Types/Plant";

export const useCreatePlant = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: PlantCreate) => plantService.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["plants"] });
    },
  });
};