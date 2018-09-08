import React, { Component } from 'react';
import './media.css';

class Media extends React.Component {
	render() {
		// const styles = {
		// 	container: {
		// 		color: '#44546B',
		// 		cursor: 'pointer',
		// 		width: 260,
		// 		border: '1px solid red'
		// 	}
		// }
		return (
			<div className="Media">
				<div>
					<img 
						src="./images/owilde.jpg" 
						alt=""
						width={260}
						height={160}
				 	/>
				 	<h3>Quotes</h3>
				 	<p>Mariano Logarzo</p>
				</div>
			</div>	
		)
	}
}

export default Media;