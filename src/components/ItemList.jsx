import React from 'react';
import Item from './Item';

const ItemList = ({ items }) => {

    return (
        <div className="container mb-4 mt-3">
            <div className="row d-flex text-center justify-content-center">
                {items.map(item => <Item key={item.id} item={item} />)}
            </div>
        </div>
    )
}

export default ItemList;