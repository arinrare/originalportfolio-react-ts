import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';
import './resume.css';
import Navmenu from '../../components/navmenu/navmenu';
import Footer from '../../components/footer/footer';
const bluTri = require('../../images/resume/blueTri.png');
const yelTri = require('../../images/resume/yellowTri.png');
const redTri = require('../../images/resume/redTri.png');
const oraTri = require('../../images/resume/orangeTri.png');
const aquaTri = require('../../images/resume/aquaTri.png');

const Resume = () => {
    useEffect(() => {
		document.title = "Oroginal Portfolio of Michael Baggott - Resume"
		ReactGA.send({ hitType: "pageview", page: "/originalportfolio/resume", title: "Original Portfolio - Resume Page" });
	});
    
    return (
        <>
            <Navmenu />
            <section className="content">
                <br/>
                <br/>
                <section className="triangleContainer">         
                    <a className="skillsLink" href="#skills"><div className="skillsImage inline triangleImage"></div><article className="inline triangleLink">Skills</article></a>
                    <a className="achievementsLink" href="#achievements"><div className="achievementsImage inline triangleImage"></div><article className="inline triangleLink">Achievements</article></a>
                    <a className="experienceLink" href="#experience"><div className="experienceImage inline triangleImage"></div><article className="inline triangleLink">Experience</article></a>
                    <a className="technologyLink" href="#technology"><div className="technologyImage inline triangleImage"></div><article className="inline triangleLink">Technology</article></a>
                    <a className="educationLink" href="#education"><div className="educationImage inline triangleImage"></div><article className="triangleLinkLast inline triangleLink">Education</article></a>
                </section>
                
                <article className="resumeHeading">Michael Baggott</article>
                <article className="resumeSubHeadingCenter italics">University Student</article>
                
                <hr className="resumeRule" />
                
                <section className="resumeContentWrapper">
                    <article className="resumeContent wordWrap">&#8226; IT professional with 9 years of corporate experience in the IT industry</article>
                    <article className="resumeContent wordWrap">&#8226; Experience in PC hardware and software, from assembly and troubleshooting, business and personal networking, onsite troubleshooting and repair, to Internet configuration, support and troubleshooting.</article>
                    <article className="resumeContent wordWrap">&#8226; Performing exceptionally well at University level, with 10 out of 24 units completed so far, with a total of 3 Distinction results, and 7 High Distinction results.</article>
                </section>
                
                <hr className="resumeRule" />
                
                <section className = "resumeContentWrapper">
                    <article id="skills" className="resumeSubHeading"><img className="headingImage" src={bluTri} alt="Blue  Triangle with charcoal outline, changes on hover to a charcoal triangle with blue outline" />Skills</article>
                </section>
                
                <section className="skillsContainer">
                    <article className="skillsContent wordWrap">&#8226; Programming in Python (Basic)</article>
                    <article className="skillsContent wordWrap">&#8226; Web Languages (HTML5/CSS3)</article>
                    <article className="skillsContent wordWrap">&#8226; Programming in Java (Advanced)</article>
                    <article className="skillsContent wordWrap">&#8226; Web Programming (PHP, Javascript/jQuery)</article>
                    <article className="skillsContent wordWrap">&#8226; Database Concepts</article>
                    <article className="skillsContent wordWrap">&#8226; PC assembly and repair</article>
                    <article className="skillsContent wordWrap">&#8226; Database Programming (PHP/MySQL)</article>
                    <article className="skillsContent wordWrap">&#8226; Internet support</article>
                    <article className="skillsContent wordWrap">&#8226; Web Development</article>
                </section>
                
                <hr className="resumeRule" />
                
                <section className="resumeContentWrapper">
                    <article id="achievements" className="resumeSubHeading"><img className="headingImage" src={yelTri} alt="Aqua  Triangle with charcoal outline, changes on hover to a charcoal triangle with aqua outline" />Exceptional Achievements (Recent)</article>
                </section>
                
                <section className="rounded highlight">
                    <article className="achievements wordWrap">&#8226; <strong>Introduction to Programming (Python)</strong> High Distinction: 100% (2013)</article>
                    <article className="achievements wordWrap">&#8226; <strong>Advanced Programming Techniques 1 (Java)</strong> High Distinction: 99% (2014)</article>
                    <article className="achievements wordWrap">&#8226; <strong>Web Programming (HTML/CSS/Javascript/jQuery/PHP)</strong> High Distinction: 88% (2013) </article>
                    <article className="achievements wordWrap">&#8226; <strong>Database Concepts (SQL) </strong> High Distinction: 87% (2014)</article>
                </section>
                
                <hr className="resumeRule" />
                
                <section className="resumeContentWrapper">
                    <article id="experience" className="resumeSubHeading"><img className="headingImage" src={redTri} alt="Red Triangle with charcoal outline, changes on hover to a charcoal triangle with red outline" />Relevant Professional Experience</article>
                </section>
                
                <section className="rounded highlight">
                    <article className="highlightContent wordWrap"><span className="black"><strong>TRIDENT COMPUTERS, HORNSBY, NSW</strong></span> – Multi-Million Dollar PC Manufacturer</article>
                    <article className="highlightContent wordWrap"><span className="black"><strong>PC Technician, </strong>1995 - 1999</span></article>
                </section>
                <section className="resumeContentWrapper">
                    <article className="resumeContent wordWrap">Manage assembly/QA/onsite work as Head Technician. Responsible for weekly onsite repair income of $5000 - $7000. Managed workshop operations including ISO procedures, Quality Assurance procedures, testing procedures, and workshop staff.</article>
                </section>
                <article className="resumeContent italic wordWrap black highlightInset rounded"><strong>Selected Accomplishments:</strong></article>
                <section className="resumeContentWrapper">
                    <article className="resumeContent wordWrap">&#8226; Was promoted to Workshop Manager from initial employment as Casual Technician.</article>
                    <article className="resumeContent wordWrap">&#8226; Responsible for corporate roll-out of new business operating systems and networks, including Microsoft Small Business Server, Exchange Server, Proxy Server.</article>
                    <article className="resumeContent wordWrap">&#8226; Managed workshop testing procedure of new PC’s, including hardware and software procedures, stress testing, and burn-in testing.</article>
                    <article className="resumeContent wordWrap">&#8226; Managed and performed workshop onsite duties, including PC installation, troubleshooting and repair. Network installation, troubleshooting and repair, both for personal computer users and corporate customers.</article>
                    <article className="resumeContent wordWrap">&#8226; Managed assembly procedures and production line for delivery of over 300 workstations for Jupiters Casino, NSW in 1988 (Appx. $9,000,000 contract).</article>
                    <article className="resumeContent wordWrap">&#8226; Managed assembly procedures and production line for delivery of over 60 RAID HDD Servers on a project for Sydney Rail NSW in 1999 (Appx. $4,500,000 contract).</article>
                </section>
                
                <section className="rounded highlight">
                    <article className="highlightContent wordWrap"><span className="black"><strong>PENINSULA NET, FRANKSTON, VIC</strong></span> – Local startup Internet Service Provider</article>
                    <article className="highlightContent wordWrap"><span className="black"><strong>Technical Support, </strong>2005 to 2009</span></article>
                </section>
                <section className="resumeContentWrapper">
                    <article className="resumeContent wordWrap">Technical Support for a local ISP with approximately 2000 customers. Performed support via phone and email, and provided fault logs and follow-up with ADSL supplier.</article>
                </section>
                <article className="resumeContent italic wordWrap black highlightInset rounded"><strong>Selected Accomplishments:</strong></article>
                <section className="resumeContentWrapper">
                    <article className="resumeContent wordWrap">&#8226; Successfully managed a base of 2000 customers, being the only active support staff 80% of the time.</article>
                    <article className="resumeContent wordWrap">&#8226; Managed accounts with responsibility of root access to Linux Web and Email Server.</article>
                    <article className="resumeContent wordWrap">&#8226; Identified network and service issues both at user level, and at supplier level.</article>
                </section>
                
                <hr className="resumeRule" />
                
                <section className="resumeContentWrapper">
                    <article id="technology" className="resumeSubHeading"><img className="headingImage" src={oraTri} alt="Orange Triangle with charcoal outline, changes on hover to a charcoal triangle with orange outline" />Technology</article>
                </section>
                <section className="rounded highlight">
                    <section className="highlightContent"><article className="techHeading black inline wordWrap"><strong>Software: </strong></article><article className="techContent inline wordWrap">Windows XP/Vista/7, Python Language, Java Language, SQL Language</article></section>
                    <section className="highlightContent"><article className="techHeading black inline wordWrap"><strong>Web/Multimedia: </strong></article><article className="techContent inline wordWrap">Photoshop, FTP, Office, HTML/HTML5 Language, CSS/CSS3 Language, Javascript, jQuery, PHP, Web Design</article></section>
                </section>
                
                <hr className="resumeRule" />
                
                <section className="resumeContentWrapper">
                    <article id="education" className="resumeSubHeading"><img className="headingImage" src={aquaTri} alt="Yellow  Triangle with charcoal outline, changes on hover to a charcoal triangle with yellow outline" />Education</article>
                </section>
                <section className="rounded highlight">
                    <section className="highlightContent"><article className="techHeading black inline"><strong>RMIT UNIVERSITY, MELBOURNE</strong></article></section>
                    <section className="highlightContent"><article className="techHeading black inline"><strong>Bachelor of Technology, Computing Studies (Underway 2013 - Current)</strong></article></section>
                    <article className="highlightContent">&#8226; Major: Computing Studies (Programming)</article>
                    <article className="highlightContent">&#8226; Minor: Web Design</article>
                    <article className="highlightContent">&#8226; Statement of Results Available</article>
                </section>
                
                <hr className="resumeRule" />
                
            </section>
            <Footer />
        </>
    );
}
export default Resume;