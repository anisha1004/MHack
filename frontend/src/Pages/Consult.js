import React from "react";
import Vector from "../Images/Vector1.svg";
import "../CSS/Services.css";

function Consut() {
	return (
		<div className='service'>
			<div className='service-head'>
				Consult the&nbsp;<span style={{ color: "#ec5863" }}> Experts</span>
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
			</div>
		</div>
	);
}

export default Consut;
