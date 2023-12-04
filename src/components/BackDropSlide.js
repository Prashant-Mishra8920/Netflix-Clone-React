import React from 'react'
import './movieCard.css'
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'

const BackDropSlide = ({ src, isActive }) => {
    const cl = (isActive)? "carousel-item active" : "carousel-item"; 

    return (
        <div className={cl}>
            <div className='gradient-bottom' style={{ height: '60vh' }} />
            <div className='backdrop d-flex flex-row justify-content-start'>
                <img className="d-block w-100" src={'https://image.tmdb.org/t/p/original' + src.backdrop_path} alt="First slide" />
                <div className='d-flex flex-column ' style={{ position: 'absolute', width: '40vw', textAlign: 'left', paddingLeft: '50px', marginTop: '20vh'}}>

                    <h3>{src.original_title}</h3>
                    <p className='d-none d-sm-block'>{src.overview.substring(0, 200)}</p>
                    <div className='d-flex' >
                        <Link className='links' to={`/${src.original_title}`} state={{ movie: src }} style={{zIndex: '9999'}}><button className='btn me-2 btn-play'><FontAwesomeIcon icon={faPlay} /> Play</button></Link>
                        <Link className='links' to={`/${src.original_title}`} state={{ movie: src }} style={{zIndex: '9999'}}><button className='btn btn-other'><FontAwesomeIcon icon={faCircleInfo} /> More Info</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BackDropSlide