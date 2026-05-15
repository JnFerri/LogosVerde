import { Router } from "express";
import PestDiseasesRoute from "./PestDisesases/PestDiseases"
const app = Router();

// Routes
app.use("/pestDiseases", PestDiseasesRoute );


export default app;