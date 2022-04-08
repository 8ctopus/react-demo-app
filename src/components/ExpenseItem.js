import "./ExpenseItem.css";

export default function ExpenseItem(props) {
  return <div className="expense-item">
    <div className="expense-item__date">{props.date.toISOString()}</div>
    <div className="expense-item__description">{props.description}</div>
    <div className="expense-item__amount">{props.amount}</div>
  </div>;
}
