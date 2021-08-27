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
  console.log(params.genre)

  return (
    <>
      {
        <div className={`${params.genre}-card`}>
          <h1 className='anime-genre-card' >{params.genre}</h1>
          <br />
        </div>

      }
      {
        matchAnime.map((anime) => (
          <div>
            <Card id='card-genre' >
              <Link to={`/show/${anime.id}`}>
                <Card.Img variant="left" src="https://i.ibb.co/rp6P0jD/ANITRACKER-Logo.png" />
              </Link>
              <Card.Body id='anime-fields-genre'>
                <Card.Title>{anime.fields.genre}</Card.Title>
                <Card.Text>
                  {`Name:${anime.fields.name}   Episodes:${anime.fields.episodes}   Rating:${anime.fields.rating}/5`}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))
      }
    </>
  )
}

export default Genre