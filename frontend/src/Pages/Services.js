import React from "react";
import Vector from "../Images/Vector1.svg";
import Img4 from "../Images/Img4.jpg";
import Img5 from "../Images/Img5.jpg";
import "../CSS/Services.css";

function Services() {
	return (
		<div className='service'>
			<div className='organise-head-top'>
				<div>
					<span>
						Our&nbsp;<span style={{ color: "#ec5863" }}> Services</span>{" "}
					</span>
				</div>
			</div>
			<div className='camps'>
				<div className='camp-item'>
					<img src={Img5} className='vector' />
					<div className='organise-head'>
						<span className='camp-text'>STORE RECORDS</span>
						<span className='organise-content'>
							Keep all your records securely
						</span>
						<span className='organise-content'>and access them anytime.</span>
					</div>
				</div>
				<div className='camp-item'>
					<img src={Img4} className='vector' />
					<div className='organise-head'>
						<span className='camp-text'>CONSULTANCY</span>
						<span className='organise-content'>
							Get the best advice from the
						</span>
						<span className='organise-content'>finest doctors.</span>
					</div>
				</div>
				<div className='camp-item'>
					<img src={Vector} className='vector' />
					<div className='organise-head'>
						<span className='camp-text'>CONRTIBUTE</span>
						<span className='organise-content'>Give something back to</span>
						<span className='organise-content'>the society.</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Services;
