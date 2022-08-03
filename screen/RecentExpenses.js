import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import ExpenseOutput from "../components/Expense/ExpenseOutput";
import { useSelector, useDispatch } from "react-redux";
import { setInitialExpenses } from "../store/expenses-slice";
import { getDateMinusDays } from "./../util/date";
import { fetchExpensesServer } from "./../util/http-request";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";

const RecentExpenses = () => {
  const [isFetching, setIsFetching] = useState();
  const [isError, setIsError] = useState(false);
  const expenses = useSelector((state) => state.expenses.expenses);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetch() {
      setIsFetching(true);
      try {
        const expenses = await fetchExpensesServer();
        dispatch(setInitialExpenses({ expenses }));
      } catch (error) {
        setIsError(true);
      }
      setIsFetching(false);
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

  if (isError && !isFetching) {
    return (
      <ErrorOverlay
        message="Something went wrong. Please try again later"
        onConfirm={() => setIsError(false)}
      />
    );
  }

  if (isFetching) {
    return <LoadingOverlay />;
  }

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
