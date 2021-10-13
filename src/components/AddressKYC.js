import React from "react";
import { useHistory } from "react-router-dom";
import logo from "./logo.png";
import back from "./back.png";

function AddressKYC() {
	const history = useHistory();

	const handleRoute3 = () => {
		history.push("/otp");
	};
	return (
		<div className="AddressPage">
			<div className="topbar">
				<div className="back">
					<img src={back} alt="back" onClick={handleRoute3} />
				</div>
				<div className="homeName">Address KYC</div>
				<div className="logo">
					<img src={logo} alt="logo" />
				</div>
			</div>
			<button className="scanDocBtn">CLICK HERE TO SCAN YOUR DOCUMENT</button>
			<div className="addressForm">
				<p className="formText">
					Make sure all your information is correct before join with us
				</p>
				<form>
					<div className="firstName">
						<label for="firstName" className="firstNameLabel">
							First Name
						</label>
						<input type="text" className="firstNameInput" />
					</div>
					<div className="lastName">
						<label for="lastName" className="lastNameLabel">
							Last Name
						</label>
						<input type="text" className="lastNameInput" />
					</div>
					<div className="address">
						<label for="address" className="addressLabel">
							Address
						</label>
						<textarea className="addressInput"></textarea>
					</div>
				</form>
				<button type="button" class="scanBtn">
					SCAN AGAIN
				</button>
				<button type="button" class="confirmBtn">
					CONFIRM
				</button>
			</div>
		</div>

		// <div className="container-fluid">
		// 	<div class="row justify-content-between headerRow">
		// 		<div class="col-6">
		// 			<h4 className="text-light">Address KYC</h4>
		// 		</div>
		// 		<div class="col-6">
		// 			<img src={logo} alt="logo" width="150" />
		// 		</div>
		// 	</div>
		// 	<div className="row justify-content-evenly text-center">
		// 		<div className="col">
		// 			<button className="btn btn-primary rounded-0 m-2">
		// 				CLICK HERE TO SCAN YOUR DOCUMENT
		// 			</button>
		// 			<p>Make sure all your information is correct before join with us</p>
		// 		</div>
		// 	</div>
		// 	<div className="row justify-content-evenly">
		// 		<div className="col">
		// 			<form>
		// 				<div className="mb-3">
		// 					<label for="firstName" className="form-label">
		// 						First Name
		// 					</label>
		// 					<input type="text" className="form-control" />
		// 					<label for="lastName" className="form-label">
		// 						Last Name
		// 					</label>
		// 					<input type="text" className="form-control" />
		// 					<label for="address" className="form-label">
		// 						Address
		// 					</label>
		// 					<textarea className="form-control" cols="30" rows="7"></textarea>
		// 				</div>
		// 			</form>
		// 		</div>
		// 	</div>
		// 	<div class="container bg-light">
		// 		<div class="col-12 text-center">
		// 			<button type="button" class="btn btn-primary rounded-0 m-3">
		// 				SCAN AGAIN
		// 			</button>
		// 			<button type="button" class="btn btn-primary rounded-0 m-3">
		// 				CONFIRM
		// 			</button>
		// 		</div>
		// 	</div>
		// </div>
	);
}

export default AddressKYC;
