import React, { Component } from 'react';

class Test extends Component {
	state = {
		test: 'test',
	};

	componentDidMount() {
		console.log('componentDidMount...');
	}
	componentWillMount() {
		console.log('componentWillMount...');
	}
	componentDidUpdate() {
		console.log('componenDidUpdate...');
	}
	componentWillUpdate() {
		console.log('componenWillUpdate...');
	}

	componentWillReceiveProps(nextProps, nextStage) {
		console.log('componentWillReceiveProps...');
	}

	static getDerivedStatFromProps(nextProps, prevState) {
		return null;
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('getSnapshotBeforeUpdate...');
	}

	render() {
		return (
			<div>
				<h1>Test Component</h1>
			</div>
		);
	}
}

export default Test;
