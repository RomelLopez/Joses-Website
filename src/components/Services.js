import React from 'react'
import Navbar from './Navbar/Navbar'
import '../styles/Services.css';
import josestepclass from '../images/josestepclass.png'
import joseclown from '../images/joseclown.jpg';
import josedj from '../images/josedj.png';
function Services() {
    return (
        <div className='Services--container'>
            <Navbar />
            <div>
                <h1> Services </h1>
                <h2> Jose provides great entertainment services </h2>
                <div className='service--dividers'>
                    <div className='servicesright'>
                        <div className='titleheader'>
                            <h1>Party DJ/Singer</h1>
                            <p>Learn More Here</p>
                        </div>
                        <div>
                            <img src={josedj} alt='step weight image' />
                        </div>
                    </div>
                    <div className='servicesleft'>
                        <div className='titleheader'>
                            <h1>Vibra Entertainment Clown</h1>
                            <p>Learn More Here</p>
                        </div>
                        <div>
                            <img src={joseclown} alt='step weight image' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services