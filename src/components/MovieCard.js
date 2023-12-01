import React from 'react'
import './movieCard.css'

import MoviePage from '../pages/MoviePage';
import NetflixIconOverlay from './NetflixIconOverlay';

const MovieCard = ({ movie }) => {
  return (
    <div className='movie-card'>
      {/* <NetflixIconOverlay/> */}
      <img src={'https://image.tmdb.org/t/p/original' + movie.poster_path} />
    </div>
  )
}

export default MovieCard