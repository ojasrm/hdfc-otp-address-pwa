import React from "react";
import { useHistory } from "react-router-dom";
import logo from "./logo.png";

function Home() {
	const history = useHistory();

	const handleRoute = () => {
		history.push("/otp");
	};
	return (
		<div className="home">
			<div className="topbar">
				<div className="homeName">Home</div>
				<div className="logo">
					<img src={logo} alt="logo" />
				</div>
			</div>
			<div className="toOTPBtn">
				<button onClick={handleRoute}>OTP-page</button>
			</div>
		</div>
		// <div class="container-fluid">
		// 	<div class="row justify-content-between headerRow">
		// 		<div class="col-6">
		// 			<h4 className="text-light">Home</h4>
		// 		</div>
		// 		<div class="col-6">
		// 			<img src={logo} alt="logo" width="150" />
		// 		</div>
		// 	</div>
		// 	<div class="row align-items-center m-5">
		// 		<button className="btn" onClick={handleRoute}>
		// 			OTP-page
		// 		</button>
		// 	</div>
		// </div>
	);
}

export default Home;
