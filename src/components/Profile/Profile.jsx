import css from './Profile.module.css';


const Profile = ({user}) => {
    return <div className={css.profile}>
  <div className={css.description}>
    <img width="150"
      src={user.avatar}
      alt="User avatar"
      className={css.avatar}
    />
    <p className={css.description_item}>{user.username}</p>
    <p className={css.description_item}>@{user.tag}</p>
    <p className={css.description_item}>{user.location}</p>
  </div>

  <ul className={css.stats}>
    <li>
      <span className={css.label}>Followers</span>
      <span className="quantity">{user.stats.followers}</span>
    </li>
    <li>
      <span className={css.label}>Views</span>
      <span className="quantity">{user.stats.views}</span>
    </li>
    <li>
      <span className={css.label}>Likes</span>
      <span className="quantity">{user.stats.likes}</span>
    </li>
  </ul>
</div>
};

export default Profile;