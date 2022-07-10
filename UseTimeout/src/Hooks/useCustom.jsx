
import React from 'react'
import { useState , useEffect} from 'react'

export const useCustom = (value) => {

    const [data,setData] = useState(value)

    useEffect(()=>{
        console.log("new data",data)
    },[data])


 return [data,setData]
}
