
import axios from 'axios'
import React from 'react'
import { useEffect,useState } from 'react'

export const useFetch = (url) => {

    const [loadings,setLoading] = useState(false)

    const [err,setErr] = useState(false)
  
    const [data,setData] = useState([])


    useEffect(() => {

        getData()
      
    },[])


    const getData = ()=>{

        setLoading(true)
    
        setTimeout(() => {
  
          axios.get(url).then(({data}) => {
              setLoading(false)
              setData(data)
          }).catch((err) => {
              console.log(err)
          })
  
        },2000)
    }


    return {data,loadings,refresh:getData}


}
