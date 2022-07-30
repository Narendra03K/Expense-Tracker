import ExpenseItem from './Components/ExpenseItem';
import './App.css';

function App() {
  const expenses = [
    {
      title: "Home Wifi",
      amount: 500,
      date: new Date(2022, 7, 11),
    },
    {
      title: "Bike Petrol",
      amount: 3500,
      date: new Date(2022, 7, 12),
    },
    {
      title: "Tiffin",
      amount: 3000,
      date: new Date(2022, 7, 13),
    },
  ];
  return (
    <div>
      {/* <h2>Lets get Started!</h2> */}
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
    </div>
  );
}

export default App;
