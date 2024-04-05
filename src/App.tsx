import './App.css'
import { Route, Routes } from 'react-router-dom'
import RootLayout from './_root/RootLayout'
import {Home, Background, Projects } from './_root/pages'
import { ThemeProvider } from './components/theme-provider'

function App() {

  return (
    <main className='flex h-screen w-full'>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <Routes>
        < Route element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path='/background' element={<Background/>}/>
            <Route path='/projects' element={<Projects/>}/>
        </Route>
    </Routes>
    </ThemeProvider>
  </main>
  )
}

export default App
