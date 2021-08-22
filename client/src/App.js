import { useEffect, useState } from 'react'
import axios from 'axios'
import { baseURL, config } from './services'
import { Route, Link } from 'react-router-dom'
import Anime from './Anime'

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
      console.log(resp.data.records)
      setAnime(resp.data.records)
    }
    fetchAnime()
    fetchGenres()
  }, [])


  return (
    <>
      <nav class='nav-bar' >
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


    </>
  );
}

export default App;
