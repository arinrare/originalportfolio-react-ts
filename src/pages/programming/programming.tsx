import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './programming.css';
import Navmenu from '../../components/navmenu/navmenu';
import Footer from '../../components/footer/footer';

const dotsLeft = require('../../images/programming/dotsLeft.png');
const dotsRight = require('../../images/programming/dotsRight.png');


const Programming = () => {
    
    if (sessionStorage.getItem('currentPage') === null) {
        handleClick('0');
    }
	   
    function handleClick(ID: string) {
            sessionStorage.setItem('currentPage', ID);
    } 
    
    return (
        <>
            <Navmenu />
            <section id = "content">
		
                <section className="gridWrapper">
                
                    <section id = "animation" className="gridContainer inline">
                        <section className="center">
                            <img className="projectImg" src={dotsLeft} alt="Series of orange circular images getting smaller in size, and lighter in color as they go along" /><article className="inline projectHeading">Animation Series Output</article><img className="projectImg" src={dotsRight} alt="Series of orange circular images getting smaller in size, and lighter in color as they go along" />
                        </section>
                        <section className="projectHighlight rounded">
                            <section>
                                <article className="inline projectLabel wordWrap projectPadding">Languages:</article><article className="inline projectDescription projectPadding wordWrap">Python, Jython</article>
                            </section>
                            <section>
                                <article className="inline projectLabel wordWrap projectPadding">Description:</article><article className="inline wordWrap projectDescription projectPadding">A University assessment in an introductory programming unit, this program was designed as an introduction to loops, and pixel by pixel image manipulation. The program creates a series of images based on a calculation provided by the assessor. Each iteration of a loop adjusts the image output for the frame to be slightly different than the previous one. The output frames can then be put together in an animated movie, that will run for a short time.</article>
                            </section>
                            <section>
                                <article className="inline projectLabel wordWrap projectPadding">Downloadable JY File:</article><article className="inline projectDescription projectPadding"><a className="projectLink" href = "/code/animation.jy" download>animation.jy</a></article>
                            </section>
                            <section>
                                <article className="inline projectLabel wordWrap projectPadding">Browse Project:</article><article className="inline projectDescription projectPadding">Go to <HashLink onClick={() => handleClick('2')} className="projectLink" to='/browse#animation'>Browse</HashLink>  Page</article>
                            </section>
                        </section>
                    </section>
                    
                    <section id = "tbs" className="gridContainer inline">
                        <section className="center">
                            <img className="projectImg" src={dotsLeft} alt="Series of orange circular images getting smaller in size, and lighter in color as they go along" /><article className="inline projectHeading">Tour Booking System (Console)</article><img className="projectImg" src={dotsRight} alt="Series of orange circular images getting smaller in size, and lighter in color as they go along" />
                        </section>
                        <section className="projectHighlight rounded">
                            <section>
                                <article className="inline projectLabel wordWrap projectPadding">Languages:</article><article className="inline projectDescription projectPadding wordWrap">Java</article>
                            </section>
                            <section>
                                <article className="inline projectLabel wordWrap projectPadding">Description:</article><article className="inline wordWrap projectDescription projectPadding">Written in Java, this console based program is an introduction to Object Oriented programming, making use of multiple classes. Also tested is user input validation, using loops, and custom exceptions. The program simulates a tour booking system for a travel agency, allowing customers to book in, assignment of customers to tours, and tour operators to groups.</article>
                            </section>
                            <section>
                                <article className="inline projectLabel wordWrap projectPadding">Link to ZIP File:</article><article className="inline projectDescription projectPadding"><a className="projectLink" href = "/code/tbs.zip" download>tbs.zip</a></article>
                            </section>
                            <section>
                                <article className="inline projectLabel wordWrap projectPadding">Browse Project:</article><article className="inline projectDescription projectPadding">Go to <HashLink onClick={() => handleClick('2')} className="projectLink" to='/browse#tbs'>Browse</HashLink>  Page</article>
                            </section>
                        </section>	
                    </section>
                </section>
                
                <section className="gridWrapper">
                
                    <section id = "lms" className="gridContainer inline">
                        <section className="center">
                            <img className="projectImg" src={dotsLeft} alt="Series of orange circular images getting smaller in size, and lighter in color as they go along" /><article className="inline projectHeading">Library Management System (GUI)</article><img className="projectImg" src={dotsRight} alt="Series of orange circular images getting smaller in size, and lighter in color as they go along" />
                        </section>
                        <section className="projectHighlight rounded">
                            <section>	
                                <article className="inline projectLabel wordWrap projectPadding">Languages:</article><article className="inline projectDescription projectPadding wordWrap">Java</article>
                            </section>
                            <section>
                                <article className="inline projectLabel wordWrap projectPadding">Description:</article><article className="inline wordWrap projectDescription projectPadding">This is a large Object Oriented program that simulates a library management system. Written in two stages, the console element of the program provides the mechanics of the system, allowing a library collection to be established, and holdings in the form of books and videos to be added. Using the MVC pattern, a GUI has been added for user interaction. Such concepts as encapsulation and coupling rules have been observed during the construction of the program.</article>
                            </section>
                            <section>
                                <article className="inline projectLabel wordWrap projectPadding">Link to ZIP File:</article><article className="inline projectDescription projectPadding"><a className="projectLink" href = "/code/lms.zip" download>lms.zip</a></article>
                            </section>
                            <section>
                                <article className="inline projectLabel wordWrap projectPadding">Browse Project:</article><article className="inline projectDescription projectPadding">Go to <HashLink onClick={() => handleClick('2')} className="projectLink" to='/browse#lms'>Browse</HashLink>  Page</article>
                            </section>
                        </section>
                    </section>
                    
                </section>	
            
            </section>
            <Footer />
        </>
    );
}
export default Programming;