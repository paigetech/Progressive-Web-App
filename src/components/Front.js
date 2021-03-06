import React from 'react';

export default class Front extends React.Component{
	constructor (props) {
		super(props);
	}

	componentDidMount() {}

	add() {
		this.props.store.addItem('tufsing');
	}

	render() {
		return (
			<div className="row">
				<div className="column">
					<h1>Welcome</h1>
					<p>This is a universal progressive webapp. It is server rendered with express, and buildt on ReactJS and MobX</p>
					<h2>Progressive web app features currently implemented</h2>
					<ul>
						<li>Offline - using web cache api and indexedDB</li>
						<li>Background sync</li>
						<li>Push messages</li>
					</ul>
				</div>
			</div>
		)
	}
}
