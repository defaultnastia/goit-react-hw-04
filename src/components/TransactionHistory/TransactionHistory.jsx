import Transaction from "./Transaction.jsx";
import css from "./TransactionHistory.module.css"

const TransactionHistory = ({transactions}) => {
  return (
    <table className={css.transactionsTable}>
      
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
			{transactions.map(transaction => { return <tr key={transaction.id}><Transaction {...transaction} /></tr> } )}
  </tbody>
</table>
  )
}

export default TransactionHistory;

