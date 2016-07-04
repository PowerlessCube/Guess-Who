var React = require("react");
var FeatureSelector = require("./FeatureSelector.jsx");
var CharacteristicSelector = require("./CharacteristicSelector.jsx");

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

	setDisplayCharacteristic: function(characteristic) {
		this.setState({ displayCharacteristic: characteristic })
	},

	render: function() {
		return (
			<div className="main-div">
				Main Div
				<div className="guess-div">
					<label htmlFor="">Select Features: </label>
					<FeatureSelector
						className="Selector"
						characters={this.state.characters}
					/>
				<label>Characteristic selector: </label>
					<CharacteristicSelector
						className="Selector"
						onSelectedCharacteristic={this.setDisplayCharacteristic}
					/>
				</div>
			</div>
		);
	}
});

module.exports = GuessWhoBox;
