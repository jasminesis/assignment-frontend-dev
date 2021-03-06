import styled from '@emotion/styled';

const GoToCartButton = styled.div((props) => ({
	backgroundColor: props.theme.colors.primary,
	width: '100%',
	margin: 0,
	height: '45px',
	borderRadius: '5px',
	fontFamily: 'EB Garamond',
	letterSpacing: ' 0.2em',
	fontSize: '15px',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	textTransform: 'uppercase',
	color: 'white',
	[`:hover`]: { opacity: 0.8, cursor: 'pointer' }
}));

export default GoToCartButton;
