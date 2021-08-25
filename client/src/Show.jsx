import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { baseURL, config } from './services'
import { useEffect, useHistory } from 'react-router-dom'
import './Show.css'
function Show(props) {
  // const { name } = props.anime.fields

  const params = useParams()
  const history = useHistory()

  const matchShow = props.anime.filter((ani) => {
    return ani.id === params.id
  })
  // console.log(matchShow.id)


  const handleDelete = async () => {
    await axios.delete(`${baseURL}/${params.id}`, config)
    props.setToggleFetch(prevToggleFetch => !prevToggleFetch)
    history.push('/')
  }

  return (
    <article className='show-article' >
      {
        matchShow.map((anime) => (
          <div className='show-content'>
            <h2>{`Title: ${anime.fields.name}`}</h2>
            <h3>{`Episodes watched: ${anime.fields.episodes}`}</h3>
            <h3>{`Genre: ${anime.fields.genre}`}</h3>
            <h3>{`Watch Status: ${anime.fields.watchstatus}`}</h3>
            <h3>{`Link to anime: ${anime.fields.linktoanime}`}</h3>
            <h3>{`Rating: ${anime.fields.rating}`}</h3>
            <Link to={`/edit/${anime.id}`}>Edit Anime</Link>
            <br />
            <br />
            <button className='delete-button' onClick={handleDelete}>Delete Anime</button>
          </div>
        ))
      }

      <br />
      {/* <button className='delete-button' onClick={handleDelete}>Delete Anime</button> */}
    </article>
  )

}
export default Show