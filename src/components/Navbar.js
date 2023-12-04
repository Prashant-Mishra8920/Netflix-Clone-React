import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import nameLogo from '../assets/nameLogo.png'
import searchIcon from '../assets/searchIcon.svg'
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import SearchDiv from './SearchDiv'
import { apiCall, apiKey } from '../api/ApiCall'

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [searchedMovie, setSearchedMovie] = useState([])
  const [clicked, setClicked] = useState(false);
  const onClick = () => {
    setClicked(true)
  }


  useEffect(() => {
    apiCall(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search}`, setSearchedMovie)
    // console.log(searchedMovie)
    // console.log(search)
  }, [clicked, search])

  return (
    <>
      {(searchedMovie.length > 0) ? <SearchDiv list={searchedMovie}/> : <></>}
      <div className='nav-gradient' />
      <nav className='navbar navbar-expand-lg ps-4 pe-4 w-100' >
        <div className='container-fluid d-flex justify-content-between'>
          <div className='d-flex justify-content-center align-items-center'>
            <img className='logo navbar-brand' src={nameLogo} alt='logo' />
            {/* <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavDropdown' ari-controls='navbarNavDropdown'>
              <span className='navbar-toggler-icon'></span>
            </button> */}
            <div className='collapse navbar-collapse page-links' id='navbarNavDropdown'>
              <ul className='nav-menu navbar-nav'>
                <li className='nav-item'>
                  <Link className='link' to='/home' >Home</Link>
                </li>
                <li className='nav-item'>
                  <Link className='link' to='/tv-shows'>TV Shows</Link>
                </li>
                {/* <li>
                  <Link className='link' to='/movies'>Movies</Link>
                </li> */}
                <li className='nav-item'>
                  <Link className='link' to='/my-list'>My List</Link>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <ul className='nav-menu'>
              <li>
                {/* <Link className='link' to='/search'><FontAwesomeIcon icon={faMagnifyingGlass} /></Link> */}
                <input className='form-control rounded' type='search' placeholder='search...' style={{ height: '35px', backgroundColor: 'rgba(255,255,255,0.9)'}} onClick={onClick} value={search} onChange={(e) => setSearch(e.target.value)} />
              </li>
              {/* <li>
                  <Link className='link ' to='/kids'>KIDS</Link>
                </li>
                <li>
                  <Link className='link' to='DVD'>DVD</Link>
                </li> */}
              <li>
                <Link className='link' to='/search'><img src={require('../assets/user-icons/user1.png')} style={{ width: '30px', borderRadius: '50%' }} /></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar