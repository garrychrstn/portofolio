import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './comp/Navbar'
import Hero from './comp/Hero'
import Past from './comp/Past'
import './App.css'

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <Past />
    </>
  )
}

export default App
