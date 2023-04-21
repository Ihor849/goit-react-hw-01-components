import PropTypes from 'prop-types'
import { FriendItem,Avatar,Name,Status } from './FriendItem.styled'

export const Friend = ({ avatar, name, isOnline, id }) => {
	
  return (
    <FriendItem>
       <Status Online={isOnline}>{isOnline}</Status>
  		<Avatar src={avatar} alt={name} width="48" />
  		<Name>{name}</Name>
		</FriendItem>
  )
}


