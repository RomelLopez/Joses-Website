import React from 'react'
import '../styles/Homepage.css'

import calendar from '../images/calendar.png'
function Homepage() {
    return (
        <div id='home'>
            <div className='jose--modenesi'>
                <span> J</span>
                <span> o</span>
                <span> s</span>
                <span> e</span>
                <span> M</span>
                <span> o</span>
                <span> d</span>
                <span> e</span>
                <span> s</span>
                <span> i</span>
            </div>
            <div className='main--bio'>
                <h1> Jose Modenesi is a focused and talented professional dance instructor </h1>
                <h1 >Focused on making you the best you can be on the dance floor!</h1>
                <h2>
                    With Jose you will learn how to
                </h2>
                <h1>
                    Salsa, Bachata, Merengue, Cumbia and Mambo!
                </h1>
            </div>
        </div>

    )
}

export default Homepage