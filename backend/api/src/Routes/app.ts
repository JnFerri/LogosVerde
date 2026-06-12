import { Router } from "express";
import PestDiseasesRoute from "./PestDisesases/PestDiseases"
import ProjectsRoutes from "./Projects/Projects"
import PlantingAreaRoutes from "./PlantingAreas/PlantingAreas";
import plantTypesRoute from "./PlantTypes/PlantTypes";
import PlantsRoute from "./Plants/Plants";


const app = Router();

// Routes
app.use("/pestDiseases", PestDiseasesRoute );

app.use("/projects", ProjectsRoutes)

app.use("/plantingAreas",PlantingAreaRoutes)

app.use("/plantTypes", plantTypesRoute)

app.use("/plants", PlantsRoute)


export default app;