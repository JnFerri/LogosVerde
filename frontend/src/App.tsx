import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AppLayout from './Layouts/AppLayout'


function App() {
  return (
   <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
