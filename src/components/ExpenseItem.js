import "./ExpenseItem.css";

export default function ExpenseItem() {
  return <div className="expense-item">
    <div className="expense-item__date">Date</div>
    <div className="expense-item__description">Description</div>
    <div className="expense-item__amount">Amount</div>
  </div>;
}
