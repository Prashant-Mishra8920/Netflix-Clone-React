import React from 'react'

const CreditsCard = ({movieCredit}) => {
  return (
    <div className='credit-card'>
      <img src={'https://image.tmdb.org/t/p/original' + movieCredit.profile_path} style={{width: '100px', marginInline: '3px', borderRadius: '5px'}}/>
    </div>
  )
}

export default CreditsCard