import axios from 'axios'
import { Link } from 'react-router-dom'
import { baseURL, config } from './services'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Genre(props) {
  // const [name, setName] = useState('')
  // const [episodes, setEpisodes] = useState('')
  // const [genre, setGenre] = useState('')
  // const [watchstatus, setWatchStatus] = useState('')
  // const [linktoanime, setLinkToAnime] = useState('')
  // const [rating, setRating] = useState('')

  const params = useParams()

  const matchAnime = props.anime.filter((ani) => {
    return ani.fields.genre === params.genre
  })
  console.log(matchAnime)

  // useEffect(() => {
  //   // if (params.genre && props.anime.length > 0) {
  //   //   // const animeInfo = props.anime.find(anime => params.genre === anime.fields.genre)
  //   //   // console.log(params.genre)
  //   //   // console.log(animeInfo)
  //   //   // if (animeInfo) {
  //   //   //   setName(animeInfo.fields.name)
  //   //   //   // setEpisodes(animeInfo.fields.episodes)
  //   //   //   // setGenre(animeInfo.fields.genre)
  //   //   //   // setWatchStatus(animeInfo.fields.watchstatus)
  //   //   //   // setLinkToAnime(animeInfo.fields.linktoanime)
  //   //   //   // setRating(animeInfo.fields.rating)
  //   //   // }
  //   //   // let animeNameArr = []
  //   //   // props.anime.forEach((anime) => {
  //   //   //   if (params.genre === anime.fields.genre) {

  //   //   //     animeNameArr.push(anime.fields.name)
  //   //   //     console.log(anime)
  //   //   //     console.log(animeNameArr)
  //   //   //   }
  //   //   //   animeNameArr.map((anime, index) => {
  //   //   //     console.log(anime)
  //   //   //     // setName(anime)
  //   //   //   })


  //   //   // })
  //   //   // console.log(props.anime)

  //   // }


  // }, [params.genre, props.anime])




  return (
    <>

      {/* <h1>{name}</h1> */}
      <h1>This proves my genre page works</h1>
      {
        matchAnime.map((anime) => (
          <div>
            <h2>{anime.fields.name}</h2>
            <h3>{anime.fields.episodes}</h3>
            <h3>{anime.fields.genre}</h3>
            <h3>{anime.fields.watchstatus}</h3>
            <h3>{anime.fields.linktoanime}</h3>
            <h3>{anime.fields.rating}</h3>
            <Link to={`/show/${anime.id}`}>Link to Show</Link>
          </div>
        ))
      }
    </>
  )
}

export default Genre