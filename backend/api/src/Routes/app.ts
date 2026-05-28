import { Router } from "express";
import PestDiseasesRoute from "./PestDisesases/PestDiseases"
import ProjectsRoutes from "./Projects/Projects"

const app = Router();

// Routes
app.use("/pestDiseases", PestDiseasesRoute );

app.use("/projects", ProjectsRoutes)

export default app;