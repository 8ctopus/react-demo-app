import './App.css';
import ExpenseItem from './components/ExpenseItem.js';
import NewExpense from './components/NewExpense.js';

export default function App() {
  const expenses = [{
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

  return (
    <div className="App">
      {
        expenses.map(expense => <ExpenseItem date={expense.date} description={expense.description} amount={expense.amount} />)
      }
      <NewExpense />
    </div>
  );
}
