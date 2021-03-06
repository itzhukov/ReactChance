'use strict'

import React from "react";
import ReactDOM from "react-dom";
import Chance from "chance";

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			name: ''
		}
	}

	componentDidMount() {
		// setInterval( () => {
		// 	this.changeName();
		// }, 20);

		this.changeName();
	}

	changeName() {
		let name = chance.name();

		this.setState({
			name: name
		});

		name = null;

		requestAnimationFrame( () => {
			this.changeName();
		});
	}

	render() {
		return (
			<div>{this.state.name}</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('#App') );

/* ================================= exports ================================= */

module.exports = {

}
