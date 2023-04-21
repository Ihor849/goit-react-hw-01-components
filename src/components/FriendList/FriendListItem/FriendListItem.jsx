import PropTypes from 'prop-types'
import {FriendListItem,Avatar,Name,Status } from './FriendListItem.styled'

export const Friend = ({ avatar, name, isOnline, id }) => {
	
  return (
    <FriendListItem key={id}>
       <Status online={isOnline}>{isOnline}</Status>
  		<Avatar src={avatar} alt={name} width="48" />
  		<Name>{name}</Name>
		</FriendListItem>
  )
}

Friend.propTypes = {
	avatar: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		isOnline: PropTypes.bool.isRequired,
		id: PropTypes.number.isRequired,
	
}
