import React, { useState } from 'react';
import styled from '@emotion/styled';

import BadgeRound from '../badges/BadgeRound';
import CartItem from './CartItem';
import IconCart from '../svg/IconCart';
import Popover from '../popups/Popover';
import GoToCartButton from '../buttons/GoToCartButton';

// normally this data would come from our API
// in this assignment, we will assume that these two items are in the cart
const DUMMY_DATA = [
	{
		id: 1,
		title: 'Desire',
		artist: 'Prakornpatara Janthakhaisorn',
		thumbnail: 'https://ik.imagekit.io/theartling/p/artworks/PJanth_Desire04.jpg?tr=w-255,h-255,bg-FFFFFF',
		price: 'S$ 1,352'
	},
	{
		id: 2,
		title: 'Colours of Life 2',
		artist: 'WH Thean',
		thumbnail:
			'https://ik.imagekit.io/theartling/p/products/Product/7a4f1965f92c411cba3c1b3c83398830.JPG?tr=w-255,h-255,bg-FFFFFF',
		price: 'S$ 2,028'
	}
];

const data = DUMMY_DATA.map((item) => <CartItem data={item} key={item.id} />);

const CartIconContainer = styled.div((props) => ({
	position: 'relative'
}));

const CartIcon = () => {
	// this is a React hook. If you don't know about hooks yet, don't worry about
	// this.
	const [ isActive, setIsActive ] = useState(false);

	return (
		<CartIconContainer>
			<div onClick={() => setIsActive(!isActive)}>
				<IconCart />
				<BadgeRound>2</BadgeRound>
			</div>
			<Popover isVisible={true} onClose={() => setIsActive(false)}>
				<p
					style={{
						color: 'rgb(76, 76, 76)',
						textAlign: 'center',
						paddingBottom: '1.5em',
						borderBottom: '1px solid rgb(200, 175, 106)',
						marginBottom: 0
					}}>
					{data.length} items in your cart
				</p>
				{/* 
            Tip: .map() over the DUMMY_DATA here and mount <CartItem data={item} /> components 
          */}
				{data}
				<p>Subtotal</p>
				<GoToCartButton>Go to Cart</GoToCartButton>
			</Popover>
		</CartIconContainer>
	);
};

export default CartIcon;
