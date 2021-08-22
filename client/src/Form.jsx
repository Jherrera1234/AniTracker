import { useState, useEffect } from 'react'
import axios from 'axios'
import { baseURL, config } from './services'
import { useParams } from 'react-router-dom'

function Form(props) {
  const [name, setName] = useState('')
  const [episodes, setEpisodes] = useState('')
  const [genre, setGenre] = useState('')
  const [watchStatus, setWatchStatus] = useState('')
  const [linkToAnime, setLinkToAnime] = useState('')
  const [rating, setRating] = useState('')

  const params = useParams()



  return (
    <h1>This is my form</h1>
  )
}

export default Form