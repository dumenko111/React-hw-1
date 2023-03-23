import FriendsListItem from "./FriendListItem";


const FriendList = ({ friends }) => (
  <ul className="friend-list">
    {friends.map(({ avatar, name, isOnline, id }) => (
      
      <FriendsListItem
        avatar={avatar}
        name={name}
        isOnline={isOnline}
        id={id} />
    ))}
</ul>)

export default FriendList;