import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

const app = document.getElementById('app');

var Routes = require( "./config/routes");

// var data = {
// 	name: 'steve',
// 	link: 'stuff',
// 	pic: 'location'
// }


// var HelloWorld = React.createClass({
// 	render: function(){
// 		console.log(this.props);
// 		return (
// 			<div>Hello {this.props.name}</div>
// 		)
// 	}
// });

// var ProfilePic = React.createClass( {
// 	render: function(){
// 		return <img src={'https://photo.fb.com/' + this.props.pic} />
// 	}
// });
// var ProfileLink = React.createClass( {
// 	render: function(){

// 	return (
// 		<a href={'https://www.fb.com/' + this.props.link}>
// 			{this.props.link}
// 		</a>
// 	)
// 	}
// });
// var ProfileName = React.createClass( {
// 	render: function(){
// 	return (
// 		<h1>{this.props.name}</h1>
// 	)
// 	}
// });
// var Avatar = React.createClass( {
// 	render: function(){
// 		console.log(this.props);
// 	return (
// 		<div>
// 			<ProfilePic pic={this.props.user.pic} />
// 			<ProfileLink link={this.props.user.link} />
// 			<ProfileName name={this.props.user.name} />
// 		</div>
// 	)
// 	}
// });

ReactDOM.render(
	Routes,
	app
);