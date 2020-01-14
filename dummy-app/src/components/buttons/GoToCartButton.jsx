import styled from '@emotion/styled';

const GoToCartButton = styled.div((props) => ({
	backgroundColor: props.theme.colors.primary,
	width: '90%',
	height: '45px',
	borderRadius: '5px',
	border: '2px solid white',
	fontFamily: 'EB Garamond',
	fontSize: '16px',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	textTransform: 'uppercase',
	color: 'white'
}));

export default GoToCartButton;
