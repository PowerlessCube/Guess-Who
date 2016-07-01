var React = require("react");
var ReactDOM = require("react-dom");
var GuessWhoBox = require("./components/GuessWhobox.jsx");

window.onload = function(){
  ReactDOM.render(
    <GuessWhoBox />,
    document.getElementById("app")
  );
};
