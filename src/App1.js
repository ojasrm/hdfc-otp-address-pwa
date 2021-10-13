import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
	render() {
		const otpStyle = {
			alignSelf: "center",
			margin: 10,
			fontSize: 20,
			height: 40,
			width: "10%",
			borderRadius: 10,
			borderWidth: 0.5,
			justifyContent: "center",
			borderColor: "grey",
			alignContent: "center",
			textAlign: "center",
		};
		return (
			<div>
				{/* Top Bar */}
				<div>
					<h1>OTP</h1>
					<img src="" alt="logo" />
				</div>
				{/* Text */}
				<div>
					<h2>Verification Code</h2>
					<p>Please type the verification code sent to +12345678</p>
				</div>
				{/* OTP boxes */}
				<div>
					<input type="text" maxLength={1} style={otpStyle} />
					<input type="text" maxLength={1} style={otpStyle} />
					<input type="text" maxLength={1} style={otpStyle} />
					<input type="text" maxLength={1} style={otpStyle} />
				</div>
			</div>
		);
	}
}
