/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './context/Profile'
import Footer from './context/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Profile></Profile>
      <Footer></Footer>
    </>
  )
}

export default App
