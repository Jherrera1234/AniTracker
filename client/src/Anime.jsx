import { Link, Route } from 'react-router-dom'
import { baseURL, config } from './services'
import { arrOfGenresOptions } from './storage'
import Card from 'react-bootstrap/Card';
import './Anime.css'

function Anime(props) {
  // const [genre, setGenre] = useState('')
  const getGenre = (() => {
    if (props.genreSelect === arrOfGenresOptions[0]) {
      const allGenres = props.genre.map((genre, index) => {
        return (
          <div>
            <h1 className={`genre-${index}`} >{genre}</h1>
            <Link to={`/genre/${genre}`}> Go To Genre</Link>

            {/* <Card className={`genre-${index}`}>
              <Card.Img src="holder.js/100px270" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>{genre}</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
                <Link to={`/genre/${genre}`}> Go To Genre</Link>
              </Card.ImgOverlay>
            </Card> */}
          </div>

        )
      })
      return allGenres
    } else if (props.genreSelect === arrOfGenresOptions[1]) {
      return (
        <div>
          <Card className={arrOfGenresOptions[1]}>
            <Card.Img variant="top" src="holder.js/100px180" src="https://gonintendo.com/uploads/file_upload/upload/70594/Featured-Image-Shonen-Jump-wrong-better-Cropped.jpg" />
            <Card.Body>
              <Card.Text>
                {arrOfGenresOptions[1]}
              </Card.Text>
              <Link to={`/genre/${arrOfGenresOptions[1]}`}> Go To Genre</Link>
            </Card.Body>
          </Card>
        </div>
      )
    } else if (props.genreSelect === arrOfGenresOptions[2]) {
      return (
        <div>
          <Card className={arrOfGenresOptions[2]}>
            <Card.Img variant="top" src="holder.js/100px180" src="https://i0.wp.com/recommendmeanime.com/wp-content/uploads/2019/04/isekai-quartet-anime.jpeg?fit=1200%2C673&ssl=1" />
            <Card.Body>
              <Card.Text>
                {arrOfGenresOptions[2]}
              </Card.Text>
              <Link to={`/genre/${arrOfGenresOptions[2]}`}> Go To Genre</Link>
            </Card.Body>
          </Card>
        </div>
      )
    } else if (props.genreSelect === arrOfGenresOptions[3]) {
      return (
        <div>
          <Card className={arrOfGenresOptions[3]}>
            <Card.Img variant="top" src="holder.js/100px180" src="https://thegeekiary.com/wp-content/uploads/2018/01/Shito.jpg" />
            <Card.Body>
              <Card.Text>
                {arrOfGenresOptions[3]}
              </Card.Text>
              <Link to={`/genre/${arrOfGenresOptions[3]}`}> Go To Genre</Link>
            </Card.Body>
          </Card>
        </div>
      )
    } else if (props.genreSelect === arrOfGenresOptions[4]) {
      return (
        <div>
          <Card className={arrOfGenresOptions[4]}>
            <Card.Img variant="top" src="holder.js/100px180" src="https://1.bp.blogspot.com/-6EGG_gLqjwc/XSZz8dTroEI/AAAAAAAAAxU/OzzaU-nL2-IhnRT-H1oRwUcHEmrpPE3ywCLcBGAs/s1600/Hyouka.jpg" />
            <Card.Body>
              <Card.Text>
                {arrOfGenresOptions[4]}
              </Card.Text>
              <Link to={`/genre/${arrOfGenresOptions[4]}`}> Go To Genre</Link>
            </Card.Body>
          </Card>
        </div>
      )
    }
  })
  console.log(props.genre)
  return (
    <>
      {getGenre()}

    </>
  )
}
export default Anime