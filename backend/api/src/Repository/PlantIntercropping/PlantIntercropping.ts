
import type { PrismaClient } from "../../../generated/prisma/client";
import isPrismaError from "../../Helpers/isPrismaError";
import normalizePlantPairIntercrooping from "../../Helpers/normalizePlantPairIntercrooping";
import type { CreatePlantIntercroppingDTO } from "../../Types/PlantIntercropping/PlantIntercropping";


class PlantIntercroppingRepository {
  private prisma: PrismaClient;
  
    constructor(prisma: PrismaClient){
      this.prisma = prisma;
    }


  async getById(plantId: number) {
    try{
      return await this.prisma.plantIntercropping.findMany({
        where: {
      OR: [
        { plantId },
        { intercroppingPlantId: plantId}
      ]
    },
    include: {
      plant: true,
      intercroppingPlant: true
    }
  });

    }catch(err){
      throw err
    }
  }

  async create(data: CreatePlantIntercroppingDTO) {
    try{
      const { plantId, intercroppingPlantId } = data
      const dataNomalized : CreatePlantIntercroppingDTO   = await normalizePlantPairIntercrooping(plantId, intercroppingPlantId)
      return await this.prisma.plantIntercropping.create({
        data: dataNomalized,
      })
      
    }catch(err){
      if (isPrismaError(err) && err.code === 'P2002') {
        throw new Error('Intercropping plant already exists for this plants.');
      }

      throw err
    }
}


async delete(id: number) {
  try{
    return await this.prisma.plantIntercropping.delete({
      where: { plantId_intercroppingPlantId : {
        plantId : id,
        intercroppingPlantId: id
      } },
    });

  }catch(err){
    throw err
  }
}

}

export default PlantIntercroppingRepository;