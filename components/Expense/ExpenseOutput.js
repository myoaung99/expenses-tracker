import React from "react";
import { Text, View, StyleSheet } from "react-native";
import ExpenseSummary from "./ExpenseSummary";
import ExpenseList from "./ExpenseList";
import { GlobalStyles } from "../../constants/styles";

const ExpenseOutput = ({ isRecent, expenses, fallbackText }) => {
  let expenseList = [...expenses];

  if (isRecent) {
    const today = new Date().getDate();
    const lastWeek = today - 7;

    expenseList = expenseList.filter((expense) => {
      const date = new Date(expense.date).getDate();
      return date > lastWeek;
    });
  }

  let content = <Text style={styles.infoText}>{fallbackText}</Text>;

  if (expenses.length > 0) {
    content = <ExpenseList expenses={expenseList} />;
  }

  return (
    <View style={styles.container}>
      <ExpenseSummary isRecent={isRecent} expenses={expenseList} />
      {content}
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
  infoText: {
    color: "#ccc",
    textAlign: "center",
    marginTop: 30,
  },
});
