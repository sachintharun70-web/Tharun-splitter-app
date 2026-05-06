import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [refresh, setRefresh] = useState(false);

  const refreshExpenses = () => {
    setRefresh(!refresh);
  };

  return (
    <div>
      <Navbar />
      <AddExpense refreshExpenses={refreshExpenses} />
      <ExpenseList refresh={refresh} />
    </div>
  );
}

export default App;