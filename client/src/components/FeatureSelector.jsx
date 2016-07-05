var React = require("react");
var _ = require("lodash");

var FeatureSelector = React.createClass({
	handleChange: function(e) {
		e.preventDefault();
		var newKey= e.target.value;
		this.props.setCharacteristic(newKey);
	},

	render: function() {
		if( !this.props.keys ) {
			return( <h4>Getting Data...</h4>)
		}
		var getkeys = Object.keys(this.props.keys);
		var keys = getkeys.splice(2, getkeys.length-1);
		var option = keys.map(function(key, index) {
			return (
				<option
					value={key}
					key={index}>
					{_.capitalize(key)}
				</option>)
		}.bind(this))

		return (
				<select
					onChange={this.handleChange}>
					{option}
				</select>
		);
	}

});

module.exports = FeatureSelector;
