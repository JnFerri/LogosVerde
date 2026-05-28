import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AppLayout from './Layouts/AppLayout'
import ProjectsPage from './features/Projects/Pages/ProjectsPage'


function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" >
            <Route index element={<ProjectsPage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
