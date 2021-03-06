import React from 'react';

export default class AddContact extends React.Component {
	state = {
		error: undefined
	};

	handleAddContact = (e) => {
		e.preventDefault();
		const contact = {};

		contact.name = e.target.elements.name.value.trim();
		contact.email = e.target.elements.email.value.trim();
		contact.phone = e.target.elements.phone.value.trim();

		const error = this.props.handleAddContact(contact);

		this.setState(() => ({ error }));

		if (!error) {
			e.target.elements.name.value = '';
			e.target.elements.email.value = '';
			e.target.elements.phone.value = '';
		}
	};

	render() {
		return (
			<div>
				{this.state.error && <p className="add-contact-error">{this.state.error}</p>}
				<form className="add-contact" onSubmit={this.handleAddContact}>
					<input type="text" name="name" placeholder="Name" className="add-contact__input" />
					<br />
					<input type="email" name="email" placeholder="Email" className="add-contact__input" />
					<br />
					<input type="number" name="phone" placeholder="Phone Number" className="add-contact__input" />
					<br />
					<button className="button">Add Contact</button>
				</form>
			</div>
		);
	}
}
