import { Routes, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';


export default class routerURL extends Component {
    render() {
        return (
            <Routes>
                <Route path={process.env.PUBLIC_URL} element={<Navbar />} />
            </Routes>
        )
    }
}