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
            <Card id='card-genre' style={{ width: '100%' }}>
              <Link to={`/show/${anime.id}`}>
                <Card.Img variant="left" src="holder.js/100px180" src="https://i.ibb.co/VW6vSFw/Ani-logo.png" />
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