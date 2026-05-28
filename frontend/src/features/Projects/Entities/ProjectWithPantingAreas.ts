import PlantingArea from "../../PlantingAreas/Entities/PlantingArea";
import Project from "./Project";

  export default class ProjectWithPlantingAreas extends Project {
  public plantingAreas: PlantingArea[];

  constructor(
    id: number,
    name: string,
    createdAt: Date,
    plantingAreas: PlantingArea[]
  ) {
    super(id, name, createdAt);
    this.plantingAreas = plantingAreas;
  }
}