import React from "react";
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from '../components/Home';
import About from '../components/About';

export default () => (
	<BrowserRouter>
		<Switch>
			<Route path="/about" exact component={About} />
			<Route path="" exact render={props => <Home{...props} />} />
		</Switch>
	</BrowserRouter>
)

