import React from 'react';

const CartItem = (props) => {
	const { data } = props;
	const item = data.map((el) => (
		<div>
			<img src={el.thumbnail} alt={'Thumbnail image of ' + el.title + ' by ' + el.artist} />
			<li>{el.title}</li>
			<li>{el.artist}</li>
			<li>{el.price}</li>
		</div>
	));
	// use the keys in the DUMMY_DATA objects to render a nice CartItem here
	return <div>{item}</div>;
};

export default CartItem;
