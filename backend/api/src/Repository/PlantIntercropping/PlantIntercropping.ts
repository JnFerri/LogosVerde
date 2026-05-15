
import type { PrismaClient } from "../../../generated/prisma/client";
import { prisma } from "../../Configs/Prisma";
import normalizePlantPairIntercrooping from "../../Helpers/normalizePlantPairIntercrooping";
import type { PlantIntercropping, PlantIntercroppingCreate, PlantIntercroppingIdPlantParam } from "../../Types/PlantIntercropping";

class PlantIntercroppingRepository {
  private db: PrismaClient

  constructor(db: PrismaClient = prisma) {
    this.db = db;
  }

  async getById(plantId: PlantIntercroppingIdPlantParam): Promise<PlantIntercropping[]> {
    return this.db.plantIntercropping.findMany({
      where: {
        OR: [
          plantId,
          plantId
        ]
      },
      include: {
        plant: true,
        intercroppingPlant: true
      }
    });
  }

  async create(data: PlantIntercroppingCreate): Promise<PlantIntercropping> {
    const { plantId, intercroppingPlantId } = data
    const dataNomalized: PlantIntercroppingCreate = await normalizePlantPairIntercrooping(plantId, intercroppingPlantId)
    return this.db.plantIntercropping.create({
      data: dataNomalized,
    })
  }

  async delete(id: PlantIntercroppingIdPlantParam): Promise<PlantIntercropping> {
    return this.db.plantIntercropping.delete({
      where: {
        plantId_intercroppingPlantId: {
          plantId: id.plantId,
          intercroppingPlantId: id.intercroppingPlantId
        }
      },
    });
  }

}

export default PlantIntercroppingRepository;