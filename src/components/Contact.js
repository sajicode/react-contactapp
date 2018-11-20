import React from 'react';

const Contact = (props) => (
	<div>
		<tr>
			<td>{props.contactCount}</td>
			<td>{props.contactName}</td>
			<td>{props.contactEmail}</td>
			<td>{props.contactPhone}</td>
		</tr>
		<button>Delete</button>
	</div>
);

export default Contact;
