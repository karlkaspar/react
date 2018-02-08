import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AddBtn from "../components/AddBtn";

import {Header} from "../components/Header";
import {Home} from "../components/Home";

class App extends React.Component {
	render() {
		return (
			<div className="mainContainer">
				<Header/>
				<Home/>
			</div>
		);
	}
}
			

const mainContainer = document.getElementById("app");
ReactDOM.render(<App/>, mainContainer);
