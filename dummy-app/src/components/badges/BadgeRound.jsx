import styled from '@emotion/styled';

const BadgeRound = styled.div((props) => ({
	backgroundColor: props.theme.colors.primary,
	height: '13px',
	width: '13px',
	borderRadius: 20,
	position: 'absolute',
	top: '-0.95em',
	right: '-0.6em',
	border: '2px solid white',
	fontFamily: 'EB Garamond',
	fontSize: '10px',
	textAlign: 'center',
	lineHeight: 1.7,
	color: 'white'
}));

export default BadgeRound;
