import React, { useEffect, useState } from 'react'
import { apiCall, apiKey } from '../api/ApiCall'
import BackDropTab from '../components/BackDropTab'
import MoviesTab from '../components/MoviesTab'

const TvShowsPage = () => {
  const [arrivingToday, setArrivingToday] = useState([])
  const [onAir, setOnAir] = useState([])
  const [popularTv, setPopularTv] = useState([])
  const [topRated, setTopRated] = useState([])

  useEffect(() => {
    apiCall(`https://api.themoviedb.org/3/tv/airing_today?api_key=${apiKey}`, setArrivingToday)
    apiCall(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${apiKey}`, setOnAir)
    apiCall(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`, setPopularTv)
    apiCall(`https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}`, setTopRated)
    // console.log('fetched')
  }, [])

  // console.log(arrivingToday)

  return (
    <>
      <div>
      <BackDropTab movieList={onAir} />
        <div className='homeTabs'>
          {/* <MoviesTab movieList={arrivingToday} title={'Arriving Today'} /> */}
          <MoviesTab movieList={onAir} title={'On-Air'} />
          <MoviesTab movieList={popularTv} title={'Popular'} />
          <MoviesTab movieList={topRated} title={'Top-Rated'} /> 
        </div>
      </div>
    </>
  )
}

export default TvShowsPage