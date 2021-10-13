import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import logo from "./logo.png";
import back from "./back.png";

const OTPPage = () => {
	const history = useHistory();

	const handleRoute = () => {
		history.push("/address-kyc");
	};

	const handleRoute2 = () => {
		history.push("/");
	};
	const [otp, setOtp] = useState(new Array(4).fill(""));

	const handleChange = (element, index) => {
		if (isNaN(element.value)) return false;

		setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

		//Focus next input
		if (element.nextSibling) {
			element.nextSibling.focus();
		}
	};

	return (
		<div className="OTPPage">
			<div className="topbar">
				<div className="back">
					<img src={back} alt="back" onClick={handleRoute2} />
				</div>
				<div className="homeName">OTP</div>
				<div className="logo">
					<img src={logo} alt="logo" />
				</div>
			</div>
			<div className="OTPBody">
				<p className="otpHead">Verification Code</p>
				<p className="otpText">
					Please type the verification code sent to +1231312312123
				</p>
			</div>
			<div className="OTPBox">
				{otp.map((data, index) => {
					return (
						<input
							className="otp-field"
							type="text"
							name="otp"
							maxLength="1"
							key={index}
							value={data}
							onChange={(e) => handleChange(e.target, index)}
							onFocus={(e) => e.target.select()}
						/>
					);
				})}
			</div>
			<div className="toAddressBtnDiv">
				<button className="toAddressBtn" onClick={handleRoute}>
					Verify OTP
				</button>
			</div>
		</div>
		// <div className="container-fluid">
		// 	<div class="row justify-content-between headerRow">
		// 		<div class="col-6">
		// 			<h4 className="text-light">OTP</h4>
		// 		</div>
		// 		<div class="col-6">
		// 			<img src={logo} alt="logo" width="150" />
		// 		</div>
		// 	</div>
		// 	<div className="row">
		// 		<div className="col text-center mt-5 mb-1">
		// 			<h2>Verification Code</h2>
		// 			<p>Please type the verification code sent to +12345678</p>

		// 			{otp.map((data, index) => {
		// 				return (
		// 					<input
		// 						className="otp-field"
		// 						type="text"
		// 						name="otp"
		// 						maxLength="1"
		// 						key={index}
		// 						value={data}
		// 						onChange={(e) => handleChange(e.target, index)}
		// 						onFocus={(e) => e.target.select()}
		// 					/>
		// 				);
		// 			})}

		// 			<p>
		// 				<button className="btn" onClick={handleRoute}>
		// 					Verify OTP
		// 				</button>
		// 			</p>
		// 		</div>
		// 	</div>
		// </div>
	);
};

export default OTPPage;
