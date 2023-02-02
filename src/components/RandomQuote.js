import React, { useState } from 'react'
import axios from 'axios'
import './RandomQuote.css'
import '../App.css'
const RandomQuote = () => {
  const[quote,setQuote] = useState("click Change to start")
  const handleQuote = async()=>{
    const response = await axios.get("https://api.quotable.io/random");
    setQuote(response.data.content)
  }
  return (
    <div className='Main'>
      <h2>These are some Randome Quotes</h2>
      <p>{quote}</p>
      <button onClick={handleQuote}>Change</button>
    </div>
  )
}

export default RandomQuote