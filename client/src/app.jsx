var React = require("react");
var ReactDOM = require("react-dom");
var GuessWhoBox = require("./components/GuessWhobox.jsx");

window.onload = function(){
  ReactDOM.render(
    <GuessWhoBox url="api/characters" />,
    document.getElementById("app")
  );
};
