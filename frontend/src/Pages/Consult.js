import React from "react";
import Vector from "../Images/Vector1.svg";
import Img6 from "../Images/Img6.jpg";
import Img7 from "../Images/Img7.jpg";
import "../CSS/Services.css";

function Consut() {
	return (
		<div className='service'>
			<div className='organise-head-top'>
				<div>
					<span>
						Consult the&nbsp;<span style={{ color: "#ec5863" }}> Experts</span>{" "}
					</span>
				</div>
			</div>
			<div className='camps'>
				<div className='camp-item'>
					<img src={Img6} className='vector' />
					<div className='organise-head'>
						<span className='camp-text'>VIRTUAL CONSULTATION</span>
						<span className='organise-content'>
							Talk to one of our finest experts
						</span>
						<span className='organise-content'>virtually.</span>
					</div>
				</div>
				<div className='camp-item'>
					<img src={Img7} className='vector' />
					<div className='organise-head'>
						<span className='camp-text'>NEARBY EXPERTS</span>
						<span className='organise-content'>
							Look for a professional nearby and
						</span>
						<span className='organise-content'>book his appointment.</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Consut;
