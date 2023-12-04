import React from 'react'
import './topTrending.css'
import {Link} from 'react-router-dom';


const TopTrendingCard = ({ movieList, title }) => {
  const list = movieList
  // const movie = list[0]

  return (
    <div className='topTrending'>
      <h5>{title}</h5>
      <div className='topTrendingTab'>
        {movieList?.slice(0, 10).map((movie, index) => {
          return <Link className='link' to={`/${movie.original_title}`} state={{ movie: movie }}><div className='topTrendingCard'>
            {/* <div>
              <h1 >{index + 1}</h1>
            </div> */}
            <h1 >{index + 1}</h1>
            <img src={'https://image.tmdb.org/t/p/original' + movie.poster_path} />
            <div className='divBack'></div>
          </div></Link>
        })}
      </div>
    </div>
  )
}

export default TopTrendingCard