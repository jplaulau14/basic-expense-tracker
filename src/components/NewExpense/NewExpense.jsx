import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const submitExpenseHandler = (addExpenseData) => {
    const expenseData = {
      ...addExpenseData,
      id: Math.random().toLocaleString(),
    };
    props.onAddExpense(expenseData);
  };

  const cancelExpenseHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSubmitExpense={submitExpenseHandler}
          onCancel={cancelExpenseHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
