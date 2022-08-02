import React from 'react'
import Navbar from './Navbar/Navbar'
import flyerjose2 from '../images/flyerjose2.jpg';
import flyerjose1 from '../images/flyerjose1.jpg';
import '../styles/Events.css';
function Events() {
    return (
        <div className='Events--container'>
            <Navbar />
            <div className='events--header'>
                <h1>Events</h1>
            </div>
            <div className='events'>
                <img src={flyerjose2} />
                <p>Come and join us for a Salsa Night Celebration!</p>
                <p>07.31.2022</p>
            </div>
            <div className='events'>
                <img src={flyerjose1} />
                <p>Come and join us for a Salsa Night Celebration!</p>
            </div>
        </div>
    )
}

export default Events