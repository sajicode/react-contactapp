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
	};

	render() {
		return (
			<div>
				{this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.handleAddContact}>
					<input type="text" name="name" placeholder="Name" />
					<br />
					<input type="email" name="email" placeholder="Email" />
					<br />
					<input type="number" name="phone" placeholder="Phone Number" />
					<br />
					<button>Add Contact</button>
				</form>
			</div>
		);
	}
}
