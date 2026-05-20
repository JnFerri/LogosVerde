import { PlantsController } from "../Controller/Plants";
import PlantsRepository from "../Repository/Plants/Plant";
import PlantsService from "../Services/Plants/Plants";



const repository = new PlantsRepository();
const service = new PlantsService(repository);
const controller = new PlantsController(service);

export default controller;