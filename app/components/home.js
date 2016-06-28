import React from "react";

var ReactRouter = require('react-router');

var Link = ReactRouter.Link;

var Home = React.createClass({
	render : function(){
		return (
			<div>
				<p>Home</p>
				<Link to='/playerOne'>
					<button type='button' className='btn btn-lg btn-success'>Get Started</button>
				</Link>
			</div>
		)
	}
});
module.exports = Home;