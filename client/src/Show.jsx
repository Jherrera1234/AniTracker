import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { baseURL, config } from './services'
import { useEffect, useHistory } from 'react-router-dom'
import './Show.css'
function Show(props) {


  const params = useParams()
  const history = useHistory()

  const matchShow = props.anime.filter((ani) => {
    return ani.id === params.id
  })



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
            <h2 className={`${anime.fields.genre}-show`}>{`Title: ${anime.fields.name}`}</h2>
            <h3>{`Episodes watched: ${anime.fields.episodes}`}</h3>
            <h3>{`Genre: ${anime.fields.genre}`}</h3>
            <h3>{`Watch Status: ${anime.fields.watchstatus}`}</h3>
            <a className='show-edit-link' href={`${anime.fields.linktoanime}`}>{`Link to anime: ${anime.fields.linktoanime}`}</a>
            <h3>{`Rating: ${anime.fields.rating}/5`}</h3>
            <Link className='show-edit-link' to={`/edit/${anime.id}`}>Edit Anime</Link>
            <br />
            <br />
            <button className='delete-button' onClick={handleDelete}>Delete Anime</button>
          </div>
        ))
      }

      <br />

    </article>
  )

}
export default Show