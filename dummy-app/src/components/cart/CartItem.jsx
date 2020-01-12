import React from 'react';

const CartItem = (props) => {
	const { data } = props;
	console.log(data);

	// use the keys in the DUMMY_DATA objects to render a nice CartItem here
	return (
		<div>
			{data.title}
			<img src={data.thumbnail} alt={'Thumbnail image of ' + data.title + ' by ' + data.artist} />
			<li>{data.artist}</li>
			<li>{data.price}</li>
		</div>
	);
};

export default CartItem;
