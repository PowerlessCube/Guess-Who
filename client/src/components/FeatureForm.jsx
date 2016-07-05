var React = require("react");
var _ = require("lodash");

var FeatureSelector = require("./FeatureSelector.jsx")

var FeatureForm = React.createClass({
	setDisplayFeature: function() {
		this.setState({  })
	},

	render: function() {
		if( !this.props.characters[0] ) {
			return( <h4>Getting Data...</h4>)
		}
		var getKeys = this.props.characters[0]
		return (
			<form action="">
				<label>Choose a feature: </label>
				<FeatureSelector
					className="selector"
					keys={getKeys}
					setCharacteristic={this.props.setCharacteristic}
				/>
			<FeatureOption
				className="selector"
				options={this.props.options}
			/>
			// TODO: Create a feature Option selector file and pass options too it.
			</form>
		);
	}

});

module.exports = FeatureForm;
