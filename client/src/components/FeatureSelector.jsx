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
		var selectedCharacteristic = this.props.character[ newIndex ];

	},

	render: function() {
		if( !this.props.characters[0] ) { return( <h4>Getting Data...</h4>) }
		var keys = Object.keys(this.props.characters[0]);
		keys.shift();
		var option = keys.map(function(key, index) {
			return (<option value={index} key={this.props.characters[index]._id}> {_.capitalize(key)} </option>)
		}.bind(this))

		return (
			<select value={this.state.selectedIndex} onChange={this.handleChange}>
				{option}
			</select>
		);
	}

});

module.exports = FeatureSelector;
