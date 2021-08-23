import { useState, useEffect } from 'react'
import axios from 'axios'
import { baseURL, config } from './services'
import { useParams } from 'react-router-dom'

function Form(props) {
  const [name, setName] = useState('')
  const [episodes, setEpisodes] = useState('')
  const [genre, setGenre] = useState('')
  const [watchstatus, setWatchStatus] = useState('')
  const [linktoanime, setLinkToAnime] = useState('')
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
      linktoanime,
      rating
    }
    console.log(newAnime)
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
      <label htmlFor='episodes'>Episodes: </label>
      <input
        id='episodes'
        type='text'
        onChange={(e) => setEpisodes(e.target.value)}
        value={episodes}
      />
      <label htmlFor='genre'>Genre: </label>
      <input
        id='genre'
        type='text'
        onChange={(e) => setGenre(e.target.value)}
        value={genre}
      />
      <label htmlFor='watchstatus'>Watch Status: </label>
      <input
        id='watch-status'
        type='text'
        onChange={(e) => setWatchStatus(e.target.value)}
        value={watchstatus}
      />
      <label htmlFor='link-to-anime'>Link to Anime: </label>
      <input
        id='link-to-anime'
        type='text'
        onChange={(e) => setLinkToAnime(e.target.value)}
        value={linktoanime}
      />
      <label htmlFor='rating'>Rating: </label>
      <input
        id='rating'
        type='number'
        onChange={(e) => setRating(e.target.valueAsNumber)}
        value={rating}
      />

      <button type='submit'>Submit</button>
    </form>
  )
}

export default Form