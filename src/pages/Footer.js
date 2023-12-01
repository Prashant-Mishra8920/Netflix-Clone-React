import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
    return (
        <div className='footer d-flex flex-column justify-content-center align-items-center' style={{padding: '10px', color: 'grey'}}>
            <div style={{margin: '10px 0px 10px 0'}}>
                <FontAwesomeIcon icon={faFacebookF} style={{marginInline: '10px'}}/>
                <FontAwesomeIcon icon={faInstagram} style={{marginInline: '10px'}}/>
                <FontAwesomeIcon icon={faTwitter} style={{marginInline: '10px'}}/>
                <FontAwesomeIcon icon={faYoutube} style={{marginInline: '10px'}}/>
            </div>
            <div className='footerNames d-flex justify-content-between' style={{textAlign: 'left', fontSize: '0.8rem'}}>
                <div >
                    <p>Audio Description</p>
                    <p>Investor Relations</p>
                    <p>Legal Notices</p>
                </div>
                <div>
                    <p>Help Center</p>
                    <p>Jobs</p>
                    <p>Cookie Preferences</p>
                </div>
                <div>
                    <p>Gift Cards</p>
                    <p>Terms of Use</p>
                    <p>Corporate Information</p>
                </div>
                <div>
                    <p>Media Center</p>
                    <p>Privacy</p>
                    <p>Contact us</p>
                </div>
            </div>
            <div>
                <div style={{border: '1px solid grey', textAlign: 'center'}}>
                    <p style={{margin: '4px 8px 4px 8px'}}>Service Code</p>
                </div>
            </div>
            <div style={{fontSize: '0.8rem'}}>
                <p>©️ 1997-2023 Netflix, Inc.</p>
            </div>
        </div>
    )
}

export default Footer