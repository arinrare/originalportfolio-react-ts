import React from 'react';
import './contact.css';
import Navmenu from '../../components/navmenu/navmenu';
import Footer from '../../components/footer/footer';


const Contact = () => {
    
    const textarea= {rows: 10, cols: 24};
    
    return (
        <>
            <Navmenu />
            <section id="content">
	
		<section id="contentWrapper">
					
			<section id="formContainer" className="inline">
			
				<form id="form" action="../../scripts/contactemail.php" method="post">
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
							<textarea id="textArea"  {...textarea} name = "message" >
							</textarea>
						</section>
						<section className="buttonHolder">
							<input className="button" type = "submit" value = "Submit"/>
							<input className="button" type = "reset" value = "Reset" />
						</section>
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