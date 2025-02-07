import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './Nav/Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <NavBar />
  )
}

export default App
