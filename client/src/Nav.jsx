
import { Route, Link } from 'react-router-dom'
import './Nav.css'
function Nav() {
  return (
    <nav className='nav-bar' >
      <Link to='/' className='home-nav' >Home </Link>
      <h1 ><img src="https://i.ibb.co/rp6P0jD/ANITRACKER-Logo.png" alt="Anitracker-logo" className='title-logo' /></h1>
      <Link to='/new' className='new-nav'>Add New Anime</Link>
    </nav>
  )
}

export default Nav