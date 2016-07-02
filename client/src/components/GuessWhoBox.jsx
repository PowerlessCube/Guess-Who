var React = require("react");

var GuessWhoBox = React.createClass({
	getInitialState: function() {
		return {data: []};
	},

	fetchCharacters: function() {
		var request = new XMLHttpRequest();
		request.open("GET", this.props.url);
		request.onload = function() {
			var dbCharacters = JSON.parse( request.responseText );
			this.setState({ data: dbCharacters });
		}.bind(this);
		request.send();
	},

	componentDidMount: function() {
		this.fetchCharacters();
	},

	render: function() {
		return (
			<div className="main-div">
				Main Div
			<div className="guess-div">
				Guess Div
			</div>
			</div>
		);
	}
});

module.exports = GuessWhoBox;
