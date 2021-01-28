import React, { Component, Fragment } from 'react';
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

	deleteContact = id => {
		const { contacts } = this.state;

		const newContacts = contacts.filter(contact => contact.id !== id);

		this.setState({
			contacts: newContacts,
		});
	};

	render() {
		const { contacts } = this.state;

		return (
			<Fragment>
				{contacts.map(contact => (
					<Contact
						key={contact.id}
						contact={contact}
						deleteClickHandler={this.deleteContact.bind(this, contact.id)}
					/>
				))}
			</Fragment>
		);
	}
}

export default Contacts;
