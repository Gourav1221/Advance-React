

import React, { useState,useRef ,useEffect} from 'react'

import { useStop } from '../Hooks/useStop'

export const Timer = () => {

  const {start,pause,reset,time,timerid} =  useStop()

  return (
    <div>
        
        <h1> Timer - {time} </h1>
        
     
        <button onClick={start} disabled={time>0 }>Start</button>

        <button onClick={pause} disabled={!timerid.current}>Pause</button>

        <button onClick={reset} disabled={!timerid.current}>Reset</button>

    </div>
  )
}
