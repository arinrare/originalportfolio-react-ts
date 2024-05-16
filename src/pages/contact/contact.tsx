import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';
import ReCAPTCHA from "react-google-recaptcha";
import './contact.css';
import Navmenu from '../../components/navmenu/navmenu';
import Footer from '../../components/footer/footer';
import { useSearchParams } from 'react-router-dom';


const Contact = () => {
    
    const textarea= {rows: 10, cols: 24};
	const reCaptachaSiteKey = '6LcCXNYpAAAAAJ82vWYbwP_tk1Yy2pLGq5z03coQ';
	    
	const [token, setToken] = useState({reccaptchaToken: ''});
	const [error, setError] = useState('false');
	const [formSuccess, setFormSuccess] = useState('false');
	const [formError, setFormError] = useState({error: 'false', message: ''});
	const [searchParams, setSearchParams] = useSearchParams();

	useEffect(() => {
		document.title = "Original Portfolio of Michael Baggott - Contact"
		ReactGA.send({ hitType: "pageview", page: "/originalportfolio/contact", title: "Original Portfolio - Contact Page" });
		
		if(searchParams.get("form") === 'success') {
			setFormSuccess('true');
			setSearchParams({});
			setTimeout(() => {
				setFormSuccess('false');
			}, 6000);
		} 
		else if (searchParams.get("form") === 'error' && searchParams.get("error") !== '') {
			let error = searchParams.get("error") as string; // Add type assertion here
			setFormError({error: 'true', message: error});
			setSearchParams({});
			setTimeout(() => {
				setFormError({error: 'false', message: ''});
			}, 6000);
		}
	}, [searchParams, setSearchParams]);
		
	function onChange(value: any) {
		setToken({reccaptchaToken: value});
	}

	function handleSubmit(event: any) {
		event.preventDefault();
		if (token.reccaptchaToken === '') {
			console.log('Please check the reCAPTCHA box');
			setError('true');
			return;
		} else {
			setError('false');
			event.target.submit();	
		}

	}
	return (
        <>
            <Navmenu />
            <section className="content">
				<section className="contentContentWrapper">
							
					<section className="formContainer">
					
						<form className="form" action="/scripts/dig251-react-ts/contactemail.php" method="post" onSubmit={handleSubmit}>
							<fieldset className="formBorder">
								<legend className="formHeading">Contact Form</legend>
								<section className="formPlaceHolder">
									<label className="formLabel" >Name:</label>
									<input className="formInput" type = "text" name = "name" required />
								</section>
								<section className="formPlaceHolder">
									<label className="formLabel">Email Address:</label>
									<input className="formInput" type = "text" name = "email" required />
								</section>
								<section className="formPlaceHolder">	
									<label className="formLabel" >Subject:</label>
									<input className="formInput" type = "text" name = "subject" required/>
								</section>
								<section className="formPlaceHolder">
									<label className="formLabel textAreaLabel" >Message:</label>
									<textarea {...textarea} name = "message" required>
									</textarea>
								</section>
								<section>
									<input type="hidden" name="recaptchaToken" value={token.reccaptchaToken} />	
								</section>
								<section>
									<div className={error === 'true' ? 'contactErrorShow formError' : 'contactErrorHide'}>Please check the Captcha</div>
									<div className={formSuccess === 'true' ? 'formSuccessShow formError' : 'formSuccessHide'}>Your contact email has been sent successfully</div>
									<div className={formError.error === 'true' ? 'formErrorShow formError' : 'formErrorHide'}>{formError.message}</div>
								</section>
								<section className="buttonHolder">
									<input className="button" type = "submit" value = "Submit"/>
									<input className="button" type = "reset" value = "Reset" />
								</section>
								
								<ReCAPTCHA 
          							sitekey={reCaptachaSiteKey}
          							onChange={onChange}
          						/>
							</fieldset>
						</form>
				
					</section>
				</section>
			</section>
            <Footer />
        </>
    );
}
export default Contact;