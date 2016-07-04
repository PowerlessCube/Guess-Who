
var React = require("react");
var _ = require("lodash");

var FeatureSelector = React.createClass({
	getInitialState: function() {
		return { selectedIndex: null };
	},

	render: function() {
		if( !this.props.characters[0] ) { return( <h1>Getting data</h1> ) }
		var keys = Object.keys( this.props.characters[0] );
		console.log( keys);
		// var chars = this.props.characters.map(function(character) {
		// 	return character;
		// });
		// var keys = characters[0].map(function(key) {
		// 	return Object.keys(key);
		// });
		// console.log(keys);
		return (
			<h1>Placeholder!</h1>
		);
	}

});

module.exports = FeatureSelector;
