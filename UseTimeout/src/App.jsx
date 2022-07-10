import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { useTimeout } from './Hooks/useTimeout'
import { Timer } from './Component/Timer'
import { Fetch } from './Component/Fetch'

function App() {
  
  const isReady = useTimeout(3000)

  
  return (
    <div className="App">
       {/* <h1> {isReady ? "Ready" : "Not Ready"}</h1> */}

       <Timer/>

       <Fetch/>






    </div>
  )
}

export default App
