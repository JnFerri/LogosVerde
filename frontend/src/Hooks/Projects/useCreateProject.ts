import { useMutation, useQueryClient } from "@tanstack/react-query";
import { projectService } from "../../Services/Projects";
import type { ProjectCreate } from "../../Entities/Project/Project.type";

export const useCreateProject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: ProjectCreate) => projectService.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
  });
};
