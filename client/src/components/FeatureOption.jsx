var React = require("react");
var _ = require("lodash");

var FeatureOption = React.createClass({
	render: function() {
		if (this.props.featureOptions) {
			var options = this.props.featureOptions.map(function(feature, index) {
				return <option value={index} key={index}>{feature}</option>
			})
		}
		return(
			<select className="selector">{options}</select>
		)
	}

});

module.exports = FeatureOption;
