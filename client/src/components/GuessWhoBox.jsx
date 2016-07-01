var React = require("react");

var GuessWhoBox = React.createClass({
	getInitialState: function() {
		return {data: []};
	},

	render: function() {
		return (
			<div className="main-div">
				Main Div
			</div>
		);
	}
});

module.exports = GuessWhoBox;
