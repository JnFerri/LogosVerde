import { useQuery } from "@tanstack/react-query";
import { projectService } from "../Services/Projects";

export const useProject = (id: number , enabled: boolean = true) => {
  return useQuery({
    queryKey: ["projects", id],
    queryFn: async () => {
      const response = await projectService.getById(id);
      return response.data.data;
    },
    enabled,
  });
};
