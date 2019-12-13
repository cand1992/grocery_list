import React from 'react';

const styles = {
	added: {
		color: 'red',
		textDecoration: 'line-through'
	}
}

const Added = ({ id, name, price, added, handleAdded }) => (
	<li
		style={ added ? { ...styles.added } : {} }
		onClick={() => handleAdded(id)}
	>
		{ name } - ${ price }
	</li>
)

export default Added;