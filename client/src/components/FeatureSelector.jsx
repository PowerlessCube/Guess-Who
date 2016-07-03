var React = require("react");
var _ = require("lodash");

var FeatureSelector = React.createClass({
	getInitialState: function() {
		return { selectedIndex: null };
	},

	render: function() {
		var characters = this.props.characters.map(function(character) {
			return character;
		});
		console.log(characters[0]);
		var keys = characters[0].map(function(key) {
			return Object.keys(key);
		});
		console.log(keys);
		return (
			<h1>the fuck is going on with this thing?</h1>
		);
	}

});

module.exports = FeatureSelector;
