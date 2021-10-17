import React from "react";
import "../CSS/Contact.css";
import ContactImg from "../Images/Contact.svg";

function Contact() {
	return (
		<div className='contact'>
			<div className='contact-img'>
				<img src={ContactImg} className='img' />
			</div>
			<div className='contact-text'>
				<div className='contact-content'>
					<div className='head'>
						<span>Need Some Help?</span>
						<span>
							Contact the best{" "}
							<span style={{ color: "#ec5863" }}>experts.</span>
						</span>
					</div>
					<div className='text'>
						<span>24x7 Support and user friendly platform to bring </span>
						<span>healthcare to your fingertips. Signup and be a part of </span>
						<span>the new health culture.</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
