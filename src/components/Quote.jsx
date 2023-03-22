import React from 'react'
import ApiNinja from '../hooks/api'

export default function Quote() {

  const { data , loading } = ApiNinja()
  return (
    <div>
        {!loading? 
        <>
            Quote: {data ? data[0].quote : ''} <br />
            Author: {data? data[0].author : ''} </>
        : "Loading Quote"}
    </div>
  )
}
