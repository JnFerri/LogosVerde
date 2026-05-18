import { Box } from '@mui/material'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Menu from './Components/Menu/Menu'


function App() {
  return (
    <Router>
      <Box sx={{ display: 'flex', height: '100vh'}}>
          <Menu/>
        <main className="p-4 md:ml-[240px]">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
       </main>
      </Box>
    </Router>
  )
}

export default App
