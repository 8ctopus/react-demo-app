import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

export default function ExpenseItem(props) {
  return <div className="expense-item">
    <ExpenseDate date={ props.date } />
    <div className="expense-item__description">{props.description}</div>
    <div className="expense-item__amount">{props.amount}</div>
  </div>;
}
