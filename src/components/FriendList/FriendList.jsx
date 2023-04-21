import PropTypes from 'prop-types'

import { Friends } from './FriendList.styled'
import {Friend}from './FriendListItem/FriendListItem'


export const FriendList = ({ friends }) => {
	
	return (
		<Friends >
			{friends.map(({ avatar, name, isOnline, id }) => (
				<Friend key={id} 
					id={id}
					avatar={avatar}
					name={name}
					isOnline={isOnline}>
				</Friend>
			))}

		</Friends >)
}

FriendList.propTypes = {
	friends: PropTypes.arrayOf(
		PropTypes.exact({
		avatar: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		isOnline: PropTypes.bool.isRequired,
		id: PropTypes.number.isRequired,
	}))
	
}




	


