import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './Navbar.css'
class Navbar extends Component {

    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <nav id='navbarItems'>
                <a href={process.env.PUBLIC_URL} id='navbar-logo' >
                    <h1>Jose Modenesi</h1>
                </a>
                <div className='menu-icon' onClick={this.handleClick}>
                    <i>{this.state.clicked ? <CloseIcon className='materialicon' /> : <MenuIcon className='materialicon' />}</i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <a href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar;