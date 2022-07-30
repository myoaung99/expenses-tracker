import React, { useLayoutEffect } from "react";
import { Text, View, Button, StyleSheet, SafeAreaView } from "react-native";
import ExpenseList from "../components/Expense/ExpenseList";
import ExpenseOutput from "../components/Expense/ExpenseOutput";
import ExpenseSummary from "../components/Expense/ExpenseSummary";
import HeaderButton from "../components/UI/HeaderButton";

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

const RecentExpenses = ({ route, navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderButton />,
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ExpenseOutput expenses={DUMMY_EXPENSES} isRecent={true} />
      <Button
        title="Show Modal"
        onPress={() => navigation.navigate("ManageExpense")}
      />
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
});
