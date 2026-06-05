import { create } from 'zustand'
import type ProjectWithPlantingAreas from '../Entities/ProjectWithPantingAreas'

interface ProjectStore {
  selectedProject: ProjectWithPlantingAreas | null
  setSelectedProject: (project: ProjectWithPlantingAreas) => void
  clearSelectedProject: () => void
}


export const useProjectStore = create<ProjectStore>((set) => ({
  selectedProject: null,

  setSelectedProject: (project) =>
    set({ selectedProject: project }),

  clearSelectedProject: () =>
    set({ selectedProject: null }),
}))