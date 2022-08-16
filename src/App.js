import Expenses from './Components/Expenses/Expenses';
import './App.css';
import NewExpense from './NewExpense/NewExpense';
import React, {useState} from 'react';

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Home Wifi",
    amount: 500,
    date: new Date(2022, 7, 11),
  },
  {
    id: "e2",
    title: "Bike Petrol",
    amount: 3500,
    date: new Date(2022, 7, 12),
  },
  {
    id: "e3",
    title: "Tiffin",
    amount: 3000,
    date: new Date(2022, 7, 13),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = expense => {
    setExpenses(
      prevExpenses => {
        return [expense, ...prevExpenses]
      }
    )
  }
  return (
    <div>
      <h2 id="heading">Expense Tracker</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
