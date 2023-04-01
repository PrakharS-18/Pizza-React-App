import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import '../styles/Footer.css'

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia" style={{color: "white"}}>
            <InstagramIcon/>
            <TwitterIcon/>
            <FacebookIcon/>
            <LinkedInIcon/>
        </div>
        <p> &copy; 2023 pppppp@pizza.com</p>
    </div>
  )
}

export default Footer;