import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import ExpenseOutput from "../components/Expense/ExpenseOutput";
import { useSelector } from "react-redux";

const RecentExpenses = ({ route, navigation }) => {
  const expenses = useSelector((state) => state.expenses.expenses);
  console.log(expenses, "from recent");
  return (
    <SafeAreaView style={styles.container}>
      <ExpenseOutput expenses={expenses} isRecent={true} />
    </SafeAreaView>
  );
};

export default RecentExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
