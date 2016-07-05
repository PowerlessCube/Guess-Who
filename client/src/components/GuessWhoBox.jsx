var React = require("react");
var FeatureForm = require("./FeatureForm.jsx");
var _ = require('lodash')

var GuessWhoBox = React.createClass({
	getInitialState: function() {
		//state sets happen here.
		return {
			characters: [],
			chosenCharacteristic: null
			selectedCharacter: null
		};
	},

	setCharacteristic:function(characteristic){
		this.setState( {chosenCharacteristic: characteristic})
	},

	fetchCharacters: function() {
		var request = new XMLHttpRequest();
		request.open("GET", this.props.url);
		request.onload = function() {
			var data = JSON.parse( request.responseText );
			this.setState({ characters: data, selectedCharacter: data[0] });
		}.bind(this);
		request.send();
	},

	componentDidMount: function() {
		this.fetchCharacters();
	},
	optionsForCharacteristic:function(characteristic){
		var options = this.state.characters.map( function(character){
			return character[characteristic]
		})
		console.log('options in function', options)
		return _.uniq(options)
	},

	render: function() {
		console.log('this.state.chosenCharacteristic', this.state.chosenCharacteristic)
		if(this.state.chosenCharacteristic){
			var options = this.optionsForCharacteristic(this.state.chosenCharacteristic)
		}
		console.log('options', options)
		return (
			<div className="main-div">
				Main Div
				<div className="guess-form">
					<FeatureForm
						className="form"
						characters={this.state.characters}
						setCharacteristic={this.setCharacteristic}
						options={options}
					/>
				</div>
			</div>
		);
	}
});

module.exports = GuessWhoBox;
