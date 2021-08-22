import { useEffect, useState } from 'react'
import axios from 'axios'
import { baseURL, config } from './services'
import { Route, Link } from 'react-router-dom'
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

    </>
  );
}

export default App;
