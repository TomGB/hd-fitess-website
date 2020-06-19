import React, { useState, useRef } from 'react';
import axios from 'axios'

const apiUrl = 'https://5bduaem5gd.execute-api.eu-west-2.amazonaws.com/contact'

const onSubmit = async (e, emailRef, messageRef) => {
    e.preventDefault()

    const email = emailRef.current.value
    const message = messageRef.current.value

    await axios.post(apiUrl, {
        email,
        message
    })
}

const Contact = () => {
    const emailRef = useRef()
    const messageRef = useRef()

    const [feedback, setFeedback] = useState(false)
    
    return (
        <div className='contain contact-page'>
            <h1>Contact</h1>
            <div className='seperator'></div>
            <p>Feel free to get in touch.</p>
            <p>Hayley is eager to meet new people and help them in any way she can, so don't be shy!</p>
            <form className='contact-form' onSubmit={(e) => { onSubmit(e, emailRef, messageRef); setFeedback(true) }}>
                <label><div>Email:</div><input type='email' name='email' ref={emailRef}></input></label>
                <label><div>Message:</div><textarea name='message' ref={messageRef}></textarea></label>
                <input className='submit-button' type='submit' value='Send'></input>
                {feedback && <div className='feedback'>Thank you for contacting HD Fitness</div>}
            </form>
        </div>
    )
}

export default Contact
