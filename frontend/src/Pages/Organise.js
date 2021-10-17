import React from "react";
import Vector from "../Images/Vector1.svg";
import Vector2 from "../Images/Vector2.svg";
import Vector3 from "../Images/Vector3.svg";
import "../CSS/Services.css";

function Organise() {
	return (
		<div className='service'>
			<div className='organise-head-top'>
				<div>
					<span style={{ color: "#ec5863" }}> Organise</span> &nbsp;at your
					fingertips
				</div>
				<div className='organise-heading'>
					<span className='organise-content-heading'>
						Bringing the most efficient and easy to use platform to contribute
						towards the betterment of
					</span>
					<span className='organise-content'>
						the society and also help reduce the waste generated thus keeping
						the earth green
					</span>
				</div>
			</div>
			<div className='camps'>
				<div className='camp-item'>
					<img src={Vector} className='vector' />
					<div className='organise-head'>
						<span className='camp-text'>WELLNESS CAMPS</span>
						<span className='organise-content'>
							Organise free wellness camps in
						</span>
						<span className='organise-content'>your locality</span>
					</div>
				</div>
				<div className='camp-item'>
					<img src={Vector2} className='vector' />
					<div className='organise-head'>
						<span className='camp-text'>DONATE OR RECYCLE</span>
						<span className='organise-content'>
							Donate extra medicines or help us
						</span>
						<span className='organise-content'>in recycling medical waste</span>
					</div>
				</div>
				<div className='camp-item'>
					<img src={Vector3} className='vector' />
					<div className='organise-head'>
						<span className='camp-text'>AWARENESS DRIVES</span>
						<span className='organise-content'>Organise awareness drives</span>
						<span className='organise-content'>
							and make the underpriveleged
						</span>
						<span className='organise-content'>understand</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Organise;
