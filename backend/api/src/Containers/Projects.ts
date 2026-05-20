import { ProjectsController } from "../Controller/Projects";
import ProjectsRepository from "../Repository/Projects/Projects";
import ProjectsService from "../Services/Projects/Projects";


const repository = new ProjectsRepository();
const service = new ProjectsService(repository);
const controller = new ProjectsController(service);

export default controller;