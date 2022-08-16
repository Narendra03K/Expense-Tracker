import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpensesChart from './ExpensesChart';
import ExpensesList from "./ExpensesList";

// This component is rendering the list of Expenses

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022');
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }
    //  logic to filter the content by year 
    const filteredExpenses = props.items.filter(expense => {
      return expense.date.getFullYear().toString() === filteredYear;   
    }); 
  return (
    <Card className="expenses">

    {/* we are also doing the 2 wy binding here 
    instead of hardcoding we are displaying the eelements here dynamically  */}

      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
      </Card>
  );
}

export default Expenses;