import React from 'react'
import { Route, Routes } from 'react-router'
import About from './pages/About'
import RootLayout from './components/RootLayout'
import HomePage from './pages/HomePage'
import NotFound from './components/NotFound'
import Details from './pages/Details'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path='about' element={<About />}></Route>
        <Route path="*" element={<NotFound />} />
        <Route path="details/:id" element={<Details />} />
      </Route>

    </Routes>
  )
}

export default App
