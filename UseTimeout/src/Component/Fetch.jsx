
import React from 'react'
import { useFetch } from '../Hooks/useFetch'

export const Fetch = () => {

    const url = "http://localhost:8080/product"

    const {data,loadings,refresh} = useFetch(url)
   



  return (
       <>
       <h1>Data</h1>
       <button onClick={refresh}>Refresh</button>
       
       { loadings ? <div>Loading...</div>: <div>

        {data.map((e)=><h1 key={Math.random()}>{e}</h1>)}
        </div>}
       
       </> 
  )
}
