import React from 'react'
import "./Contact.scss"
import { useState } from 'react'

export default function Contact() {

    const [message, setMessage] = useState(false)

    const handleSubmit = (e) => {
      e.preventDefault();
      setMessage(true)

    }

    return (
        <div className='contact' id='contact'>
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit} action="">
                    <input type="text" placeholder='Email' />
                    <textarea name="" id="" placeholder='Message'></textarea>
                    <button type='submit'>Send</button>
                    {message && <span>Thanks, I'll will reply as soon</span>}
                </form>
            </div>
            
        </div>
    )
}
