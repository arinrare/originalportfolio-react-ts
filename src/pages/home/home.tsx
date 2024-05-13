import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';
import './home.css';
import Navmenu from '../../components/navmenu/navmenu';
import Footer from '../../components/footer/footer';

const portrait = require('../../images/home/portrait.png');
const facebook = require('../../images/home/facebookIcon.png');
const google = require('../../images/home/googleIcon.png');
const twitter = require('../../images/home/twitterIcon.png');
const linkedin = require('../../images/home/linkedinIcon.png');
const youtube = require('../../images/home/youtubeIcon.png');

const Home = () => {
    
	sessionStorage.setItem('currentPage', '0');

	useEffect(() => {
		document.title = "Orignal Portfolio of Michael Baggott - Home"
		ReactGA.send({ hitType: "pageview", page: "/home", title: "Original Portfolio - Home Page" });
	});
		
	return (
        <>
            <Navmenu />
			<section className="content">
				<section className="contentWrapper">
					
					<aside className="inline">
						<section>
							<article className="center">
								<div className="heading">portfolio of </div>
								<div className="headingName">Michael Baggott</div>
							</article>
						</section>
						<img className="portrait" src={portrait} alt="Portrait of Michael Baggott, black and white in a circular frame" />
						<section className="socialContainer">
							<section>
								<article className="inline social"><img src={facebook} alt="Facebook Icon, circle with blue background containing white letter F" /></article>
								<article className="inline social"><img src={google} alt="Google Icon, circle with orange background containing white letter G with a plus symbol" /></article>
								<article className="inline social"><img src={twitter} alt="Twitter Icon, circle with light blue background containing a white swallow (bird)" /></article>
							</section>
							<section>
								<article className="inline social"><img src={linkedin} alt="LinkedIn Icon, circle with blue background containing white letters i and n" /></article>
								<article className="inline social"><img src={youtube} alt="YouTube, circle with red background containing white you tube logo that spells out youtube" /></article>
							</section>
						</section>
					</aside>
					
					<section className="homeContent inline">
						<article className="contentHeading">Biography & Goal</article>
						<br/>		
						<article className="contentText wordWrap">Michael is 39 years old, and is currently a full time University Student studying a Bachelor of Technology (Computing Studies). He expects to have this programming degree completed by the end of 2015. This portfolio showcases some examples of the projects (University and Personal) he has completed, in both Programming and Web Development. Also available here is a CV/Resume for viewing and download, and information on how you can contact him. </article>
						<br/>
						<article className="contentText wordWrap">In addition to his study, Michael has worked for 9 years in the IT industry. His first IT job was a 5 year period working for a PC Manufacturing Company, where he began as a PC assembly technician, progressed to quality assurance management and testing, and finally was promoted to workshop manager and on-site technician. Another job saw him working in technical support for an ISP, performing customer technical support for Dial-Up Internet and ADSL, diagnosing and rectifying hardware and software faults, service fault logging and follow-up, and communication with both senior network engineer and wholesale supplier.</article>
						<br/>
						<article className="contentText wordWrap">The goal for Michael is to obtain work as a Programmer or in Web Development at the completion of his degree.</article>
					</section>
					
				</section>
				
			</section>
            <Footer />
        </>
    );
}
export default Home;