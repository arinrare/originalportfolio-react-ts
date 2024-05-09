import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import './contact.css';
import Navmenu from '../../components/navmenu/navmenu';
import Footer from '../../components/footer/footer';


const Contact = () => {
    
    const textarea= {rows: 10, cols: 26};
	const reCaptachaSiteKey = '6LcCXNYpAAAAAJ82vWYbwP_tk1Yy2pLGq5z03coQ';
	let reccaptchaToken = '';
    
	const [token, setToken] = useState({reccaptchaToken: ''});
	
	function onChange(value: any) {
		setToken({reccaptchaToken: value});
	  }
    
	return (
        <>
            <Navmenu />
            <section className="content">
	
				<section className="contentWrapper">
							
					<section className="formContainer">
					
						<form className="form" action="/scripts/dig251-react-ts/contactemail.php" method="post">
							<fieldset className="formBorder">
								<legend className="formHeading">Contact Form</legend>
								<section className="formPlaceHolder">
									<label className="formLabel" >Name:</label>
									<input className="formInput" type = "text" name = "name" />
								</section>
								<section className="formPlaceHolder">
									<label className="formLabel">Email Address:</label>
									<input className="formInput" type = "text" name = "email" />
								</section>
								<section className="formPlaceHolder">	
									<label className="formLabel" >Subject:</label>
									<input className="formInput" type = "text" name = "subject" />
								</section>
								<section className="formPlaceHolder">
									<label className="formLabel textAreaLabel" >Message:</label>
									<textarea {...textarea} name = "message" >
									</textarea>
								</section>
								<section>
									<input type="hidden" name="recaptchaToken" value={token.reccaptchaToken} />	
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