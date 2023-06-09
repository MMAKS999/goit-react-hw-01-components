import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItemItem';

export const FriendList = ({ friends }) => (
  <ul className="friend-list">
     {friends && friends.map(({avatar, name, isOnline, id}) => (
       <FriendListItem
        key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}
       />
))}
</ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
}