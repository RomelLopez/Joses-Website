import React, { Component } from 'react'
import { MenuItems } from './MenuItems';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
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
                <h1 className='navbar-logo'>React{<ArrowBackIcon />}</h1>
                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.clicked ? <> (<MenuIcon />)
                        (<CloseIcon />) </> : ''}></i>
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
                <Button>Sign Up</Button>
            </nav>
        )
    }
}

export default Navbar;