import { UnitMeasurementController } from "../Controller/UnitMeasurement";
import UnitMesurementRepository from "../Repository/UnitMesurement/UnitMesurement";
import UnitMeasurementService from "../Services/UnitMeasurement/UnitMeasurement";

const repository = new UnitMesurementRepository();
const service = new UnitMeasurementService(repository);
const controller = new UnitMeasurementController(service);

export default controller;
