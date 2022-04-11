import {useState} from 'react';
import './App.css';
import ExpenseItem from './components/ExpenseItem.js';
import NewExpense from './components/NewExpense.js';

const defaultExpenses = [{
  date: new Date('2022-3-4'),
  description: 'car insurance',
  amount: 200,
}, {
  date: new Date('2022-4-4'),
  description: 'telephone',
  amount: 100,
}, {
  date: new Date('2022-1-1'),
  description: 'champagne',
  amount: 50,
}];

export default function App() {
  const [expenses, setExpenses] = useState(defaultExpenses);

  return (
    <div className="App">
      {
        expenses.map(expense => <ExpenseItem date={expense.date} description={expense.description} amount={expense.amount} />)
      }
      <NewExpense />
    </div>
  );
}
