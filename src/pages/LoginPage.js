import React from 'react'
import { Link } from 'react-router-dom'
import nameLogo from '../assets/nameLogo.png'
import './styling/loginPage.css'

const LoginPage = () => {
    return (
        <>
            <div>
                <div className='back' />
                <div className='gradient' />
            </div>
            <div className='login-body d-flex flex-column justify-content-between'>
                <div className='login-header d-flex justify-content-between'>
                    <img className='logo' src={nameLogo} alt='logo' />
                    <div>
                        <button className='btn btn-lang btn-outline-danger me-2'>English</button>
                        <button className='btn btn-sign-in btn-danger'>Sign In</button>
                    </div>
                </div>
                <div className='login-text-body d-flex flex-column justify-content-center align-items-center'>
                    <h1>Unlimited movies, TV <br />shows, and more.</h1>
                    <h5>Watch anywhere. Cancel anytime.</h5>
                    <p>Ready to watch? Enter your email to create or restart your membership.</p>
                    <form className='form-inline'>
                        <div className='input-group'>
                            <input className='form-control me-2' type='search' placeholder='Email address'></input>
                            <Link to='/user'><button className='btn btn-danger' type='submit'>{'Get Started >'}</button></Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginPage