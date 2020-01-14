import React from 'react';
const imgStyle = {
	width: '30%',
	border: '1px solid #EFEFEF',
	float: 'left',
	margin: '0 8px 0 6px'
};
const pStyle = {
	margin: 0,
	padding: 0,
	fontSize: '15px',
	letterSpacing: '0.04em'
};
const priceStyle = {
	margin: 0,
	padding: 0,
	fontSize: '15px',
	letterSpacing: '0.03em',
	textAlign: 'right'
};
const divStyle = {
	borderBottom: '1px solid #EFEFEF',
	padding: '18px 0',
	height: '75px'
};

const CartItem = (props) => {
	const { data } = props;
	console.log(data);

	// use the keys in the DUMMY_DATA objects to render a nice CartItem here
	return (
		<div style={divStyle}>
			<img
				src={data.thumbnail}
				alt={'Thumbnail image of ' + data.title + ' by ' + data.artist}
				style={imgStyle}
			/>
			<p style={pStyle}>{data.title}</p>
			<p style={pStyle}>{data.artist}</p>
			<p style={priceStyle}>{data.price}</p>
		</div>
	);
};

export default CartItem;
