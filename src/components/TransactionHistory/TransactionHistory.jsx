import PropTypes from "prop-types";
import css from './Transaction.module.css'

const TransactionHistory = ({ items }) => (
    <table className={css.transaction_history}>
        <thead className={css.head}>
            <tr>
                <th className={css.head_item}>Type</th>
                <th className={css.head_item}>Amount</th>
                <th className={css.head_item}>Currency</th>
            </tr>
        </thead>
        {items.map(({ id, type, amount, currency }) => (
            
        <tbody key={id} className={css.body_list}>
            <tr className={css.body_item}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
            </tr>
                </tbody>
                
        ))}
    </table>
);



TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;