import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import { useForm } from "../Utils/hooks";
import { Link, useHistory } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/auth";
import { gql, useQuery, useMutation } from "@apollo/client";
import AddIcon from "@material-ui/icons/Add";
import "../CSS/fillDetails.css";

export default function Details() {
	const { user, logout } = useContext(AuthContext);
	const [errors, setErrors] = useState([]);
	const [currentRecord, setCurrentRecord] = useState("");
	const [records, setRecords] = useState();
	const history = useHistory();
	const { data: { getMedicalRecords: medicalRecords } = {} } =
		useQuery(GET_DETAILS);

	const [completeHistory, setCompleteHistory] = useState(
		medicalRecords ? medicalRecords.medicalhistory : []
	);

	const initialState = {
		name: medicalRecords ? medicalRecords.name : "",
		address: medicalRecords ? medicalRecords.address : "",
		phone: medicalRecords ? medicalRecords.phone : "",
		bloodgroup: medicalRecords ? medicalRecords.bloodgroup : "",
		height: medicalRecords ? medicalRecords.height : "",
		weight: medicalRecords ? medicalRecords.weight : "",
		//mostRecentVisit: medicalRecords ? medicalRecords.mostRecentVisit : "",
	};

	const { onChange, onSubmit, values } = useForm(initialState);

	function handleRecordAdd() {
		setCompleteHistory([...completeHistory, { desc: currentRecord }]);
		setCurrentRecord("");
	}

	const [createDetails] = useMutation(UPDATE_DETAILS, {
		update(_, { data: { createMedicalRecord: medicalRec } }) {
			console.log(medicalRec);
			history.push("/");
		},
		onError(err) {
			console.log(err);
			setErrors(err.graphQLErrors[0].extensions.exception.errors);
		},
		variables: { ...values, medicalhistory: completeHistory },
	});

	function detailsCre() {
		createDetails();
	}

	function handleUpdate() {
		detailsCre();
	}

	console.log(completeHistory);
	return (
		<div className='details'>
			<div className='details-left'>
				<div className='left-red'>
					<div className='content-box'>
						<Avatar>
							<div className='avatar-text'>{user && user.username[0]}</div>
						</Avatar>
						<div className='user-name'>
							{(medicalRecords && medicalRecords.name) ||
								(user && user.username)}
						</div>
					</div>
					<div className='button-box'>
						<div className='update-button' onClick={handleUpdate}>
							UPDATE
						</div>
						<div className='share-button'>SHARE</div>
					</div>
				</div>
			</div>
			<div className='details-right'>
				<div className='navbar-home'>
					<div className='nav-contents-home'>
						<Link to='/' className='home-link'>
							<div className='details-nav-btn'>HOME</div>
						</Link>
						<Link to='/services' className='home-link'>
							<div className='details-nav-btn'>SERVICES</div>
						</Link>
						<Link to='/supportus' className='home-link'>
							<div className='details-nav-btn'>SUPPORT US</div>
						</Link>
						<Link to='/contact' className='home-link'>
							<div className='details-nav-btn'>CONTACT</div>
						</Link>
					</div>
					<div className='button-container-details'>
						{user ? (
							<>
								<div className='avatar'>
									<Avatar>{user.username[0]}</Avatar>
								</div>
								<div className='btn'>
									<button className='logout-btn' onClick={logout}>
										LogOut
									</button>
								</div>
							</>
						) : (
							<>
								<div className='btn'>
									<Link to='/login'>
										<button className='login-btn'>Log In</button>
									</Link>
								</div>
							</>
						)}
					</div>
				</div>
				<div className='details-container'>
					<div className='details-container-left'>
						<div className='details-filler'>
							<div className='detail-header'>NAME</div>
							<div className='detail-input'>
								<input
									type='text'
									className='detail-input-field'
									name='name'
									placeholder={medicalRecords ? medicalRecords.name : "Name"}
									value={values.username}
									onChange={onChange}
								/>
							</div>
						</div>
						<div className='details-filler'>
							<div className='detail-header'>ADDRESS</div>
							<div className='detail-input'>
								<input
									type='text'
									className='detail-input-field'
									name='address'
									placeholder={
										medicalRecords ? medicalRecords.address : "Address"
									}
									value={values.address}
									onChange={onChange}
								/>
							</div>
						</div>
						<div className='details-filler'>
							<div className='detail-header'>PHONE</div>
							<div className='detail-input'>
								<input
									type='text'
									className='detail-input-field'
									name='phone'
									placeholder={medicalRecords ? medicalRecords.phone : "Phone"}
									value={values.phone}
									onChange={onChange}
								/>
							</div>
						</div>
						<div className='details-filler'>
							<div className='detail-header'>BLOOD GROUP</div>
							<div className='detail-input'>
								<input
									type='text'
									className='detail-input-field'
									name='bloodgroup'
									placeholder={
										medicalRecords ? medicalRecords.bloodgroup : "Blood Group"
									}
									value={values.bloodgroup}
									onChange={onChange}
								/>
							</div>
						</div>
						<div className='details-filler'>
							<div className='detail-header'>HEIGHT</div>
							<div className='detail-input'>
								<input
									type='text'
									className='detail-input-field'
									name='height'
									placeholder={
										medicalRecords ? medicalRecords.height : "Height"
									}
									value={values.height}
									onChange={onChange}
								/>
							</div>
						</div>
						<div className='details-filler'>
							<div className='detail-header'>WEIGHT</div>
							<div className='detail-input'>
								<input
									type='text'
									className='detail-input-field'
									name='weight'
									placeholder={
										medicalRecords ? medicalRecords.weight : "Weight"
									}
									value={values.weight}
									onChange={onChange}
								/>
							</div>
						</div>
						<div className='details-filler'>
							<div className='detail-header'>MOST RECENT VISIT</div>
							<div className='detail-input'>
								<input
									type='text'
									className='detail-input-field'
									name='mostrecentvisit'
									placeholder='Most Recent Visit'
									value={values.mostRecentVisit}
									onChange={onChange}
								/>
							</div>
						</div>
					</div>
					<div className='details-container-right'>
						<div className='details-header'>MEDICAL HISTORY</div>
						<div className='already-history'>
							{completeHistory.map((record, i) => {
								return (
									<div key={i} className='present-history'>
										{record.desc}
									</div>
								);
							})}
						</div>
						<div className='detail-input-right'>
							<input
								type='text'
								className='detail-input-field'
								name='desc'
								placeholder='Add History'
								value={currentRecord}
								onChange={(e) => setCurrentRecord(e.target.value)}
							/>
							<div className='plus-button' onClick={handleRecordAdd}>
								<AddIcon />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

const GET_DETAILS = gql`
	{
		getMedicalRecords {
			username
			address
			name
			phone
			height
			bloodgroup
			weight
			medicalhistory {
				desc
			}
		}
	}
`;

const UPDATE_DETAILS = gql`
	mutation createMedicalRecord(
		$name: String
		$address: String
		$phone: String
		$height: String
		$weight: String
		$bloodgroup: String
		$medicalhistory: [DescriptionInput]
	) {
		createMedicalRecord(
			name: $name
			address: $address
			phone: $phone
			height: $height
			weight: $weight
			bloodgroup: $bloodgroup
			medicalhistory: $medicalhistory
		) {
			name
			address
			phone
			height
			weight
			bloodgroup
			medicalhistory {
				desc
			}
		}
	}
`;
