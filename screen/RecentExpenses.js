import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import ExpenseOutput from "../components/Expense/ExpenseOutput";
import { useSelector } from "react-redux";
import { getDateMinusDays } from "./../util/date";

const RecentExpenses = () => {
  const expenses = useSelector((state) => state.expenses.expenses);

  const expenseList = expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return new Date(expense.date) >= date7DaysAgo && expense.date <= today;
  });

  return (
    <SafeAreaView style={styles.container}>
      <ExpenseOutput
        expenses={expenseList}
        isRecent={true}
        fallbackText="No expenses registered for the last 7 days."
      />
    </SafeAreaView>
  );
};

export default RecentExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
