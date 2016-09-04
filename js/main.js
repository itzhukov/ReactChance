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

		setInterval( () => {
			let name = chance.name();

			this.setState({
				name: name
			});
		}, 10)
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
