import React from 'react';
import Header from './Header';
import AddContact from './AddContact';
import Contacts from './Contacts';

export default class ContactApp extends React.Component {
	state = {
		contacts: []
	};

	handleAddContact = (contact) => {
		// map over added contact to check details against current contacts
		let duplicates = this.state.contacts.map((user) => {
			return user.phone === contact.phone || user.email === contact.email;
		});

		let lastIndex = duplicates.length - 1;

		if (!contact.name || !contact.email || !contact.phone) {
			return 'Enter Complete Contact details';
		} else if (duplicates[lastIndex]) {
			return 'This contact exists already';
		}

		this.setState((prevState) => ({ contacts: prevState.contacts.concat([ contact ]) }));
	};

	componentDidMount() {
		try {
			const json = localStorage.getItem('contacts');
			const contacts = JSON.parse(json);

			if (contacts) {
				this.setState(() => ({ contacts }));
			}
		} catch (error) {
			// nothing
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.contacts.length !== this.state.contacts.length) {
			const json = JSON.stringify(this.state.contacts);
			localStorage.setItem('contacts', json);
		}
	}

	render() {
		let subtitle = 'Store Contact Info With Ease';
		return (
			<div>
				<Header subtitle={subtitle} />
				<Contacts contacts={this.state.contacts} />
				<AddContact handleAddContact={this.handleAddContact} />
			</div>
		);
	}
}
