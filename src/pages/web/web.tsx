import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './web.css';
import Navmenu from '../../components/navmenu/navmenu';
import Footer from '../../components/footer/footer';
const dotsLeft = require('../../images/programming/dotsLeft.png');
const dotsRight = require('../../images/programming/dotsRight.png');


const Web = () => {
    
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
                    
                    <section id = "everwarm" className="gridContainer inline">
                        <section className="center">
                            <img className="projectImg" src = {dotsLeft} alt="Series of orange circular images getting smaller in size, and lighter in color as they go along" /><article className="inline projectHeading">Everwarm Fuel Merchants</article><img className="projectImg" src = {dotsRight} alt="Series of orange circular images getting smaller in size, and lighter in color as they go along" />
                        </section>
                        <section className="projectHighlight rounded">
                            <section>
                                <article className="inline projectLabel wordWrap projectPadding">Languages:</article><article className="inline projectDescription projectPadding wordWrap">HTML, CSS, Javascript</article>
                            </section>
                            <section>
                                <article className="inline projectLabel wordWrap projectPadding">Description:</article><article className="inline wordWrap projectDescription projectPadding">Michaels first attempt at building a web page. While design was not being judged in this assessment, the site does demonstrate the use of three elements of web development, HTML, CSS and Javascript. Simulating the functions of sales and delivery for a retail business, concepts used include an HTML form, user input validation, and calculations with Javascript. All processing is performed client-side in the browser.</article>
                            </section>
                            <section>
                                <article className="inline projectLabel wordWrap projectPadding">Link to Site:</article><article className="inline projectDescription projectPadding"><a className="projectLink" href = "everwarm/" target="_blank">Everwarm Fuel Merchants</a></article>
                            </section>
                            <section>
                                <article className="inline projectLabel wordWrap projectPadding">Browse Project:</article><article className="inline projectDescription projectPadding">Go to <HashLink onClick={() => handleClick('2')} className="projectLink" to='/browse#everwarm'>Browse</HashLink>  Page</article>
                            </section>
                        </section>
                    </section>
                    
                    <section id = "hobbit" className="gridContainer inline">
                        <section className="center">
                            <img className="projectImg" src = {dotsLeft} alt="Series of orange circular images getting smaller in size, and lighter in color as they go along" /><article className="inline projectHeading">The Hobbit</article><img className="projectImg" src = {dotsRight} alt="Series of orange circular images getting smaller in size, and lighter in color as they go along" />
                        </section>
                        <section className="projectHighlight rounded">
                            <section>
                                <article className="inline projectLabel wordWrap projectPadding">Languages:</article><article className="inline projectDescription projectPadding wordWrap">HTML5, CSS3, Javascript, jQuery, PHP</article>
                            </section>
                            <section>
                                <article className="inline projectLabel wordWrap projectPadding">Description:</article><article className="inline wordWrap projectDescription projectPadding">This assessment shows some more advanced use of web development, including use of the PHP server side processing language, and jQuery, an API for Javascript. Again, not taking design into consideration, the site shows some more advanced user input validation using a combination of server-side and client-side methods, some use of HTML5 elements, and a basic image gallery.</article>
                            </section>
                            <section>
                                <article className="inline projectLabel wordWrap projectPadding">Link to Site</article><article className="inline projectDescription projectPadding"><a className="projectLink" href = "hobbit/" target="_blank">The Hobbit</a></article>
                            </section>
                            <section>
                                <article className="inline projectLabel wordWrap projectPadding">Browse Project:</article><article className="inline projectDescription projectPadding">Go to <HashLink onClick={() => handleClick('2')} className="projectLink" to='/browse#hobbit'>Browse</HashLink>  Page</article>
                            </section>
                        </section>
                    </section>
                </section>
            </section>
            <Footer />
        </>
    );
}
export default Web;