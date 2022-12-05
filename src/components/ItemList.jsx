import Item from './Item';
import React from 'react';

const ItemList = ({ items }) => {

    return (
        <div className="container mb-5">
            <div className="row d-flex text-center justify-content-center">
                {items.map(item => <Item key={item.id} item={item} />)}
            </div>
        </div>
    )
}

export default ItemList;