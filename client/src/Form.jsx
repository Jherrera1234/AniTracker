import { useState, useEffect } from 'react'
import axios from 'axios'
import { baseURL, config } from './services'
import { useParams } from 'react-router-dom'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import { arrOfGenres, arrOfWatchStatus } from './storage'
function Form(props) {
  const [name, setName] = useState('')
  const [episodes, setEpisodes] = useState('')
  const [genre, setGenre] = useState('')
  const [watchstatus, setWatchStatus] = useState('')
  const [linktoanime, setLinkToAnime] = useState('')
  const [rating, setRating] = useState('')

  const params = useParams()

  useEffect(() => {
    if (params.id && props.anime.length > 0) {
      const aniToEdit = props.anime.find(ani => params.id === ani.id)
      if (aniToEdit) {
        setName(aniToEdit.fields.name)
        setEpisodes(aniToEdit.fields.episodes)
        setGenre(aniToEdit.fields.genre)
        setWatchStatus(aniToEdit.fields.watchstatus)
        setLinkToAnime(aniToEdit.fields.linktoanime)
        setRating(aniToEdit.fields.rating)
      }
    }
  }, [props.anime])


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
    if (params.id) {
      await axios.put(`${baseURL}/${params.id}`, { fields: newAnime }, config)
    } else {
      await axios.post(baseURL, { fields: newAnime }, config)
    }
    props.setToggleFetch(prevToggleFetch => !prevToggleFetch)

  }
  // console.log(arrOfGenres)

  return (
    <div className='form-div'>
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
        <select id='genre' onChange={(e) => setGenre(e.target.value)}>
          <option value='1' disabled>Select a Genre</option>
          {arrOfGenres.map((genre) => {
            return (
              <option value={genre}>{genre}</option>
            )
          })
          }
        </select>



        <label htmlFor='watchstatus'>Watch Status: </label>
        <select id='watchstatus' onChange={(e) => setWatchStatus(e.target.value)}>
          <option value='1' disabled>Watch Status</option>
          {arrOfWatchStatus.map((watchstatus) => {
            return (
              <option value={watchstatus}>{watchstatus}</option>

            )
          })
          }
        </select>
        <label htmlFor='link-to-anime'>Link to Anime: </label>
        <input
          id='link-to-anime'
          type='url'
          onChange={(e) => setLinkToAnime(e.target.value)}
          value={linktoanime}
        />
        <label htmlFor='rating'>Rating: </label>
        <input
          id='rating'
          type='number'
          min={0}
          max={5}
          width='145px'
          onChange={(e) => setRating(e.target.valueAsNumber)}
          value={rating}
        />


        <button type='submit'>Submit</button>

      </form>
    </div>
  )
}

export default Form