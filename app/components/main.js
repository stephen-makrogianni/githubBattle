import React from "react";

var Main = React.createClass({
	render : function(){
		return (
			<div>
				<h1>main</h1>
				{this.props.children}
			</div>
		)
	}
});
module.exports = Main;