import { useEffect, useState } from 'react'
import axios from 'axios'
import { baseURL, config } from './services'
import { Route, Link } from 'react-router-dom'
import Anime from './Anime'
import Form from './Form'
import Genre from './Genre'
function App() {
  const [anime, setAnime] = useState([])
  const [genre, setGenre] = useState([])
  const [toggleFetch, setToggleFetch] = useState(false)

  let arrOfGenres = ['Shonen', 'Isekai', 'Horror', 'Slice of Life']

  useEffect(() => {
    const fetchGenres = () => {
      setGenre(arrOfGenres)

    }
    const fetchAnime = async () => {
      const resp = await axios.get(baseURL, config)
      // console.log(resp.data.records)
      setAnime(resp.data.records)
    }
    fetchAnime()
    fetchGenres()
  }, [toggleFetch])


  return (
    <>
      <nav className='nav-bar' >
        <Link to='/' className='home-nav' >Home </Link>
        <Link to='/new' className='new-naw'>Add New Anime</Link>
      </nav>
      <Route path='/' exact>
        {genre.map((genre, index) => {
          return (
            <Anime key={index} genre={genre} setToggleFetch={setToggleFetch} />
          )
        })

        }

      </Route>

      <Route path='/new'>
        <Form setToggleFetch={setToggleFetch} anime={anime} />
      </Route>

      <Route path='/genre/:genre'>
        {/* {anime.map((anime, index) => {
          return (
            <Genre key={index} anime={anime} setToggleFetch={setToggleFetch} />
          )
        })
        } */}
        <Genre anime={anime} setToggleFetch={setToggleFetch} />
      </Route>



    </>
  );
}

export default App;
