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


  return (
    <>

      {
        matchAnime.map((anime) => (
          <div>
            <Card id='card-genre' >
              <Link to={`/show/${anime.id}`}>
                <Card.Img variant="left" src="https://i.ibb.co/rp6P0jD/ANITRACKER-Logo.png" />
              </Link>
              <Card.Body>
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