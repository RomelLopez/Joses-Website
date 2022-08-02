import React, { useState } from 'react'
import '../styles/LessonForm.css';
import calendar from '../images/calendar.png';


function LessonForm() {


    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
    });

    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);
    const handleSubmit = (event) => {
        if (values.firstName && values.lastName && values.email) {
            setValid(true)
        }
        event.preventDefault();
        setSubmitted(true);
    }

    const handleFirstNameChange = (event) => {
        setValues({ ...values, firstName: event.target.value })
    }

    const handleLastNameChange = (event) => {
        setValues({ ...values, lastName: event.target.value })
    }

    const handleEmailChange = (event) => {
        setValues({ ...values, email: event.target.value })
    }


    return (
        <div className='parent'>
            <div className='container'>
                <div className='title'>Get Your Free Lesson Now</div>
                <form className='register-form' onSubmit={handleSubmit}
                    action="https://formsubmit.co/rawlopez123@gmail.com" method='POST'>
                    {submitted && valid ? <div> Success! Thank you for registering </div> : null}
                    <input
                        onChange={handleFirstNameChange}
                        value={values.firstName}
                        className='input-box'
                        placeholder='First Name'
                        name='firstname' />
                    {submitted && !values.firstName ? <span> Please Enter A First Name </span> : null}
                    <input
                        onChange={handleLastNameChange}
                        value={values.lastName}
                        className='input-box'
                        placeholder='Last-Name'
                        name='lastname'
                    />
                    {submitted && !values.lastName ? <span> Please Enter A Last Name </span> : null}
                    <input
                        onChange={handleEmailChange}
                        value={values.email}
                        className='input-box'
                        placeholder='Email'
                        name='email'
                    />
                    {submitted && !values.email ? <span> Please Enter A Email </span> : null}
                    <button className="register" type="submit">
                        Submit
                    </button>
                </form>
            </div>
            <div class="box">
                <div class="calendar--text">
                    <h1>Calendar</h1>
                    <img className='calendar' src={calendar} />
                </div>
            </div>
        </div>
    )
}

export default LessonForm