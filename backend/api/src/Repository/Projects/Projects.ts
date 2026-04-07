
import type { Prisma, PrismaClient } from "../../../generated/prisma/client";




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
  
  async getById(id: number, options?: Prisma.ProjectsFindUniqueArgs) {
    try{
      return await this.prisma.projects.findUnique({
        ...options,
        where: { id }
      });

    }catch(err){
      throw err
    }
  }

  async create(data: Prisma.ProjectsCreateInput) {
    try{
      return await this.prisma.projects.create({
        data,
      });
      
    }catch(err){
      throw err
    }
}

  async update(id: number, data: Prisma.ProjectsUpdateInput) {
  try{
    return await this.prisma.projects.update({
      where: { id },
      data,
    });

  }catch(err){
    throw err
  }
}

async delete(id: number) {
  try{
    return await this.prisma.projects.delete({
      where: { id },
    });

  }catch(err){
    throw err
  }
}

}

export default ProjectsRepository;