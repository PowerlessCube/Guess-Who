
var React = require("react");
var _ = require("lodash");

var FeatureSelector = React.createClass({
	getInitialState: function() {
		return { selectedIndex: null };
	},

	onChange: function(e) {
		
	}

	render: function() {
		if( !this.props.characters[0] ) { return( <h1>Getting data</h1> ) }
		var keys = Object.keys(this.props.characters[0]);
		keys.shift();
		var option = keys.map(function(key, index) {
			return (<option value={index} key={this.props.characters[index]._id}> {_.capitalize(key)} </option>)
		}.bind(this))

		return (
			<select value={this.state.selectedIndex}>
				{option}
			</select>
		);
	}

});

module.exports = FeatureSelector;
