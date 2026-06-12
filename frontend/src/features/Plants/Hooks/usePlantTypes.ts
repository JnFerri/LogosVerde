import { useQuery } from "@tanstack/react-query";
import { plantService } from "../Services/Plant";

export const usePlantTypes = () => {
  return useQuery({
    queryKey: ["plantTypes"],
    queryFn: async () => {
      const response = await plantService.getAllPlantsTypes();
      return response.data.data;
    },
  });
};
