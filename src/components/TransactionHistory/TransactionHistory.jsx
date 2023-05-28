import PropTypes, { arrayOf } from 'prop-types';
import { Transaction } from './Transaction/Transaction'
import css from './TransactionHistory.module.css'

export const TransactionHistory = ({ items }) => (
  <table className={css.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
    </thead>
   
    <tbody>
      {items && items.map(({ id, type, amount, currency }, index) => (
        <Transaction key={id} 
          type = {type}
          amount = {amount}
          currency ={currency} 
          index = {index}

          
        /> 
      ))}
    
  </tbody>
</table>
)

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired
}
