import React, { Component } from 'react';

function greet() {alert('Hello')};

class ComponentC extends Component {

	render() {
		return (

			<div>
				<button onClick={() => greet()}><b>HELLO</b></button>
			</div>
		)
	}
}

export default ComponentC;