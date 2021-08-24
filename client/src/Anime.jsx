import { Link, Route } from 'react-router-dom'
import { baseURL, config } from './services'
import { arrOfGenresOptions } from './storage'
import { useState, useEffect } from 'react'

function Anime(props) {
  // const [genre, setGenre] = useState('')
  const getGenre = (() => {
    if (props.genreSelect === arrOfGenresOptions[0]) {

      const alllGenres = props.genre.map((genre) => {
        return genre
      })
      console.log(alllGenres)

      return alllGenres
    } else if (props.genreSelect === arrOfGenresOptions[1]) {
      return arrOfGenresOptions[1]
    } else if (props.genreSelect === arrOfGenresOptions[2]) {
      return arrOfGenresOptions[2]
    } else if (props.genreSelect === arrOfGenresOptions[3]) {
      return arrOfGenresOptions[3]
    } else if (props.genreSelect === arrOfGenresOptions[4]) {
      return arrOfGenresOptions[4]
    }
  })
  console.log(props.genre)

  return (
    <>

      <h1>{getGenre()}</h1>
      <Link to={`/genre/${getGenre()}`}> Go To Genre</Link>
    </>
  )



}

export default Anime