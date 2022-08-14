import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';
import React, {useState} from 'react';

// This component is used for individual Expense item 

const ExpenseItem = (props) => {

  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle('Updated');
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">Rs {props.amount}</div>
      <button className="btn" onClick={clickHandler}>Change Title</button>
    </Card>
  );
}
export default ExpenseItem;
