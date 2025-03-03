import React, { useEffect, useState } from 'react'

const App = () => {

  
  const [message, setMessage]=useState('')

  useEffect(() => {
    fetch('http://localhost:8080/api/test')
        .then(response => response.text())
        .then(data=>setMessage(data))
  })




  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
    <h1 className="text-4xl font-bold text-blue-600">Welcome {message} </h1>
  </div>
  )
}

export default App

// useEffect - get data from backend to frontend

//useEffect(() => {
//  fetch('http://localhost:8080/api/test').then(response => response.text)
// })

// fetch data then response convert to a text 

// 1 what is use satate
// [message, setMessage]


