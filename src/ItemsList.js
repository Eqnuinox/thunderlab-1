import React from 'react';
import Item from './Item';

const ItemsList = ({items}) => {

    return <div>{items.map((item, index) => <Item key={index} infoTrack={item}/>)} </div>;

};

export default ItemsList;
