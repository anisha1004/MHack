import React from "react";
import "../CSS/Contribute.css";
import { Link } from "react-router-dom";
import ContriImg from "../Images/contri.svg";

function Contribute() {
	return (
		<div className='contri'>
			<div className='stats-cont'>
				<div className='stats'>
					<div className='contri-wrapper'>
						<div className='stat-content'>
							<div className='stat-num'>2.5K</div>
							<div className='stat-heading'>USERS</div>
						</div>
						<div className='stat-content'>
							<div className='stat-num'>1.7T</div>
							<div className='stat-heading'>Waste collected</div>
						</div>
						<div className='stat-content'>
							<div className='stat-num'>100+</div>
							<div className='stat-heading'>Camps organised</div>
						</div>
					</div>
				</div>
			</div>
			<div className='contri-bot'>
				<div className='contri-text'>
					<div className='contri-text-wrapper'>
						<div className='contri-heading'>Contribute.</div>
						<div className='contri-para'>
							Schedule medical waste collection drives, organise awareness and
							wellness camps
						</div>
						<Link to='/organise' className='contribute-started'>
							<div className='contribute-button'>CONTRIBUTE</div>
						</Link>
					</div>
				</div>
				<div className='contri-img'>
					<div className='img-wrapper'>
						<img src={ContriImg} alt='contri-img' className='cont-img' />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contribute;
