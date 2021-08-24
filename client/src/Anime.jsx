import { Link, Route } from 'react-router-dom'
import { baseURL, config } from './services'
import { arrOfGenresOptions } from './storage'
import { useState, useEffect } from 'react'

function Anime(props) {
  // const [genre, setGenre] = useState('')
  if (props.genreSelect === arrOfGenresOptions[0]) {

  }

  return (
    <>

      <h1>{props.genre}</h1>
      <Link to={`/genre/${props.genre}`}> Go To Genre</Link>
    </>
  )



}

export default Anime