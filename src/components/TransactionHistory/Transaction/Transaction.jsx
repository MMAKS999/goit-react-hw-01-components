import css from './Transaction.module.css'
import PropTypes from 'prop-types';

export const Transaction = ({type,amount,currency,index}) => (
  <tr className={index % 2 === 0 ? css.evenRow : css.oddRow}>
   <td>{type}</td>
   <td>{amount}</td>
   <td>{currency}</td>
  </tr>
)


Transaction.propTypes = {
   index: PropTypes.number.isRequired,
   type: PropTypes.string.isRequired,
   amount: PropTypes.string.isRequired,
   currency: PropTypes.string.isRequired,
}