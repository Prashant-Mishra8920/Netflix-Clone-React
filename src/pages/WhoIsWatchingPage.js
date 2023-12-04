import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import UserCard from '../components/UserCard'
import '../components/Components.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const WhoIsWatchingPage = () => {
  const [userCount, setUserCount] = useState([])
  const onClick = () => {
    if (userCount.length < 5) setUserCount([...userCount,0])
  }

  useEffect(()=>{

  },userCount)

  return (
    <div className='d-flex flex-column justify-content-center align-items-center' style={{ height: '100vh' }}>
      <h1>Who's watching ?</h1>
      <div className='d-flex justify-content-around align-items-center' style={{ width: 'fit-content' }}>
        {userCount?.map(() => {
          return <Link className='links' to='/home'><UserCard /></Link>
        })}
        <Link className='links' to='/home'><UserCard /></Link>
        <Link className='links' to='/home'><UserCard /></Link>
        <div className='d-flex justify-content-center align-items-center' onClick={onClick} style={{ margin: '10px', width: '100px', height: '100px', backgroundColor: 'rgba(100,100,100,0.3)', borderRadius: '50%', cursor: 'pointer' }}>
          <FontAwesomeIcon icon={faPlus} style={{ color: 'grey', scale: '2.3' }} />
        </div>
      </div>
    </div>
  )
}

export default WhoIsWatchingPage