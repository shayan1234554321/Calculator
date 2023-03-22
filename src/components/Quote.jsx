import React, { useEffect } from 'react'
import ApiNinja from '../hooks/api'

export default function Quote() {

  const { data } = ApiNinja()

  useEffect(()=>{
    console.log(data)
  },[data])
  return (
    <div>
        {data? 
        <>
            Quote: {data[0].quote} <br />
            Author: {data[0].author} </>
        : "Loading Quote"}
    </div>
  )
}
