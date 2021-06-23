import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import styled from 'styled-components';

export default makeStyles(theme => ({
	popoverContent: {
		// maxWidth: '10rem',
		// width: '100%',

		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: 6,
		paddingBottom: 7,
	},
	userDetails: {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
		width: '100%',
		paddingLeft: 7
	},
	profileName: {
		color: '#fff',
		marginRight: 5,
	},
	name: {
		textAlign: 'left',
	},
	emailContainer: {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
		width: '100%',
		paddingLeft: 10,
		borderBottom: '1px solid rgba(200, 200, 200, 0.7)'
	},
	email: {
		textAlign: 'left',
		// paddingLeft: 9,
		// color: 'purple[500]'
	},
	profilePicture: {
		color: '#fff',
		marginRight: 5,
		backgroundColor: 'rgba(200, 200, 200, 0.2)',
		borderRadius: '50%',
		border: '1px solid rgba(200, 200, 200, 0.5)',
		width: '1.75rem',
		height: '1.7rem',
	},
	picture: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		// backgroundColor: 'rgba(63,81,181, 0.3)',
		borderRadius: '50%',
		border: '1px solid rgba(63,81,181, 0.75)',
		width: '1.45rem',
		height: '1.4rem',
		marginRight: 5,
		paddingTop: 3,
		marginLeft: 3,
		
	},
	logout: {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
		textTransform: 'none',
		cursor: 'pointer',
		width: '100%',
		paddingLeft: 10,
		borderRadius: 5,
		'&:hover': {
			backgroundColor: 'rgba(200, 200, 200, 0.3)'
		}
	},
	
}));