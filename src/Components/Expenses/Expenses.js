import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";

// This component is rendering the list of Expenses

const Expenses = (props) =>{
    return (
      <Card className="expenses">
        <ExpenseItem
          title={props.items[0].title}
          date={props.items[0].date}
          amount={props.items[0].amount}
          />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        /> 
      </Card>
    );
}

export default Expenses;