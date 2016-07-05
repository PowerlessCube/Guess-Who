var React = require("react");
var FeatureForm = require("./FeatureForm.jsx");

var GuessWhoBox = React.createClass({
	getInitialState: function() {
		return {
			characters: [],
			displayCharacteristic: null
		};
	},

	fetchCharacters: function() {
		var request = new XMLHttpRequest();
		request.open("GET", this.props.url);
		request.onload = function() {
			var data = JSON.parse( request.responseText );
			this.setState({ characters: data });
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
				<div className="guess-form">
					<FeatureForm
						className="form"
						characters={this.state.characters}
					/>
				</div>
			</div>
		);
	}
});

module.exports = GuessWhoBox;
