import React from 'react';

const Contact = (props) => (
	<tr>
		<td>{props.contactCount}</td>
		<td>{props.contactName}</td>
		<td>{props.contactEmail}</td>
		<td>{props.contactPhone}</td>
		<td>
			<button
				onClick={(e) => {
					{
						props.handleDeleteContact(props.contactPhone);
					}
				}}
			>
				Delete
			</button>
		</td>
	</tr>
);

export default Contact;
