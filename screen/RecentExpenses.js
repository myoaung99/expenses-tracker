import React, { useEffect } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import ExpenseOutput from "../components/Expense/ExpenseOutput";
import { useSelector, useDispatch } from "react-redux";
import { setInitialExpenses } from "../store/expenses-slice";
import { getDateMinusDays } from "./../util/date";
import { fetchExpensesServer } from "./../util/http-request";

const RecentExpenses = () => {
  const expenses = useSelector((state) => state.expenses.expenses);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetch() {
      const expenses = await fetchExpensesServer();
      dispatch(setInitialExpenses({ expenses }));
    }

    fetch();
  }, []);

  const expenseList = expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return (
      new Date(expense.date) >= date7DaysAgo && new Date(expense.date) <= today
    );
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
