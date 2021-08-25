
import { Route, Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className='nav-bar' >
      <Link to='/' className='home-nav' >Home </Link>
      <Link to='/new' className='new-naw'>Add New Anime</Link>
    </nav>
  )
}

export default Nav