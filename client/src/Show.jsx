import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { baseURL, config } from './services'
import { useEffect } from 'react-router-dom'

function Show(props) {
  // const { name } = props.anime.fields

  const params = useParams()

  const matchShow = props.anime.filter((ani) => {
    return ani.id === params.id
  })
  console.log(matchShow)

  return (
    <article>
      <h1>This is proof that my show page works</h1>
      {/* <h1>{props.anime.fields.name}</h1> */}
    </article>
  )

}
export default Show