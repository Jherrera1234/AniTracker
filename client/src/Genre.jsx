import axios from 'axios'
import { Link } from 'react-router-dom'
import { baseURL, config } from './services'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Genre(props) {
  const [name, setName] = useState('')
  const [episodes, setEpisodes] = useState('')
  const [genre, setGenre] = useState('')
  const [watchstatus, setWatchStatus] = useState('')
  const [linktoanime, setLinkToAnime] = useState('')
  const [rating, setRating] = useState('')

  const params = useParams()





  return (
    <h1>Genre tests </h1>
  )
}

export default Genre