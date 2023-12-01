import React from 'react'
import { Link } from 'react-router-dom'
import UserCard from '../components/UserCard'
import '../components/Components.css'

const WhoIsWatchingPage = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center' style={{ height: '100vh'}}>
      <h1>Who's watching ?</h1>
      <div className='d-flex justify-content-around' style={{width: 'fit-content'}}>
        <Link className='links' to='/home'><UserCard /></Link>
        <Link className='links' to='/home'><UserCard /></Link>
        <Link className='links' to='/home'><UserCard /></Link>
      </div>
    </div>
  )
}

export default WhoIsWatchingPage