import FriendsListItem from "./FriendListItem.jsx"
import css from "./FriendsList.module.css"

const FriendsList = ({friends}) => {
  return (
	<ul className={css.friendsList}>
		{friends.map(({ avatar, name, isOnline, id }) => { return <li key={id}><FriendsListItem avatar={avatar} name={name} status={isOnline} /></li>})}
</ul>
  )
}

export default FriendsList