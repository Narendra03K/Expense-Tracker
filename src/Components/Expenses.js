import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

// This component is rendering the list of Expenses 

function Expenses(props) {
    return (
      <div className="expenses">
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
      </div>
    );
}

export default Expenses;