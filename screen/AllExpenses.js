import React from "react";
import {StyleSheet, SafeAreaView } from "react-native";
import {useSelector} from "react-redux";
import ExpenseOutput from "../components/Expense/ExpenseOutput";

const RecentExpenses = () => {
  const expenses = useSelector(state=>state.expenses.expenses)
  return (
    <SafeAreaView style={styles.container}>
      <ExpenseOutput expenses={expenses} isRecent={false} />
    </SafeAreaView>
  );
};

export default RecentExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
