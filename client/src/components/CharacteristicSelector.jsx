var React = require("react");
var _ = require("lodash");

var CharacteristicSelector = React.createClass({
	getInitialState: function() {
		return {selectedIndex: null};
	},

	render: function() {
		return(
			<select>
				<option>Test</option>
			</select>
		)
	}
});

module.exports = CharacteristicSelector;
