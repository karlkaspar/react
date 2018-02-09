import React from "react";

export class Header extends React.Component {
	render() {
		return (
			<header>
				<div className="staticLeft">
					ReactJS
				</div>
				<div className="mainMenu">
					<ul>
						<li><a href="/">Names</a></li>
						<li><a href="about">About</a></li>
					</ul>
				</div>
			</header>
		);
	}
}