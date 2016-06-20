import React from "react";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

// import Main from "../components/main";
// import Home from "../components/home";

var Main = require( "../components/main.js");
var Home = require( "../components/home.js");

var routes = (
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={Home} />
			{/*<Route path='playerOne' header="player one" component={PromptContainer} />
			<Route path='playerTwo/:playerOne' header="player two" component={PromptContainer}/>
			<Route path='battle' component={ConfirmBattleContainer}/>
			<Route path='results' component={ResultsContainer}/>*/}
		</Route>
	</Router>
)
module.exports = routes;