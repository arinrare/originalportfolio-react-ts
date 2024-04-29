import React from 'react';
import { Link } from 'react-router-dom';
import './navmenu.css';
const logo = require('../../images/navmenu/logo.jpg');

const Navmenu = () => {
    
    function handleClick(ID: string) {
            sessionStorage.setItem('currentPage', ID);
    } 

    function headingSwitch(page: string) {
        switch(page) {
            case '0':
                return '';
            case '1':
                return 'Resume';
            case '2':
                return 'Browse';
            case '3':
                return 'Programming';
            case '4':
                return 'Web';
            case '5':
                return 'Contact';
            default:
                return '';
        }
    }

    return (
        <>
            <div className="topWrapper">
                <div className="logoHolder inline">
                    <img id="logo" src={logo} alt="Logo for Michael Baggot - Silver and White letters, M and B" />
                </div>
                <div className="headingHolder inline">
                    <div className="headingName">{headingSwitch(sessionStorage.getItem('currentPage') ?? '')}</div>
                </div>
            </div>
            <div className = "spacerBar"></div>
            <div className='navmenu'>
                <Link onClick={() => handleClick('0')} className={parseInt(sessionStorage.getItem('currentPage') ?? '0') === 0 ? 'nav active' : 'nav'} to='/'>HOME</Link>
                <Link onClick={() => handleClick('1')} className={parseInt(sessionStorage.getItem('currentPage') ?? '1') === 1 ? 'nav active' : 'nav'} to='/resume'>RESUME</Link>
                <Link onClick={() => handleClick('2')} className={parseInt(sessionStorage.getItem('currentPage') ?? '2') === 2 ? 'nav active' : 'nav'} to='/browse'>BROWSE</Link>
                <Link onClick={() => handleClick('3')} className={parseInt(sessionStorage.getItem('currentPage') ?? '3') === 3 ? 'nav active' : 'nav'} to='/programming'>PROGRAMMING</Link>
                <Link onClick={() => handleClick('4')} className={parseInt(sessionStorage.getItem('currentPage') ?? '4') === 4 ? 'nav active' : 'nav'} to='/web'>WEB</Link>
                <Link onClick={() => handleClick('5')} className={parseInt(sessionStorage.getItem('currentPage') ?? '5') === 5 ? 'nav active' : 'nav'} to='/contact'>CONTACT</Link>
            </div>
            <div className = "spacerBar"></div>
        </>
    );
}
export default Navmenu;