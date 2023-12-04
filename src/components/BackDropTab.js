import React from 'react'
import './movieCard.css'
import BackDropSlide from './BackDropSlide'

const BackDropTab = ({ movieList }) => {
    const list = movieList
    // console.log(list[0])

    // const url = 
    return (list.length != 0) ? (
        <>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <BackDropSlide isActive={true} src={list[0]}/>
                    <BackDropSlide isActive={false} src={list[1]}/>
                    <BackDropSlide isActive={false} src={list[2]}/>
                    <BackDropSlide isActive={false} src={list[3]}/>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev" style={{zIndex: '999'}}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            {/* <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src={'https://image.tmdb.org/t/p/original' + list[0].backdrop_path} alt="First slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={'https://image.tmdb.org/t/p/original' + list[1].backdrop_path} alt="Second slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={'https://image.tmdb.org/t/p/original' + list[2].backdrop_path} alt="Third slide" />
                    </div>
                </div>
            </div> */}
            {/* <div className='gradient-bottom' style={{ height: '60vh' }} />
            <div className='backdrop d-flex flex-row justify-content-start'>
                {list.map((movie)=>{
                <img src={'https://image.tmdb.org/t/p/original' + movie.backdrop_path} style={{ width: '100px' }} />
                })}
                <div className='d-flex flex-column ' style={{ position: 'absolute', width: '40vw', textAlign: 'left', paddingLeft: '50px', marginTop: '20vh' }}>
                    <p className='d-none d-sm-block'>{movie.overview.substring(0, 200)}</p>
                    <div className='d-flex' >
                        <Link className='links' to={`/${movie.original_title}`} state={{ movie: movie }}><button className='btn me-2 btn-play'><FontAwesomeIcon icon={faPlay} /> Play</button></Link>
                        <Link className='links' to={`/${movie.original_title}`} state={{ movie: movie }}><button className='btn btn-other'><FontAwesomeIcon icon={faCircleInfo} /> More Info</button></Link>
                    </div>
                </div>
            </div> */}
        </>
    ) : <h1>Loading...</h1>
}

export default BackDropTab