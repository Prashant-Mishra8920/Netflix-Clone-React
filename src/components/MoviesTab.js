import React, { useState } from 'react'
import MovieCard from './MovieCard'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

const MoviesTab = ({ title, movieList }) => {
    const list = movieList
    // console.log(list)
    return (
        <div className='movieTab'>
            <h5>{title}</h5>
            <div className='now-playing'>
                {list?.map((movie) => {
                    // console.log(movie)
                    
                    return <div key={movie.id}>
                            <Link className='movieCard ' to={`/${movie.original_title}`} state={{ movie: movie }} ><MovieCard movie={movie} /></Link>
                    </div>
                })}
            </div>
        </div>
    )
}


export default MoviesTab