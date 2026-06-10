import { Router } from "express";
import PestDiseasesRoute from "./PestDisesases/PestDiseases"
import ProjectsRoutes from "./Projects/Projects"
import PlantingAreaRoutes from "./PlantingAreas/PlantingAreas";


const app = Router();

// Routes
app.use("/pestDiseases", PestDiseasesRoute );

app.use("/projects", ProjectsRoutes)

app.use("/plantingAreas",PlantingAreaRoutes)

export default app;