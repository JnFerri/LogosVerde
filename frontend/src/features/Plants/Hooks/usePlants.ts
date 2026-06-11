import { useQuery } from "@tanstack/react-query";
import { plantService } from "../Services/Plant";


export const usePlants = () => {
  return useQuery(
    {
      queryKey: ["plants"],
      queryFn: async () => {
        const response = await plantService.getAll();
        return response.data.data;
      }
    }
  )
}