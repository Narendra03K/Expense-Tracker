import Expenses from './Components/Expenses/Expenses';
import './App.css';
import NewExpense from './NewExpense/NewExpense';
import React, {useState} from 'react';

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Home Wifi",
    amount: 500,
    date: new Date(2022, 5, 11),
  },
  {
    id: "e2",
    title: "Bike Petrol",
    amount: 2500,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Tiffin",
    amount: 500,
    date: new Date(2022, 7, 13),
  },
  {
    id: "e4",
    title: "Electricity",
    amount: 500,
    date: new Date(2020, 4, 13),
  },
  {
    id: "e5",
    title: "Child Education",
    amount: 3000,
    date: new Date(2022, 3, 13),
  },
  {
    id: "e6",
    title: "Sports Wear",
    amount: 700,
    date: new Date(2020, 8, 13),
  },
  {
    id: "e6",
    title: "Travelling",
    amount: 1200,
    date: new Date(2021, 8, 13),
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
