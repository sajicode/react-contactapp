import React from 'react';
import Contact from './Contact';

const Contacts = (props) => (
	<div>
		<div>
			<h3>Your Contacts</h3>
		</div>

		{props.contacts.length === 0 && <p>Add a Contact to get Started</p>}
		{props.contacts.map((contact, index) => (
			<Contact
				key={contact.name}
				contactCount={index + 1}
				contactName={contact.name}
				contactEmail={contact.email}
				contactPhone={contact.phone}
			/>
		))}
	</div>
);

export default Contacts;
