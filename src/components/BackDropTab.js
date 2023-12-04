import React from 'react'
import './movieCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

const BackDropTab = ({ movieList }) => {
    const list = movieList
    const movie = list[0]
    console.log(list[0])

    // const url = 
    return (list.length != 0) ? (
        <>
            <div className='gradient-bottom' style={{ height: '60vh' }} />
            <div className='backdrop d-flex flex-row justify-content-start'>
                {/* {list.map((movie)=>{ */}
                <img src={'https://image.tmdb.org/t/p/original' + movie.backdrop_path} style={{ width: '100px' }} />
                {/* })} */}
                <div className='d-flex flex-column ' style={{ position: 'absolute', width: '40vw', textAlign: 'left', paddingLeft: '50px', marginTop: '20vh'}}>
                    <p className='d-none d-sm-block'>{movie.overview.substring(0, 200)}</p>
                    <div className='d-flex' >
                    <Link className='links' to={`/${movie.original_title}`} state={{movie: movie}}><button className='btn me-2 btn-play'><FontAwesomeIcon icon={faPlay} /> Play</button></Link>
                    <Link className='links' to={`/${movie.original_title}`} state={{movie: movie}}><button className='btn btn-other'><FontAwesomeIcon icon={faCircleInfo} /> More Info</button></Link>
                    </div>
                </div>
            </div>
        </>
    ) : <h1>cannot load</h1>
}

export default BackDropTab