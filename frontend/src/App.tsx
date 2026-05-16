import './App.css'
import { Box, CssBaseline } from '@mui/material'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Menu from './Components/Menu/Menu'
import MenuActions from './Components/Menu/MenuActions'


function App() {
  return (
    <Router>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
          <MenuActions />
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
