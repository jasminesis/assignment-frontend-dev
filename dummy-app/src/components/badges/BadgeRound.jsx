import styled from '@emotion/styled';

const BadgeRound = styled.div((props) => ({
	backgroundColor: props.theme.colors.primary,
	height: '13px',
	width: '13px',
	borderRadius: 20,
	position: 'absolute',
	top: '-10px',
	right: '-8px',
	border: '2px solid white',
	fontFamily: 'EB Garamond',
	fontSize: '10px',
	textAlign: 'center',
	color: 'white',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',

}));

export default BadgeRound;
