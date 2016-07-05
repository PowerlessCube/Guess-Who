var React = require("react");
var _ = require("lodash");

var FeatureSelector = React.createClass({
	getInitialState: function() {
		return {
			selectedIndex: null,
		};
	},

	handleChange: function(e) {
		e.preventDefault();
		var newIndex = e.target.value;
		this.setState({ selectedIndex: newIndex });
		// TODO: Need to find a way to pass this down to a second selector that will display all the options for a given feature.
	},

	render: function() {
		if( !this.props.keys ) {
			return( <h4>Getting Data...</h4>)
		}
		var getkeys = Object.keys(this.props.keys);
		//removes the first 2 keys _id and name in the getKeys array.
		var keys = getkeys.splice(2, getkeys.length-1);
		var option = keys.map(function(key, index) {
			return (
				<option
					value={index}
					key={index}>
					{_.capitalize(key)}
				</option>)
		}.bind(this))

		return (
				<select
					value={this.state.selectedIndex}
					onChange={this.handleChange}>
					{option}
				</select>
		);
	}

});

module.exports = FeatureSelector;
