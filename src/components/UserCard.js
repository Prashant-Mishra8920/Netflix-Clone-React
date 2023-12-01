import React from 'react'

const UserCard = () => {
    const userId = Math.floor(Math.random()*(8-1)+1);
    console.log(userId)
    return (
        <div className='userCard'>
            <img src={require(`../assets/user-icons/user${userId}.png`)} alt='user' style={{width: '100px'}}/>
            <p style={{width: '100%', margin: '0px', paddingBottom: '5px'}}>user</p>
        </div>
    )
}

export default UserCard