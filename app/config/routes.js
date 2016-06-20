import React from "react";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

// import Main from "../components/main";
// import Home from "../components/home";

var Main = require( "../components/main.js");
var Home = require( "../components/home.js");

var routes = (
	<Router>
		<Route path="/" component={Main}>
			<Route path="/home" component={Home} />
		</Route>
	</Router>
)
module.exports = routes;