import { useQuery } from "@tanstack/react-query";
import { plantingAreaService } from "../Services/PlantingArea";

export const usePlantingArea = (
  plantingAreaId: number,
  enabled: boolean = true,
) => {
  return useQuery({
    queryKey: ["plantingArea", plantingAreaId],
    queryFn: async () => {
      const response = await plantingAreaService.getById(plantingAreaId);
      return response.data.data;
    },
    enabled: enabled && !!plantingAreaId,
  });
};
