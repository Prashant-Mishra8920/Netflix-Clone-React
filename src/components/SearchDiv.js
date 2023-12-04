import React, { useCallback, useEffect, useState } from 'react'
import './Components.css'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons'
import { actionCreators } from '../state';
import { useDispatch } from 'react-redux'

const SearchDiv = ({ list }) => {
    const [clicked, setClicked] = useState(false)
    const dispatch = useDispatch()

    const onClick = () => {
        dispatch(actionCreators.searchCompleted(true))
        setClicked(!clicked);
    }
    useEffect(() => {
        // console.log(list)
    }, [list])

    useEffect(() => {
        setClicked(false)
    }, [clicked])

    // const onClick = ()=>{
    //     setClicked(!clicked)
    // }

    return (
        <div className='searchDiv' style={{ display: (clicked) ? 'none' : 'visible' }}>
            <FontAwesomeIcon className='fa-2x closeSearchDiv' icon={faXmarkCircle} style={{ cursor: 'pointer', }} onClick={onClick} />
            {/* <button className='btn btn-danger' ></button> */}
            <div className='d-flex flex-wrap'>
                {list.map((movie) => {
                    return <Link to={`/${movie.original_title}`} state={{ movie: movie }} onClick={onClick}>
                        <div className='d-flex align-items-center searchCard'>
                            <img src={'https://image.tmdb.org/t/p/original' + movie.poster_path} width='150px' />
                            {/* <h4>{movie.original_title}</h4> */}
                            {/* <div style={{width: '35px', height: '35px',border: '1px solid white', borderRadius: '50%'}}>
                                
                            </div> */}
                            {/* <FontAwesomeIcon icon={faPlay} style={{marginInline: '10px'}}/> */}
                        </div>
                    </Link>
                })}
            </div>
        </div>
    )
}

export default SearchDiv