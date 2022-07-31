import React from "react";
import { View, StyleSheet } from "react-native";
import ExpenseSummary from "./ExpenseSummary";
import ExpenseList from "./ExpenseList";
import { GlobalStyles } from "../../constants/styles";

const ExpenseOutput = ({ isRecent, expenses }) => {
  let expenseList = [...expenses];

  if (isRecent) {
    const today = new Date().getDate();
    const lastWeek = today - 7;

    expenseList = expenseList.filter((expense) => {
      const date = new Date(expense.date).getDate();
      return date > lastWeek;
    });
  }

  return (
    <View style={styles.container}>
      <ExpenseSummary isRecent={isRecent} expenses={expenseList} />
      <ExpenseList expenses={expenseList} />
    </View>
  );
};

export default ExpenseOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
