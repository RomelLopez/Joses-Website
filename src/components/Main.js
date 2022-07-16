import React from 'react'
import Navbar from './Navbar/Navbar';
import Homepage from './Homepage';
import LessonForm from './LessonForm';
import '../styles/Main.css'

function Main() {
    return (
        <div id='main'>
            <Navbar />
            <Homepage />
            <LessonForm />
        </div>
    )
}

export default Main