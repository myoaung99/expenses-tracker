import React from "react";
import ExpenseSummary from "./ExpenseSummary";
import ExpenseList from "./ExpenseList";

const ExpenseOutput = ({ isRecent, expenses }) => {
  let expenseList = [...expenses];

  if (isRecent) {
    const today = new Date().getDate();
    const lastWeek = today - 7;
    console.log(lastWeek.toString());

    expenseList = expenseList.filter((expense) => {
      const date = new Date(expense.date).getDate();
      return date > lastWeek;
    });
  }

  return (
    <>
      <ExpenseSummary isRecent={isRecent} expenses={expenseList} />
      <ExpenseList expenses={expenseList} />
    </>
  );
};

export default ExpenseOutput;
