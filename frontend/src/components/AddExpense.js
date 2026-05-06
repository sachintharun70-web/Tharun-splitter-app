import React, { useEffect, useState } from "react";
import axios from "axios";

function AddExpense({ refreshExpenses }) {
  const [users, setUsers] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [paidBy, setPaidBy] = useState("");
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/users/");
      setUsers(res.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleParticipantChange = (id) => {
    if (participants.includes(id)) {
      setParticipants(participants.filter((item) => item !== id));
    } else {
      setParticipants([...participants, id]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://127.0.0.1:8000/api/expenses/", {
        description: description,
        amount: amount,
        paid_by: paidBy,
        participants: participants,
        split_type: "equal",
      });

      alert("Expense Added Successfully");

      refreshExpenses();

      setDescription("");
      setAmount("");
      setPaidBy("");
      setParticipants([]);
    } catch (error) {
      console.error("Error adding expense:", error);
      alert("Failed to add expense");
    }
  };

  return (
    <div className="container">
      <h2>Add Expense</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Expense Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />

        <select
          value={paidBy}
          onChange={(e) => setPaidBy(e.target.value)}
          required
        >
          <option value="">Select Paid By</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>

        <h4>Select Participants</h4>
        {users.map((user) => (
          <div key={user.id}>
            <input
              type="checkbox"
              checked={participants.includes(user.id)}
              onChange={() => handleParticipantChange(user.id)}
            />
            <label>{user.name}</label>
          </div>
        ))}

        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default AddExpense;