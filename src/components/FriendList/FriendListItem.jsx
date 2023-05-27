import css from 'components/FriendList/FriendListItem.module.css';
// import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline, id }) => (

  <li className={css.item} key={id}>
    <span className={`${css.status} ${isOnline ? css.statusOn : ''}` }> </span>
    <img className="avatar" src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
</li>
  
);

// FriendListItem.propTypes = {
//   avatar: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   isOnline: PropTypes.bool.isRequired,
//   id: PropTypes.number.isRequired
// }