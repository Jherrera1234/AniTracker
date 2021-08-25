import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { baseURL, config } from './services'
import { useEffect, useHistory } from 'react-router-dom'

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
    <article>
      {
        matchShow.map((anime) => (
          <div>
            <h2>{anime.fields.name}</h2>
            <h3>{anime.fields.episodes}</h3>
            <h3>{anime.fields.genre}</h3>
            <h3>{anime.fields.watchstatus}</h3>
            <h3>{anime.fields.linktoanime}</h3>
            <h3>{anime.fields.rating}</h3>
            <Link to={`/edit/${anime.id}`}>Link to Edit</Link>
          </div>
        ))
      }
      <br />
      <button onClick={handleDelete}>Delete Anime</button>
    </article>
  )

}
export default Show