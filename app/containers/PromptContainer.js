var React = require('react');
var ReactRouter = require("react-router");

var Link = ReactRouter.Link;

var PromptContainer = React.createClass({
	getInitialState: function(){
		return{
			username: ''
		}
	},
	setUser: function(e){
		e.preventDefault();
		var username = this.state.username;
		this.setState({
			username: ''
		});
		this.props({
			people: 'sjkhfjksdhkfj'
		})
			console.log(this.props);
		if (this.props.routeParams.playerOne){
			this.props.routeParams({
				pathname: "/battle",
				query:{
					playerOne: this.props.routeParams.playerOne,
					playerTwo: this.state.username
				}
			})
		} else{
			this.props.routeParams({
				playerOne: '/playerTwo/' + this.state.username
			});
		}
	},
	onUpdate: function(e){
		this.setState({
			username: e.target.value
		})
	},
	render: function(){
		return(
			<div>
				<h1>{this.props.route.header}</h1>
				<div>
					<form onSubmit={this.setUser}>
						<div>
							<input type='text' onChange={this.onUpdate} value={this.state.username} placeholder="github username"/>
						</div>
						<div>
						<button type="submit">Continue</button>
						</div>
					</form>
				</div>
			</div>
		)
	}
});

module.exports = PromptContainer;