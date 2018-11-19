import React from 'react';
import Header from './Header';
import AddContact from './AddContact';

export default class ContactApp extends React.Component {
	state = {
		contacts: []
	};

	handleAddContact = (contact) => {
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

		console.log(duplicates[lastIndex]);
		console.log(duplicates);
	};
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
				<AddContact handleAddContact={this.handleAddContact} />
			</div>
		);
	}
}
