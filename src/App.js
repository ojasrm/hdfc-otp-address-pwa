import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, OTPPage, AddressKYC, Header } from "./components";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/" exact component={() => <Home />} />
					<Route path="/otp" exact component={() => <OTPPage />} />
					<Route path="/address-kyc" exact component={() => <AddressKYC />} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
