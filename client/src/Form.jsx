import { useState, useEffect } from 'react'
import axios from 'axios'
import { baseURL, config } from './services'
import { useParams } from 'react-router-dom'

function Form(props) {
  const [name, setName] = useState('')
  const [episodes, setEpisodes] = useState('')
  const [genre, setGenre] = useState('')
  const [watchstatus, setWatchStatus] = useState('')
  const [linktoAnime, setLinkToAnime] = useState('')
  const [rating, setRating] = useState('')

  const params = useParams()

  // useEffect(() => {
  //   if (props.anime.length > 0) {

  //     setName(props.anime.fields.name)
  //     setEpisodes(props.anime.fields.episodes)
  //     setGenre(props.anime.fields.genre)
  //     setWatchStatus(props.anime.fields.watchstatus)
  //     setLinkToAnime(props.anime.fields.linktoanime)
  //     setRating(props.anime.fields.rating)
  //   }
  // }, [props.anime])
  const handleSubmit = async (event) => {
    event.preventDefault()
    const newAnime = {
      name,
      episodes,
      genre,
      watchstatus,
      linktoAnime,
      rating
    }
    await axios.post(baseURL, { fields: newAnime }, config)
    props.setToggleFetch(prevToggleFetch => !prevToggleFetch)
  }


  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Name: </label>
      <input
        id='name'
        type='text'
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Form