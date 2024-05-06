import React from 'react';
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
                            <div className="readContainer"><a href= "web.html#everwarm" title="Everwarm Fuel Merchants"><div className="readMore readMoreLeft">Read More...</div></a></div>
                        </div>
                    </article>
                    <article id = "animation" className="browseContainer inline">
                        <div className="browseInnerContainer">
                            <img className="zoomIcon zoomIconRight" {...tab} src={zoom} alt="Zoom In Icon, black magnifying glass with plus symbol" />
                            <img className="zoomOutIcon zoomOutIconRight" {...tab} src={zoomout} alt="Zoom Out Icon, black magnifying glass with minus symbol" />
                            <div className="zoomDiv zoomDivRight"><article className="gridHeading">Animation Series Output</article><img className="zoom" src={animation} alt="Graphical Representation of Animation Project, shows some code and a frame of an animation" /></div>
                            <div className="readContainer"><a href="programming.html#animation" title="Animation Series Output"><div className="readMore readMoreRight">Read More...</div></a></div>
                        </div>
                    </article>
                </section>
                
                <section className="gridWrapper ZoomIt">
                    <article id = "tbs" className="browseContainer inline">
                        <div className="browseInnerContainer">
                            <img className="zoomIcon zoomIconLeft" {...tab} src={zoom} alt="Zoom In Icon, black magnifying glass with plus symbol" />
                            <img className="zoomOutIcon zoomOutIconLeft" {...tab} src={zoomout} alt="Zoom Out Icon, black magnifying glass with minus symbol" />
                            <div className="zoomDiv zoomDivLeft"><article className="gridHeading">Tour Booking System</article><img className="zoom" src={PMS} alt="Graphical representation of Tour Booking System Project, shows the booking system console application" /></div>
                            <div className="readContainer"><a href="programming.html#pms" title="Tour Booking System"><div className="readMore readMoreLeft">Read More...</div></a></div>
                        </div>
                    </article>
                    <article id = "lms" className="browseContainer inline">
                        <div className="browseInnerContainer">
                            <img className="zoomIcon zoomIconRight" {...tab} src={zoom} alt="Zoom In Icon, black magnifying glass with plus symbol" />
                            <img className="zoomOutIcon zoomOutIconRight" {...tab} src={zoomout} alt="Zoom Out Icon, black magnifying glass with minus symbol" />
                            <div className="zoomDiv zoomDivRight"><article className="gridHeading">Library Management</article><img className="zoom" src={LMS} alt="Graphical representation of Library Management System Project, shows the Library Management System console application" /></div>
                            <div className="readContainer"><a href="programming.html#lms" title="Library Management System"><div className="readMore readMoreRight">Read More...</div></a></div>
                        </div>
                    </article>
                </section>
                
                <section className="gridWrapper ZoomIt">
                    <article id = "hobbit" className="browseContainer inline">
                        <div className="browseInnerContainer">
                            <img className="zoomIcon zoomIconLeft" {...tab} src={zoom} alt="Zoom In Icon, black magnifying glass with plus symbol" />
                            <img className="zoomOutIcon zoomOutIconLeft" {...tab} src={zoomout} alt="Zoom Out Icon, black magnifying glass with minus symbol" />
                            <div className="zoomDiv zoomDivLeft"><article className="gridHeading">The Hobbit Website</article><img className="zoom" src={hobbit} alt="Graphical representation of The Hobbit Website, shows the homepage with title, navigation menu and an image of Gandalf the Wizard" /></div>
                            <div className="readContainer"><a href="web.html#hobbit" title="The Hobbit Website"><div className="readMore readMoreLeft">Read More...</div></a></div>
                        </div>
                    </article>
                </section>
            </section>
            <Footer />
        </>
    );
}
export default Browse;