import React, { useEffect, useState } from 'react'
import './styling/page.css'
import Navbar from '../components/Navbar'
import { Routes, Route } from 'react-router-dom';
import TvShows from './TvShowsPage';
import NewPopular from './NewPopularPage';
import MyList from './MyListPage';
import WatchAgain from './WatchAgainPage';
import { useQuery } from 'react-query';
import MovieCard from '../components/MovieCard';
import MoviesTab from '../components/MoviesTab';
import BackDropTab from '../components/BackDropTab';
import Footer from './Footer';
import { Swiper, SwiperSlide } from 'swiper/react';

const apiKey = '877ebaa8c67bd0e1d4495e0d0c309bdd'

async function apiCall(url, setMovie) {
    return await fetch(url).then(res => res.json()).then(data => {
        setMovie(data.results)
    })
}

const HomePage = () => {
    const [nowPlayingMovieList, setNowPlayingSetMovieList] = useState([]);
    const [popularMovieList, setPopularSetMovieList] = useState([]);
    const [topRatedMovieList, setTopRatedSetMovieList] = useState([]);
    const [tvList, setTvList] = useState([]);


    useEffect(() => {
        apiCall(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`, setNowPlayingSetMovieList);
        apiCall(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`, setPopularSetMovieList);
        apiCall(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`, setTopRatedSetMovieList);
        apiCall(`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}`, setTvList);

    }, [])
    // console.log(nowPlayingMovieList.results)
    // console.log(popularMovieList.results)
    // console.log(tvList.results)

    return (
        <div className='home-page'>
            {/* <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper> */}
            <BackDropTab movieList={nowPlayingMovieList} />
            <div className='homeTabs'>
                <MoviesTab movieList={nowPlayingMovieList} title={'Now Playing'} />
                <MoviesTab movieList={popularMovieList} title={'Popular'} />
                <MoviesTab movieList={topRatedMovieList} title={'Top-Rated'} />
            </div>
        </div>
    )
}

export default HomePage