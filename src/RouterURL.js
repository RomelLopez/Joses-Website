import { Routes, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Main from './components/Main';
import About from './components/About';
import Lessons from './components/Lessons';
import Events from './components/Events';
import Services from './components/Services';
import Contact from './components/Contact';
import Homepage from './components/Homepage';


export default class routerURL extends Component {
    render() {
        return (
            <Routes>
                <Route path={process.env.PUBLIC_URL} element={<Main />} />
                <Route path='/Main' element={<Main />} />
                <Route path='/About' element={<About />} />
                <Route path='/Lessons' element={<Lessons />} />
                <Route path='/Events' element={<Events />} />
                <Route path='/Services' element={<Services />} />
                <Route path='/Contact' element={<Contact />} />
            </Routes>
        )
    }
}