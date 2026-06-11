import { useQuery } from "@tanstack/react-query"
import { plantService } from "../Services/Plant";

export const usePlant = (id: number) => {
  return useQuery({
    queryKey: ["plants",id],
    queryFn: async () => {
      const response = await plantService.getById(id);
      return response.data.data;
    }
  })
}