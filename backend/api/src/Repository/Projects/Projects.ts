
import type { Prisma, PrismaClient } from "../../../generated/prisma/client";

import type { ProjectCreate , ProjectUpdate , ProjectIdParam } from "../../Types/Projects";





class ProjectsRepository {
  private prisma: PrismaClient;
  
  constructor(prisma: PrismaClient){
    this.prisma = prisma;
  }


  async getAll(options?: Prisma.ProjectsFindManyArgs) {
    try{
      return await this.prisma.projects.findMany({
       ...options
      });

    }catch(err){
      throw err
    }
  }
  
  async getById(id: ProjectIdParam, options?: Prisma.ProjectsFindUniqueArgs) {
    try{
      return await this.prisma.projects.findUnique({
        ...options,
        where:  id 
      });

    }catch(err){
      throw err
    }
  }

  async create(data: ProjectCreate) {
    try{
      return await this.prisma.projects.create({
        data,
      });
      
    }catch(err){
      throw err
    }
}

  async update(id: number, data: ProjectUpdate) {
  try{
    return await this.prisma.projects.update({
      where: { id },
      data,
    });

  }catch(err){
    throw err
  }
}

async delete(id: ProjectIdParam) {
  try{
    return await this.prisma.projects.delete({
      where:  id ,
    });

  }catch(err){
    throw err
  }
}

}

export default ProjectsRepository;