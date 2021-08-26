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
          <Link className={`${genre}-link`} to={`/genre/${genre}`}>
            <div className={`${genre}-card`}>
              <h1 className={`genre-${index}`} >{genre}</h1>
              <br />



            </div>
          </Link>
        )
      })
      return allGenres
    } else if (props.genreSelect === arrOfGenresOptions[1]) {
      return (
        <div>
          <Card className={arrOfGenresOptions[1]}>
            <Link to={`/genre/${arrOfGenresOptions[1]}`}>
              <Card.Img variant="top" src="holder.js/100px180" src="https://gonintendo.com/uploads/file_upload/upload/70594/Featured-Image-Shonen-Jump-wrong-better-Cropped.jpg" />
            </Link>
            <Card.Body>
              <Card.Text>
                {arrOfGenresOptions[1]}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      )
    } else if (props.genreSelect === arrOfGenresOptions[2]) {
      return (
        <div>
          <Card className={arrOfGenresOptions[2]}>
            <Link to={`/genre/${arrOfGenresOptions[2]}`}>
              <Card.Img variant="top" src="holder.js/100px180" src="https://i0.wp.com/recommendmeanime.com/wp-content/uploads/2019/04/isekai-quartet-anime.jpeg?fit=1200%2C673&ssl=1" />
            </Link>
            <Card.Body>
              <Card.Text>
                {arrOfGenresOptions[2]}
              </Card.Text>

            </Card.Body>
          </Card>
        </div>
      )
    } else if (props.genreSelect === arrOfGenresOptions[3]) {
      return (
        <div>
          <Card className={arrOfGenresOptions[3]}>
            <Link to={`/genre/${arrOfGenresOptions[3]}`}>
              <Card.Img variant="top" src="holder.js/100px180" src="https://thegeekiary.com/wp-content/uploads/2018/01/Shito.jpg" />
            </Link>
            <Card.Body>
              <Card.Text>
                {arrOfGenresOptions[3]}
              </Card.Text>

            </Card.Body>
          </Card>
        </div>
      )
    } else if (props.genreSelect === arrOfGenresOptions[4]) {
      return (
        <div>
          <Card className={arrOfGenresOptions[4]}>
            <Link to={`/genre/${arrOfGenresOptions[4]}`}>
              <Card.Img variant="top" src="holder.js/100px180" src="https://1.bp.blogspot.com/-6EGG_gLqjwc/XSZz8dTroEI/AAAAAAAAAxU/OzzaU-nL2-IhnRT-H1oRwUcHEmrpPE3ywCLcBGAs/s1600/Hyouka.jpg" />
            </Link>
            <Card.Body>
              <Card.Text>
                {arrOfGenresOptions[4]}
              </Card.Text>

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