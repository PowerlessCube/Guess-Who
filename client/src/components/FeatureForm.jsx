var React = require("react");
var _ = require("lodash");

var FeatureSelector = require("./FeatureSelector.jsx")
var FeatureOption = require("./FeatureOption.jsx")

var FeatureForm = React.createClass({
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
			<label>Choose Characteristic: </label>
			<FeatureOption
				className="selector"
				featureOptions={this.props.options}
			/>
			</form>
		);
	}

});

module.exports = FeatureForm;
