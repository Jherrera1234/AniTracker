import { useEffect, useState } from 'react'
import axios from 'axios'
import { baseURL, config } from './services'
import { Route, Link } from 'react-router-dom'
import Anime from './Anime'
import Form from './Form'
import Genre from './Genre'
import Show from './Show'
import Nav from './Nav'
import Footer from './Footer'
import { arrOfGenresOptions } from './storage'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
function App() {
  const [anime, setAnime] = useState([])
  const [genre, setGenre] = useState([])
  const [genreSelect, setGenreSelect] = useState('')
  const [toggleFetch, setToggleFetch] = useState(false)

  let arrOfGenres = ['Shonen', 'Isekai', 'Horror', 'Slice-of-Life']

  useEffect(() => {

    const fetchAnime = async () => {
      const resp = await axios.get(baseURL, config)

      setAnime(resp.data.records)

    }
    fetchAnime()

  }, [toggleFetch])




  return (
    <div>
      <Nav />
      <Route path='/' exact>
        <form className='home-dropdown'>
          <label htmlFor='genres'>Genre: </label>
          <select id='home-genres' onChange={(e) => setGenreSelect(e.target.value)} required>
            <option value='' >Select an Anime</option>
            {arrOfGenresOptions.map((genre) => {
              return (
                <option value={genre}>{genre}</option>

              )
            })
            }
          </select>
        </form>
        <Anime genre={arrOfGenres} setToggleFetch={setToggleFetch} genreSelect={genreSelect} />
      </Route>

      <Route path='/new'>
        <Form setToggleFetch={setToggleFetch} anime={anime} />
      </Route>

      <Route path='/genre/:genre'>
        <Genre anime={anime} />
      </Route>

      <Route path='/show/:id'>
        <Show anime={anime} setToggleFetch={setToggleFetch} />
      </Route>

      <Route path='/edit/:id'>
        <Form setToggleFetch={setToggleFetch} anime={anime} />
      </Route>

      <Footer />

    </div>
  );
}

export default App;
