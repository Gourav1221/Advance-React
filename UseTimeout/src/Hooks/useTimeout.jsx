import React, { useEffect,useState } from 'react'

export const useTimeout = (dealy) => {

    const [ready,setReady] = useState(false)


    useEffect(() => {

        let timer = setTimeout(() =>setReady(true),dealy)
        return ()=>{
            clearTimeout(timer)
        }
    },[])

  return ready
}
