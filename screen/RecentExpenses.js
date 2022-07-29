import React from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import ExpenseList from "../components/Expense/ExpenseList";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    name: "Book",
    amount: 33.3,
    date: new Date(2022, 4, 2),
  },
  {
    id: "e2",
    name: "Another Book",
    amount: 33.3,
    date: new Date(2022, 4, 2),
  },
  {
    id: "e3",
    name: "Yet Another Book",
    amount: 33.3,
    date: new Date(2022, 4, 2),
  },
  {
    id: "e4",
    name: "You guessed it",
    amount: 33.3,
    date: new Date(2022, 4, 2),
  },
];

const RecentExpenses = () => {
  const total = DUMMY_EXPENSES.map((expense) => expense.amount).reduce(
    (curr, amount) => curr + amount,
    0
  );
  return (
    <SafeAreaView style={styles.container}>
      <Text>Total: {total}</Text>
      <ExpenseList expenses={DUMMY_EXPENSES} />
    </SafeAreaView>
  );
};

export default RecentExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
});
