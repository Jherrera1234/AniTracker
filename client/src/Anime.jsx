import { Link, Route } from 'react-router-dom'
import { baseURL, config } from './services'
import { arrOfGenresOptions } from './storage'
import { useState, useEffect } from 'react'

function Anime(props) {
  // const [genre, setGenre] = useState('')
  const getGenre = (() => {
    if (props.genreSelect === arrOfGenresOptions[0]) {
      const allGenres = props.genre.map((genre) => {
        return (
          <div>
            <h1>{genre}</h1>
            <Link to={`/genre/${genre}`}> Go To Genre</Link>
          </div>

        )
      })
      return allGenres
    } else if (props.genreSelect === arrOfGenresOptions[1]) {
      return (
        <div>
          <h1>{arrOfGenresOptions[1]}</h1>
          <Link to={`/genre/${arrOfGenresOptions[1]}`}> Go To Genre</Link>
        </div>
      )
    } else if (props.genreSelect === arrOfGenresOptions[2]) {
      return (
        <div>
          <h1>{arrOfGenresOptions[2]}</h1>
          <Link to={`/genre/${arrOfGenresOptions[2]}`}> Go To Genre</Link>
        </div>
      )
    } else if (props.genreSelect === arrOfGenresOptions[3]) {
      return (
        <div>
          <h1>{arrOfGenresOptions[3]}</h1>
          <Link to={`/genre/${arrOfGenresOptions[3]}`}> Go To Genre</Link>
        </div>
      )
    } else if (props.genreSelect === arrOfGenresOptions[4]) {
      return (
        <div>
          <h1>{arrOfGenresOptions[4]}</h1>
          <Link to={`/genre/${arrOfGenresOptions[4]}`}> Go To Genre</Link>
        </div>
      )
    }
  })
  console.log(props.genre)
  return (
    <>
      {getGenre()}
    </>
  )
}
export default Anime