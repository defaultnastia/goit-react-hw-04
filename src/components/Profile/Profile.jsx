import css from "./Profile.module.css"

const Profile = ({ username, tag, location, avatar, stats }) => {

	return (<div className={css.profileContainer}>
  <div>
    <img
				className={css.avatar}
				src={avatar}
      alt="User avatar"
    />
			<p className={css.username}>{username}</p>
			<p className={css.tag}>{"@"+tag}</p>
			<p className={css.location}>{location}</p>
  </div>
		<ul className={css.statsList}>
    <li>
      <span>Followers</span>
				<span className={css.statsNumber}>{stats.followers}</span>
    </li>
    <li>
      <span>Views</span>
      <span className={css.statsNumber}>{stats.views}</span>
    </li>
    <li>
      <span>Likes</span>
      <span className={css.statsNumber}>{stats.likes}</span>
    </li>
  </ul>
  </div>)
  
}

// I changed props names so that json can be destructured, but if it was not allowed ===> another version of const Profile can be uncommented along with another const App in the App component.

// const Profile = ({ name, tag, location, image, stats }) => {
// 	return (<div className={css.profileContainer}>
//   <div>
//     <img
// 				className={css.avatar}
// 				src={image}
//       alt="User avatar"
//     />
// 			<p className={css.username}>{name}</p>
// 			<p className={css.tag}>{"@"+tag}</p>
// 			<p className={css.location}>{location}</p>
//   </div>
// 		<ul className={css.statsList}>
//     <li>
//       <span>Followers</span>
// 				<span className={css.statsNumber}>{stats.followers}</span>
//     </li>
//     <li>
//       <span>Views</span>
//       <span className={css.statsNumber}>{stats.views}</span>
//     </li>
//     <li>
//       <span>Likes</span>
//       <span className={css.statsNumber}>{stats.likes}</span>
//     </li>
//   </ul>
// </div>)
// }

export default Profile;