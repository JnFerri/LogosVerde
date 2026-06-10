import { PlantingAreasController } from "../Controller/PlantingAreas";
import PlantingAreasRepository from "../Repository/PlantingAreas/PlantingAreas";
import PlantingAreasService from "../Services/PlantingAreas/PlantingAreas";

const repository = new PlantingAreasRepository();
const service = new PlantingAreasService(repository);
const controller = new PlantingAreasController(service);

export default controller;
