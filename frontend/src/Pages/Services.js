import React from "react";
import Vector from "../Images/Vector1.svg";
import "../CSS/Services.css";

function Services() {
	return (
		<div className='service'>
			<div className='service-head'>
				Our&nbsp;<span style={{ color: "#ec5863" }}> Services</span>
			</div>
			<div className='camps'>
				<div className='camp-item'>
					<img src={Vector} className='vector' />
					<span className='camp-text'>Store</span>
				</div>
				<div className='camp-item'>
					<img src={Vector} className='vector' />
					<span className='camp-text'>consult</span>
				</div>
				<div className='camp-item'>
					<img src={Vector} className='vector' />
					<span className='camp-text'>nearby</span>
				</div>
			</div>
		</div>
	);
}

export default Services;
