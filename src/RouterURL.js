import { Routes, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Main from './components/Main';
import About from './components/About';
import Lessons from './components/Lessons';


export default class routerURL extends Component {
    render() {
        return (
            <Routes>
                <Route path={process.env.PUBLIC_URL} element={<Main />} />
                <Route path='/About' element={<About />} />
                <Route path='/Lessons' element={<Lessons />} />

            </Routes>
        )
    }
}