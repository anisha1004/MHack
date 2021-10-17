import React from "react";
import { Link } from "react-router-dom";
import HomeImg from "../Images/HomeImg.svg";
import "../CSS/Home.css";
import Contribute from "./Contribute";
import Services from "./Services";
import Contact from "./Contact";

function Home() {
	return (
		<>
			<div className='home'>
				<div className='left'>
					<div className='navbar-home'>
						<Link to='/' className='home-link-home'>
							<div className='logo'>MHACKS</div>
						</Link>
						<div className='nav-contents-home'>
							<Link to='/' className='home-link'>
								<div className='nav-btn'>HOME</div>
							</Link>
							<Link to='/services' className='home-link'>
								<div className='nav-btn'>SERVICES</div>
							</Link>
							<Link to='/supportus' className='home-link'>
								<div className='nav-btn'>SUPPORT US</div>
							</Link>
							<Link to='/contact' className='home-link'>
								<div className='nav-btn'>CONTACT</div>
							</Link>
						</div>
					</div>
					<div className='home-content'>
						<div className='home-cont'>
							<div className='home-heading'>
								<div>
									Take care of yours family's{" "}
									<span style={{ color: "#ec5863" }}>health.</span>
								</div>
							</div>
							<div className='home-para'>
								Your one stop destination to store all your medical records
								securely and privately.
								<br />
								Single step, Hassle free sharing of your records.
							</div>
							<Link to='/details' className='get-started'>
								<div className='home-button'>GET STARTED</div>
							</Link>
						</div>
						<div className='home-image'>
							<img src={HomeImg} alt='home' />
						</div>
					</div>
				</div>
				<div className='right'>
					<div className='red' />
				</div>
			</div>
			<Contribute />
			<Contact />
			<Services />
		</>
	);
}

export default Home;
