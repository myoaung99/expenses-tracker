import React, { useLayoutEffect } from "react";
import { Text, View, Button, StyleSheet, SafeAreaView } from "react-native";
import ExpenseOutput from "../components/Expense/ExpenseOutput";
import HeaderButton from "../components/UI/HeaderButton";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    name: "Book",
    amount: 323.3,
    date: new Date(2022, 7, 2),
  },
  {
    id: "e2",
    name: "Another Book",
    amount: 332.3,
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

const RecentExpenses = ({ route, navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ExpenseOutput expenses={DUMMY_EXPENSES} isRecent={true} />
    </SafeAreaView>
  );
};

export default RecentExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
