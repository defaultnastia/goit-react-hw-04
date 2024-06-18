import css from "./FriendListItem.module.css"

const FriendsListItem = ({ avatar, name, status }) => {
  return (
	<div className={css.friendCard}>
		<img src={avatar} alt="Avatar" width="48px" />
		<p className={css.name}>{name}</p>
		<p className={status ? css["online"] : css["offline"]}></p>
	</div>
  )
}

export default FriendsListItem