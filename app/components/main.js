import React from "react";
var ReactRouter = require("react-router");

var Link = ReactRouter.Link;


var Main = React.createClass({
	render : function(){
		return (
			<div className="main-container">
				<h1>{this.props.children}</h1>
			</div>
		)
	}
});
module.exports = Main;