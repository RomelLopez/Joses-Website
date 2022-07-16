import React from 'react'
import Navbar from './Navbar/Navbar'

function Lessons() {
  return (
    <div className='lessons--container'>
      <Navbar />
      <div className='lessons--classes'>
        <h1> Lessons and Classes</h1>
      </div>
      <div className='group--classes'>
        <h2>Group Classes Lessons</h2>
        <div className='lesson--courses'>
          <h3> Salsa</h3>
          <p> Learn to dance Salsa with Jose. You will learn a wide variety
            skills and tricks to spice up the floor! Classes will usually range from an hour
            to two.
          </p>
        </div>
        <div className='lesson--courses'>
          <h3> Bachata</h3>
          <p> Learn to dance Bachata with Jose. You will learn a wide variety
            skills and tricks to spice up the floor! Classes will usually range from an hour
            to two.
          </p>
        </div>
        <div className='lesson--courses'>
          <h3> Step Weight </h3>
          <p> Excercise with Jose. You will participate in a fitness oriented environment
            using a step block! Classes will usually range from an hour
            to two.
          </p>
        </div>
        <div className='lesson--courses'>
          <h3> Cardio Combat</h3>
          <p> Learn to dance Bachata with Jose. You will learn a wide variety
            skills and tricks to spice up the floor! Classes will usually range from an hour
            to two.
          </p>
        </div>
        <div className='lesson--courses'>
          <h3> Vibra Dance</h3>
          <p> Learn to dance Bachata with Jose. You will learn a wide variety
            skills and tricks to spice up the floor! Classes will usually range from an hour
            to two.
          </p>
        </div>
      </div>
      <div className='private--classes'>
        <h3>Private Lessons</h3>
        <div>Salsa Private Lesson</div>
        <div>Bachata Private Lesson</div>
      </div>
    </div>
  )
}

export default Lessons