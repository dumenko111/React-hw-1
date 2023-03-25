import PropTypes from 'prop-types';
import css from './FriendList.module.css';

const FriendsListItem = ({ avatar, name, isOnline, id }) => (
  <li key={id} className={css.item}>
    <span className={isOnline ? css.status_green : css.status_red}></span>
    <img className="avatar" src={avatar} alt={name} width="48" />
    <p className={css.name}>{name}</p>
  </li>
);

export default FriendsListItem;

FriendsListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};
