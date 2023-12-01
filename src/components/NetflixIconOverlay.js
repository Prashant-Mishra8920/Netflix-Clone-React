import React from 'react'

const NetflixIconOverlay = () => {
  return (
    <div style={{backgroundColor: 'transparent', position: 'absolute', padding: '5px 0 0 0'}}>
        <img src={require('../assets/plainIconLogo.png')} style={{width: '20px', height: '20px', float: 'left'}}/>
    </div>
  )
}

export default NetflixIconOverlay