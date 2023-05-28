import css from './Transaction.module.css'

export const Transaction = ({type,amount,currency,index}) => (
  <tr className={index % 2 === 0 ? css.evenRow : css.oddRow}>
   <td>{type}</td>
   <td>{amount}</td>
   <td>{currency}</td>
  </tr>
)