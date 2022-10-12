import React from 'react';
import Item from './Item';

const ItemsList = ({ items }) => {
	const itemsArray = items.map((item, index) => 
	<Item key={index} {...item} />);
	return <div>{itemsArray}</div>;
	
};

export default ItemsList;