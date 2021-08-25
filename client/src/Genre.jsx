import axios from 'axios'
import { Link } from 'react-router-dom'
import { baseURL, config } from './services'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import './Genre.css'
function Genre(props) {

  const params = useParams()

  const matchAnime = props.anime.filter((ani) => {
    return ani.fields.genre === params.genre
  })
  // console.log(matchAnime)

  return (
    <>
      {
        matchAnime.map((anime) => (
          <div>
            <Card style={{ width: '100%' }}>
              <Card.Img variant="left" src="holder.js/100px180" src="https://i.ibb.co/VW6vSFw/Ani-logo.png" />
              <Card.Body>
                <Card.Title>{anime.fields.genre}</Card.Title>
                <Card.Text>
                  {anime.fields.name}
                  {anime.fields.episodes}
                  {anime.fields.rating}
                </Card.Text>
                <Link to={`/show/${anime.id}`}>Link to Show</Link>
              </Card.Body>
            </Card>
            {/* <h2>{anime.fields.name}</h2>
            <h3>{anime.fields.episodes}</h3>
            <h3>{anime.fields.genre}</h3>
            <h3>{anime.fields.watchstatus}</h3>
            <h3>{anime.fields.linktoanime}</h3>
            <h3>{anime.fields.rating}</h3>
            <Link to={`/show/${anime.id}`}>Link to Show</Link> */}
          </div>
        ))
      }
    </>
  )
}

export default Genre