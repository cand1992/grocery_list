import React from 'react';
import Added from './Added'

const List = ({items, handleAdded}) => (
	<div>
		<ul>
			{ items.map( item => <Added key={item.id} {...item} handleAdded={handleAdded} />) }
		</ul>
	</div>
)

export default List;