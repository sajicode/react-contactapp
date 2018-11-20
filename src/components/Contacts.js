import React from 'react';
import Contact from './Contact';

const Contacts = (props) => (
	<div>
		<div className="widget-header">
			<h3 className="widget-header__title">Your Contacts</h3>
		</div>

		{props.contacts.length === 0 && <p className="widget-message">Add a Contact to get Started</p>}
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Email</th>
					<th>Phone Number</th>
				</tr>
			</thead>
			<tbody>
				{props.contacts.map((contact, index) => (
					<Contact
						key={index}
						contactCount={index + 1}
						contactName={contact.name}
						contactEmail={contact.email}
						contactPhone={contact.phone}
						handleDeleteContact={props.handleDeleteContact}
					/>
				))}
			</tbody>
		</table>
	</div>
);

export default Contacts;
