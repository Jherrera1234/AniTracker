import { Link, Route } from 'react-router-dom'
import { baseURL, config } from './services'
import { arrOfGenres, arrOfWatchStatus, arrOfGenresOptions } from './storage'

function Anime(props) {



  return (
    <>
      <h1>{props.genre}</h1>
      <Link to={`/genre/${props.genre}`}> Go To Genre</Link>
    </>
  )



}

export default Anime