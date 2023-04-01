import React from 'react'
import PizzaLeft from '../assets/pizzaLeft.jpg'
import '../styles/Contact.css'

function Contact() {
  return (
    <div className='contact'>
        <div className="leftSide" 
        style={{backgroundImage: `url(${PizzaLeft})`}}>
            
        </div>
        <div className="rightSide">
            <h1>Contact Us</h1>

            <form id='contact-form' action="">
                <label htmlFor="name">Full Name:</label>
                <input type="text" name='name' placeholder='Enter the name'/>
                <label htmlFor="email">Email:</label>
                <input type="email" name='email' placeholder='xyx@gmail.com'/>
                <label htmlFor="message">Message</label>
                <textarea name="" id="" cols="30" rows="10" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact