import React from 'react'
import './RandomMeme.css'
import '../App.css'
const RandomMeme = () => {
 
  return (
    <div className='Main'>
    <h2>These are some Randome Image</h2>
    <img src='https://picsum.photos/200' alt="this is Meme" />
    <button onClick={() => window.location.reload(false)} >Change</button>
    
  </div>
  )
}

export default RandomMeme;