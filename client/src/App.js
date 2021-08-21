import { useEffect, useState } from 'react'
import axios from 'axios'
import { baseURL, config } from './services'

function App() {
  const [anime, setAnime] = useState([])
  const [toggleFetch, setToggleFetch] = useState(false)

  useEffect(() => {
    const fetchAnime = async () => {
      const resp = await axios.get(baseURL, config)
      console.log(resp)
    }
    fetchAnime()
  }, [])

  return (
    <>

    </>
  );
}

export default App;
