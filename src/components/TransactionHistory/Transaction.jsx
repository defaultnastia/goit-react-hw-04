const Transaction = ({type, amount, currency}) => {
  return (
	<>
		<td>{type}</td>
        <td>{amount}</td>
		<td>{currency}</td>
	</>
  )
}

export default Transaction