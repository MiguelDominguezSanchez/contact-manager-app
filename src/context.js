import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
	state = {
		contacts: [
			{
				id: 1,
				name: 'john Doe',
				email: 'jdoe@gmail.com',
				phone: '555-555-555',
			},
			{
				id: 2,
				name: 'Karen',
				email: 'karen@gmail.com',
				phone: '333-333-333',
			},
			{
				id: 3,
				name: 'Henry Johnson',
				email: 'henry@gmail.com',
				phone: '111-111-111',
			},
		],
	};

	render() {
		return (
			<Context.Provider value={this.state}>
				{this.props.children}
			</Context.Provider>
		);
	}
}

export const Consumer = Context.Consumer;
