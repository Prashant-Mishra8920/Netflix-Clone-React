import React from 'react'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import MovieCard from './MovieCard'

const MyList = ({ list }) => {
    return (
        <div className='myList d-flex flex-wrap'>
            {list?.map((movie) => {
                return <>
                    <Link className='movieCard' to={`/${movie.original_title}`} state={{ movie: movie }}><MovieCard movie={movie} /></Link>
                </>
            })}
        </div>
    )
}

export default MyList