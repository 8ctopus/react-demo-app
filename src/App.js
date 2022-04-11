import {useState} from 'react';
import './App.css';
import ExpenseItem from './components/ExpenseItem.js';
import NewExpense from './components/NewExpense.js';

const defaultExpenses = [{
  id: '1',
  date: new Date('2022-3-4'),
  description: 'car insurance',
  amount: 200,
}, {
  id: '2',
  date: new Date('2022-4-4'),
  description: 'telephone',
  amount: 100,
}, {
  id: '3',
  date: new Date('2022-1-1'),
  description: 'champagne',
  amount: 50,
}];

export default function App() {
  const [expenses, setExpenses] = useState(defaultExpenses);

  const addExpenseHandler = (expense) => {
    console.log(expense);

    setExpenses((prevExpenses) => {
      return [
        expense,
        ...prevExpenses,
      ];
    });
  };

  return (
    <div className="App">
      {
        expenses.map(expense => <ExpenseItem key={expense.id} date={expense.date} description={expense.description} amount={expense.amount} />)
      }
      <NewExpense onCreateExpense={addExpenseHandler} />
    </div>
  );
}
