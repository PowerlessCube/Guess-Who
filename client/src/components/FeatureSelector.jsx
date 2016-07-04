var React = require("react");
var _ = require("lodash");

var FeatureSelector = React.createClass({
	getInitialState: function() {
		return { selectedIndex: null };
	},

	handleChange: function(e) {
		e.preventDefault();
		var newIndex = e.target.value
		this.setState({selectedIndex: newIndex})
		// FIXME: I need some way of pulling the variable keys back out from the render func so I can display the correct feature here... This is tricky.  Thoughts thus far involve changing how I hand the information to FeatureSelector, I could potentially handl3 the render in the getInitialState part of and then mess around with it that way. 
	},

	render: function() {
		if( !this.props.characters[0] ) {
			return( <h4>Getting Data...</h4>)
		}
		var getkeys = Object.keys(this.props.characters[0]);
		var keys = getkeys.splice(2, getkeys.length-1);
		var option = keys.map(function(key, index) {
			return (<option value={index} key={this.props.characters[index]._id}> {_.capitalize(key)} </option>)
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
