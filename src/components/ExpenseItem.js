import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

export default function ExpenseItem(props) {
  function onClickHandler() {
    console.log("clicked");
  }

  return <div className="expense-item">
    <ExpenseDate date={ props.date } />
    <div className="expense-item__description">{props.description}</div>
    <div className="expense-item__amount">{props.amount}</div>
    <button onClick={onClickHandler} />
  </div>;
}
