// import { useState } from 'react'
import Navbar from './Nav/Navbar'
import './App.css'
import Routers from "./Services/Routers.jsx";
import {BrowserRouter} from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
        <Navbar />
        <div>
          <Routers />
        </div>
      </BrowserRouter>
  )
}

export default App
