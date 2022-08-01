import Expenses from './Components/Expenses';
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
      <h2 id="heading">Expense Tracker</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
