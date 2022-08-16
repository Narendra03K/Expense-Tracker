import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState} from "react";

// This component is rendering the list of Expenses

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }
    //  logic to filter the content by year 
    const filteredExpenses = props.items.filter(expense => {
      return expense.date.getFullYear().toString() === filteredYear;   
    });
  
  let expenseContent = <p id="para">No Expenses Found</p>;

  if (filteredExpenses.length > 0) {
    
      expenseContent = filteredExpenses.map(expense =>
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date} />) 
  } 
  return (
    <Card className="expenses">
      {/* we are also doing the 2 wy binding here 
      instead of hardcoding we are displaying the eelements here dynamically  */}

      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
     {expenseContent}
      </Card>
  );
}

export default Expenses;