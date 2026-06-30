import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AppLayout from "./Layouts/AppLayout";
import ProjectsPage from "./features/Projects/Pages/ProjectsPage";
import ProjectPage from "./features/Projects/Pages/ProjectPage";
import PlantsPage from "./features/Plants/Pages/PlantsPage";
import PlantPage from "./features/Plants/Pages/PlantPage";
import PlantingAreaPage from "./features/PlantingAreas/Pages/PlantingAreaPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects">
            <Route index element={<ProjectsPage />} />
            <Route path=":projectId" element={<ProjectPage />} />
            <Route
              path=":projectId/PlantingAreas/:plantingAreaId"
              element={<PlantingAreaPage />}
            />
          </Route>
          <Route path="/plants">
            <Route index element={<PlantsPage />} />
            <Route path=":plantId" element={<PlantPage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
