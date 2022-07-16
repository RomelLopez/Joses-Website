import React from 'react'
import '../styles/About.css'
import joselogo from '../images/joselogo.png'
import Navbar from './Navbar/Navbar';
function About() {
    return (<div className='about--container'>
        <Navbar />

        <div className='row'>
            <div className='col--info'>
                <h1>About Jose </h1>
                <p>Founder and business entrepreneur, Sergio Leal established Latin Dance Pro in 2000 after graduating from Cal Poly Pomona with a Degree in Pure Mathematics.
                    His dynamic performances and award-winning routines have entertained audiences across the U.S. His unique choreography has been featured in
                    T.V. shows, feature films, and theater productions, and honored in numerous articles and magazines throughout his dance career.
                    To date, Latin Dance Pro has been voted "Top 5 Best Salsa Classes in Los Angeles" by CBS 2 and KCAL 9 and "Best Place to Dance in 2021" by Pasadena Weekly!
                    We also scored "Top 10 Best Wedding Dance Choreographers in Los Angeles" by Expertise.com. </p>
                <p>
                    Thank you, "Discover LA" for recognizing
                    our "Salsa Night at Cliftons" in Downtown Los Angeles as one of the "Top Latin Dance Spots in LA!"
                    In addition to all these accomplishments, Sergio's humility and patience enables him to do what he loves most, and that is sharing his passion for dance with others.</p>
            </div>
            <div className='col--logo'>
                <img src={joselogo} />
            </div>
        </div>
    </div>
    )
}

export default About