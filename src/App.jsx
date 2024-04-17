import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const hero = "Wecome to my room";

  return (
    <>
      <div>
        <p>follow us</p>
        <h1 className='text-2xl'>mabu</h1>
        <div className='menu flex'>
          <span>about us</span>
          <span className='mx-50'>create account</span>
        </div>
      </div>
    </>
  )
}

export default App
