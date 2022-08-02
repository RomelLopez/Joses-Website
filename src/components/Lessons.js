import React from 'react'
import Navbar from './Navbar/Navbar'
import '../styles/Services.css';
import josestepclass from '../images/josestepclass.png'
import joseclown from '../images/joseclown.jpg';
import josevibradance from '../images/josevibradance.png';
function Lessons() {
  return (
    <div className='Services--container'>
      <Navbar />
      <div>
        <h1> Services </h1>
        <h2> Jose provides a variety of different services available too</h2>
        <div className='service--dividers'>
          <div className='servicesleft'>
            <div className='titleheader'>
              <h1>Salsa</h1>
              <p>Learn More Here</p>
            </div>
            <div>
              <img src={josestepclass} alt='step weight image' />
            </div>
          </div>
          <div className='servicesright'>
            <div className='titleheader'>
              <h1>Bachata</h1>
              <p>Learn More Here</p>
            </div>
            <div>
              <img src={josestepclass} alt='step weight image' />
            </div>
          </div>
          <div className='servicesleft'>
            <div className='titleheader'>
              <h1>Combat Cardio</h1>
              <p>Learn More Here</p>
            </div>
            <div>
              <img src={josestepclass} alt='step weight image' />
            </div>
          </div>
          <div className='servicesright'>
            <div className='titleheader'>
              <h1>Step Weight</h1>
              <p>Learn More Here</p>
            </div>
            <div>
              <img src={josestepclass} alt='step weight image' />
            </div>
          </div>
          <div className='servicesleft'>
            <div className='titleheader'>
              <h1> Cardio Kickboxing Camp</h1>
              <p>Learn More Here</p>
            </div>
            <div>
              <img src={josestepclass} alt='step weight image' />
            </div>
          </div>
          <div className='servicesright'>
            <div className='titleheader'>
              <h1> Vibra Fitness </h1>
              <p>Learn More Here</p>
            </div>
            <div>
              <img src={josestepclass} alt='step weight image' />
            </div>
          </div>
          <div className='servicesleft'>
            <div className='titleheader'>
              <h1> Private Lessons </h1>
              <p>Learn More Here</p>
            </div>
            <div>
              <img src={josestepclass} alt='step weight image' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lessons