import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { useTimeout } from './Hooks/useTimeout'
import { Timer } from './Component/Timer'

function App() {
  
  const isReady = useTimeout(3000)

  
  return (
    <div className="App">
       {/* <h1> {isReady ? "Ready" : "Not Ready"}</h1> */}

       <Timer/>






    </div>
  )
}

export default App
