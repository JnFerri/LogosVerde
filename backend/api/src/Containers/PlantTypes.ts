import { PlantTypesController } from "../Controller/PlantTypes";
import PlantTypesRepository from "../Repository/PlantTypes/PlnatTypes";
import { PlantTypesService } from "../Services/PlantTypes/PlantTypes";

const repository = new PlantTypesRepository();
const service = new PlantTypesService(repository);
const controller = new PlantTypesController(service);

export default controller;
