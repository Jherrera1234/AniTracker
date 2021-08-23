import axios from 'axios'
import { Link } from 'react-router-dom'
import { baseURL, config } from './services'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Genre(props) {

  const params = useParams()

  const matchAnime = props.anime.filter((ani) => {
    return ani.fields.genre === params.genre
  })
  // console.log(matchAnime)

  return (
    <>
      {
        matchAnime.map((anime) => (
          <div>
            <h2>{anime.fields.name}</h2>
            <h3>{anime.fields.episodes}</h3>
            <h3>{anime.fields.genre}</h3>
            <h3>{anime.fields.watchstatus}</h3>
            <h3>{anime.fields.linktoanime}</h3>
            <h3>{anime.fields.rating}</h3>
            <Link to={`/show/${anime.id}`}>Link to Show</Link>
          </div>
        ))
      }
    </>
  )
}

export default Genre