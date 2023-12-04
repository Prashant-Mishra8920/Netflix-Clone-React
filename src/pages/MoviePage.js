import React, { useEffect, useState } from 'react'
import { stateParam, useLocation, useParams } from 'react-router-dom'
import '../gradient.css'
import './styling/moviePage.css'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import CreditsCard from '../components/CreditsCard'
import MoviesTab from '../components/MoviesTab'
import { apiCall } from '../api/ApiCall'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { useSelector } from 'react-redux';
import { actionCreators } from '../state'
import Footer from './Footer'


const MoviePage = () => {
  const apiKey = '877ebaa8c67bd0e1d4495e0d0c309bdd'

  const dispatch = useDispatch()
  const location = useLocation()
  const { movie } = location.state
  // console.log(movie)

  const isMovie = ('release_date' in movie) ? true : false;

  const items = useSelector(state => state.item)

  const [trailerUrl, setTrailerUrl] = useState("")
  const [clicked, setClicked] = useState(false)
  const [credit, setCredit] = useState([])
  const [recom, setRecom] = useState([])
  const [details, setDetails] = useState([])

  async function creditsCall(url, setState) {
    return await fetch(url).then(res => res.json()).then(data => {
      // console.log(data)
      setState(data)
    })
  }

  const type = isMovie? 'movie': 'tv'

  useEffect(() => {
    creditsCall(`https://api.themoviedb.org/3/${type}/${movie.id}/credits?api_key=${apiKey}`, setCredit);
    apiCall(`https://api.themoviedb.org/3/${type}/${movie.id}/recommendations?api_key=${apiKey}`, setRecom)
    creditsCall(`https://api.themoviedb.org/3/${type}/${movie.id}?api_key=${apiKey}`, setDetails)

  }, [movie])

  // console.log(credit)


  useEffect(() => {
    // console.log(clicked)
  }, [clicked])

  const onClick = () => {
    setClicked(true)
    if (trailerUrl) {
      setTrailerUrl("")
    } else {
      movieTrailer(movie.title).then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search)
        setTrailerUrl(urlParams.get("v"))
        // setTrailerUrl(urlParams)
      }).catch((e) => console.log(e))
    }
  }

  const liked = () => {
    if(items.movies.find((m)=>m.id === movie.id)){
      dispatch(actionCreators.removeMovies(movie))
      console.log('uncheck')
    }
    else dispatch(actionCreators.addMovies(movie))
  }

  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      autoPlay: 1,
    }
  }

  const releaseDate = isMovie ? movie.release_date.substring(0, 4) : movie.first_air_date.substring(0,4);

  return (
    <div className='moviePage'>
      <div>
        {(!clicked) ?
          <div style={{ position: 'absolute', margin: '40vh 50px', zIndex: '1' }} >
            <h1>{movie.title}</h1>
            <div className='d-flex align-items-center'>
              <button className='btn btn-primary btn-play me-3' onClick={onClick}><FontAwesomeIcon icon={faPlay} /> Play</button>
              {/* <div className='divBtn me-3'><FontAwesomeIcon icon={faPlus} /></div> */}
              <div className='divBtn d-flex align-items-center justify-content-center' ><FontAwesomeIcon icon={faHeart} onClick={liked} style={items?.movies?.find((m) => m.id === movie.id) ? { color: 'red' } : { color: 'white' }} /></div>
            </div>
          </div>
          : <></>}

        {(!clicked) ?
          <div>
            <div className='gradient-bottom' style={{ height: '60vh', position: 'absolute' }} />
            <img src={'https://image.tmdb.org/t/p/original' + movie.backdrop_path} alt={movie.title} style={{ objectFit: 'cover', width: '100vw', height: '60vh' }} />
          </div>
          : <div className='movieTrailer'>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} loading='eager' />}

          </div>}
      </div>
      <div className='movieText'>
        <div className='d-flex' style={{ color: 'grey' }}>
          <h6 className='me-3' style={{ color: 'green' }}>{movie.vote_count}% Match</h6>
          <p className='movieYear'>{releaseDate}</p>
          <div className='d-flex align-items-center me-3' style={{ height: 'fit-content' }}>
            <FontAwesomeIcon className='me-2' icon={faGlobe} />
            <h6 style={{margin: '2px'}}>{movie.original_language}</h6>
          </div>
          <div className='adultDiv'>
            {(movie.adult) ? <h6 style={{margin: '2px'}}>A 18+</h6> : <h6 style={{margin: '2px'}}>U/A 7+</h6>}
          </div>
        </div>
        <div className='d-flex' style={{ color: 'darkgray' }}>
          <p><FontAwesomeIcon icon={faThumbsUp} />  {movie.vote_average} ({movie.vote_count})</p>
        </div>
        <p>{movie.overview}</p>


        {/* credit...... */}
        <div style={{ marginBottom: '20px' }}>
          <h5>Credits</h5>
          <div className='overflowH d-flex flex-row' >
            {/* {credit.cast?.slice(0, (credit.cast.length / 10) + 5).map((c) => {
              return <CreditsCard movieCredit={c} key={c.id}/>
            })} */}
            {credit?.cast?.filter((i)=>i.profile_path !== null).map((c) => {
              return <CreditsCard movieCredit={c} key={c.id}/>
            })}
          </div>
        </div>


        {/* Recommendations.......... */}
        <MoviesTab movieList={recom} title="More Like This" />

        {/* About the movie.......... */}
        <div >
          <h5>About {movie.title}</h5>
          <div style={{ color: 'grey', lineHeight: '100%' }}>
            <p>Genres: {details.genres?.map((item) => item.name + ',')}</p>
            <p>Languages: {details.spoken_languages?.map((item) => item.name + ',')}</p>
            <p>Production: {details.production_companies?.map((item) => item.name + ',')}</p>
            <p>Available In: {details.production_countries?.map((item) => item.name + ',')}</p>
            <p>Release Date: {details.release_date}</p>
            <p>Status: {details.status}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoviePage