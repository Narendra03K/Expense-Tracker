import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

// This component is used for individual Expense item 

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date = {props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">Rs {props.amount}</div>
    </Card>
  );
}
export default ExpenseItem;
