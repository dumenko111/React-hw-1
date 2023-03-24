import PropTypes from 'prop-types';

const FriendsListItem = ({ avatar, name, isOnline, id }) => (
  <li key={id} className="item">
    <span className="status"></span>
    <img className="avatar" src={avatar} alt={name} width="48" />
    <p className="name">{name}</p>
  </li>
);

export default FriendsListItem;

FriendsListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};
