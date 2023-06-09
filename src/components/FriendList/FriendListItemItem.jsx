import css from 'components/FriendList/FriendListItem.module.css';
import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline}) => (

  <li className={css.item}>
    <span className={`${css.status} ${isOnline ? css.statusOn : ''}` }> </span>
    <img className="avatar" src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
</li>
  
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}