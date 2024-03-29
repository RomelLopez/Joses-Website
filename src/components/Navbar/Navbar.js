import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MenuItems } from './MenuItems';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from './Button'
import './Navbar.css'
class Navbar extends Component {

    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <nav className='NavbarItems'>
                <a href="/Main">
                    <h1 className='navbar-logo' > Jose Modenesi</h1>
                </a>
                <div className='menu-icon' onClick={this.handleClick}>
                    <i>{this.state.clicked ? <CloseIcon className='materialicon' /> : <MenuIcon className='materialicon' />}</i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}

                </ul>
                <Button >Sign Up</Button>
            </nav>
        )
    }
}

export default Navbar;