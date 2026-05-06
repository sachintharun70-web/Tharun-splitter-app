import React, { useEffect, useState } from "react";
import axios from "axios";

function ExpenseList({ refresh }) {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetchExpenses();
  }, [refresh]);

  const fetchExpenses = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/expenses/");
      setExpenses(res.data);
    } catch (error) {
      console.error("Error fetching expenses:", error);
    }
  };

  return (
    <div className="container">
      <h2>Expense History</h2>

      {expenses.length === 0 ? (
        <p>No expenses added yet.</p>
      ) : (
        expenses.map((expense) => (
          <div key={expense.id} className="card">
            <h3>{expense.description}</h3>
            <p>
              <strong>Amount:</strong> ₹{expense.amount}
            </p>
            <p>
              <strong>Split Type:</strong> {expense.split_type}
            </p>

            <h4>Expense Splits</h4>
            <ul>
              {expense.splits.map((split) => (
                <li key={split.id}>
                  {split.user_name} owes ₹{split.amount_owed}
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
}

export default ExpenseList;