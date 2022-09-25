import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  
  const submitExpenseHandler = addExpenseData => {
    const expenseData = {
      ...addExpenseData,
      id: Math.random().toLocaleString(),
    }
    props.onAddExpense(expenseData);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSubmitExpense={submitExpenseHandler}/>
    </div>
  )
};

export default NewExpense;
