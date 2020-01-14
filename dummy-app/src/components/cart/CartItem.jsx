import React from 'react';
import styled from '@emotion/styled';

const Item = styled.div((props) => ({
	borderBottom: '1px solid #EFEFEF',
	padding: '18px 0',
	height: '75px',
	[`img`]: {
		width: '30%',
		border: '1px solid #EFEFEF',
		float: 'left',
		marginRight: '8px'
	},
	[`:hover`]: { cursor: 'pointer' }
}));

const ItemText = styled.div((props) => ({
	height: '75px',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-around',
	fontSize: '15px',
	letterSpacing: '0.04em',
	margin: 0,
	padding: 0,
	['p']: { margin: 0 }
}));

const CartItem = (props) => {
	const { data } = props;

	// use the keys in the DUMMY_DATA objects to render a nice CartItem here
	return (
		<Item>
			<img src={data.thumbnail} alt={'Thumbnail image of ' + data.title + ' by ' + data.artist} />
			<ItemText>
				<p>{data.title}</p>
				<p>{data.artist}</p>
				<p style={{ textAlign: 'right' }}>{data.price}</p>
			</ItemText>
		</Item>
	);
};

export default CartItem;
