import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { CssBaseline, ThemeProvider } from '@mui/material'
import './index.css'
import { theme } from './Contexts/Theme.ts'
import { ReactQueryProvider } from './Providers/ReactQueryProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ReactQueryProvider>
        <App />
      </ReactQueryProvider>
    </ThemeProvider>
  </StrictMode>,
)
