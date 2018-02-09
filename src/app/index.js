import React from "react";
import Routes from '../routes' 

import ReactDOM from "react-dom";
import {Header} from "../components/Header";
import {Home} from "../components/Home";

class App extends React.Component {
	render() {
		return (
			<div className="mainContainer">
				<Header/>
				<Routes/>
			</div>
		);
	}
}
			

const mainContainer = document.getElementById("app");
ReactDOM.render(<App/>, mainContainer);
