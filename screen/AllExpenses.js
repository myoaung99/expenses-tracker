import React from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import ExpenseList from "../components/Expense/ExpenseList";
import ExpenseOutput from "../components/Expense/ExpenseOutput";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    name: "Book",
    amount: 33.3,
    date: new Date(2022, 7, 2),
  },
  {
    id: "e2",
    name: "Another Book",
    amount: 33.3,
    date: new Date(2022, 6, 27),
  },
  {
    id: "e3",
    name: "Yet Another Book",
    amount: 33.3,
    date: new Date(2022, 7, 1),
  },
  {
    id: "e4",
    name: "You guessed it",
    amount: 33.3,
    date: new Date(2022, 6, 25),
  },
];

const RecentExpenses = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ExpenseOutput expenses={DUMMY_EXPENSES} isRecent={false} />
    </SafeAreaView>
  );
};

export default RecentExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 16,
  },
  totalContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: "black",
  },
  totalText: {
    color: "white",
  },
});
