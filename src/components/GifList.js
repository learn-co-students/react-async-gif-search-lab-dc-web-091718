import React from 'react';

const GifList = (props) => {
    return (
        <li key={props.gif.id}>
            <img src={props.gif.images.original.url} alt={props.gif.id} />
        </li>
    )};

export default GifList;