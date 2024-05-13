import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { HashLink } from 'react-router-hash-link';
import './browse.css';
import Navmenu from '../../components/navmenu/navmenu';
import Footer from '../../components/footer/footer';

const zoom = require('../../images/browse/zoom.png');
const zoomout = require('../../images/browse/zoomout.png');
const everwarm = require('../../images/browse/everwarm.jpg');
const animation = require('../../images/browse/animation.jpg');
const PMS = require('../../images/browse/PMS.jpg');
const LMS = require('../../images/browse/LMS.jpg');
const hobbit = require('../../images/browse/hobbit.jpg');

let tab =  {tabIndex: 0};

const Browse = () => {
    useEffect(() => {
		document.title = "Original Portfolio of Michael Baggott - Browse"
		ReactGA.send({ hitType: "pageview", page: "/browse", title: "Original Portfolio - Browse Page" });
	});
    
    if (sessionStorage.getItem('currentPage') === null) {
        handleClick('0');
    }
	   
    function handleClick(ID: string) {
            sessionStorage.setItem('currentPage', ID);
    } 
    
    return (
        <>
            <Navmenu />
            <section id = "content" className= "browseContent">
                <section className="gridWrapper ZoomIt">
                    <article id = "everwarm" className="browseContainer inline">
                        <div className="browseInnerContainer">
                            <img className="zoomIcon zoomIconLeft" {...tab} src={zoom} alt="Zoom In Icon, black magnifying glass with plus symbol" />
                            <img className="zoomOutIcon zoomOutIconLeft" {...tab} src={zoomout} alt="Zoom Out Icon, black magnifying glass with minus symbol"  />
                            <div className="zoomDiv zoomDivLeft"><article className="gridHeading">Everwarm Fuel Merchants</article><img className="zoom" src={everwarm} alt="Graphical Representation of Everwarm Project, shows product ordering screen" /></div>
                            <div className="readContainer"><HashLink onClick={() => handleClick('4')} title="Everwarm Fuel Merchants" to='/web#everwarm'><div className="readMore readMoreLeft">Read More...</div></HashLink></div>
                        </div>
                    </article>
                    <article id = "animation" className="browseContainer inline">
                        <div className="browseInnerContainer">
                            <img className="zoomIcon zoomIconRight" {...tab} src={zoom} alt="Zoom In Icon, black magnifying glass with plus symbol" />
                            <img className="zoomOutIcon zoomOutIconRight" {...tab} src={zoomout} alt="Zoom Out Icon, black magnifying glass with minus symbol" />
                            <div className="zoomDiv zoomDivRight"><article className="gridHeading">Animation Series Output</article><img className="zoom" src={animation} alt="Graphical Representation of Animation Project, shows some code and a frame of an animation" /></div>
                            <div className="readContainer"><HashLink onClick={() => handleClick('3')} title="Animation Series Output" to='/programming#animation'><div className="readMore readMoreRight">Read More...</div></HashLink></div>
                        </div>
                    </article>
                </section>
                
                <section className="gridWrapper ZoomIt">
                    <article id = "tbs" className="browseContainer inline">
                        <div className="browseInnerContainer">
                            <img className="zoomIcon zoomIconLeft" {...tab} src={zoom} alt="Zoom In Icon, black magnifying glass with plus symbol" />
                            <img className="zoomOutIcon zoomOutIconLeft" {...tab} src={zoomout} alt="Zoom Out Icon, black magnifying glass with minus symbol" />
                            <div className="zoomDiv zoomDivLeft"><article className="gridHeading">Tour Booking System</article><img className="zoom" src={PMS} alt="Graphical representation of Tour Booking System Project, shows the booking system console application" /></div>
                            <div className="readContainer"><HashLink onClick={() => handleClick('3')} title="Tour Booking System" to='/programming#pms'><div className="readMore readMoreLeft">Read More...</div></HashLink></div>
                        </div>
                    </article>
                    <article id = "lms" className="browseContainer inline">
                        <div className="browseInnerContainer">
                            <img className="zoomIcon zoomIconRight" {...tab} src={zoom} alt="Zoom In Icon, black magnifying glass with plus symbol" />
                            <img className="zoomOutIcon zoomOutIconRight" {...tab} src={zoomout} alt="Zoom Out Icon, black magnifying glass with minus symbol" />
                            <div className="zoomDiv zoomDivRight"><article className="gridHeading">Library Management</article><img className="zoom" src={LMS} alt="Graphical representation of Library Management System Project, shows the Library Management System console application" /></div>
                            <div className="readContainer"><HashLink onClick={() => handleClick('3')} title="Library Management System" to='/programming#lms'><div className="readMore readMoreRight">Read More...</div></HashLink></div>
                        </div>
                    </article>
                </section>
                
                <section className="gridWrapper ZoomIt">
                    <article id = "hobbit" className="browseContainer inline">
                        <div className="browseInnerContainer">
                            <img className="zoomIcon zoomIconLeft" {...tab} src={zoom} alt="Zoom In Icon, black magnifying glass with plus symbol" />
                            <img className="zoomOutIcon zoomOutIconLeft" {...tab} src={zoomout} alt="Zoom Out Icon, black magnifying glass with minus symbol" />
                            <div className="zoomDiv zoomDivLeft"><article className="gridHeading">The Hobbit Website</article><img className="zoom" src={hobbit} alt="Graphical representation of The Hobbit Website, shows the homepage with title, navigation menu and Gandalf the Wizard" /></div>
                            <div className="readContainer"><HashLink onClick={() => handleClick('4')} title="The Hobbit Website" to='/web#hobbit'><div className="readMore readMoreLeft">Read More...</div></HashLink></div>
                        </div>
                    </article>
                </section>
            </section>
            <Footer />
        </>
    );
}
export default Browse;