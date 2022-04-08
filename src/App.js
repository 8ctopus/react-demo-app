import './App.css';
import ExpenseItem from './components/ExpenseItem.js';

function App() {
  return (
    <div className="App">
      <h1>Let's get started!</h1>
      <ExpenseItem date={ new Date(2022,3,4) } description="car insurance" amount="200" />
      <ExpenseItem date={ new Date(2022,4,4) } description="telephone" amount="100" />
    </div>
  );
}

export default App;
