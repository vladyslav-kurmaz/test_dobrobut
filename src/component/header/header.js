import { Component } from 'react';
import { Link } from 'react-router-dom';

import  './header.scss';
import logo from '../../resources/image/logo-dobrobut.png';
// import searchIcon from '../../resources/image/Search.png';

class Header extends Component {

    render() {


        return (
            <header className='header'>
                <div className='header__container'>
                    <div className='header__logo'>
                        <Link to='/test_dobrobut'><img src={logo} alt="logo dobrobut" /></Link>
                    </div>
                    
                    <nav className='header__nav'>
                        <ul className='header__nav-list'>
                            <li className='header__nav-item'><Link to='/test_dobrobut/services' className=''>Services</Link></li>
                            <li className='header__nav-item'><Link to='/test_dobrobut/about' className=''>About</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }  
}

export default Header;