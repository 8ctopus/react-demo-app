import {useState} from 'react';
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

export default function ExpenseItem(props) {
  const [description, setDescription] = useState(props.description);

  function onClickHandler() {
    setDescription("clicked");
  }

  return <div className="expense-item">
    <ExpenseDate date={ props.date } />
    <div className="expense-item__description">{description}</div>
    <div className="expense-item__amount">{props.amount}</div>
    <button onClick={onClickHandler} />
  </div>;
}
