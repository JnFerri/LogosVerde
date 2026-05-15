import { PestDiseaseController } from "../Controller/PestDiseaseController";
import PestDiseasesRepository from "../Repository/PestDiseases/PestDiseases";
import { PestDiseaseService } from "../Services/PestDiseases/PestDiseases";

const repository = new PestDiseasesRepository();
const service = new PestDiseaseService(repository);
const controller = new PestDiseaseController(service);

export default controller;