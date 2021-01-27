import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
	constructor() {
		super();
		this.state = {
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
	}

	render() {
		const { contacts } = this.state;

		return (
			<div>
				{contacts.map(contact => (
					<Contact key={contact.id} contact={contact} />
				))}
			</div>
		);
	}
}

export default Contacts;
