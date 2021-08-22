import { useEffect, useState } from 'react'
import axios from 'axios'
import { baseURL, config } from './services'
import { Route, Link } from 'react-router-dom'
import Anime from './Anime'

function App() {
  const [anime, setAnime] = useState([])
  const [toggleFetch, setToggleFetch] = useState(false)

  useEffect(() => {
    const fetchAnime = async () => {
      const resp = await axios.get(baseURL, config)
      console.log(resp.data.records)
      setAnime(resp.data.records)
    }
    fetchAnime()
  }, [])

  return (
    <>
      <nav class='nav-bar' >
        <Link to='/' className='home-nav' >Home </Link>
        <Link to='/new' className='new-naw'>Add New Anime</Link>
      </nav>
      <Route path='/' exact>
        {anime.map((anime, index) => {
          return (
            <Anime key={index} anime={anime} setToggleFetch={setToggleFetch} />
          )
        })

        }

      </Route>


    </>
  );
}

export default App;
