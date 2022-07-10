

import React, { useState,useRef ,useEffect} from 'react'
import { useCustom } from './useCustom'

export const useStop = () => {
 
    const timerid = useRef()

    const [time,setTime] = useCustom(0)

  const start = ()=>{

      if(!timerid.current){

        timerid.current = setInterval(()=>{
          setTime((time)=>time+1)
        },1000)

      }
  }

  const pause = ()=>{
    if(timerid.current){
      clearInterval(timerid.current)
    timerid.current = null;
    }else{
      timerid.current = setInterval(()=>{
        setTime((time)=>time+1)
      },1000)

    }

  }
  const reset = ()=>{

    clearInterval(timerid.current)
    timerid.current = null;
    setTime(0)

  }


  useEffect(()=>{
    return ()=>{
      clearInterval(timerid.current)
    }
  },[])


  return {start,pause,reset,time,timerid}

}
