import React from "react";
import { GlobalStyles } from "./../../constants/styles";
import { View, Text, StyleSheet } from "react-native";

const ExpenseSummary = ({ isRecent, expenses }) => {
  let summaryText = "Last 7 Days";

  if (!isRecent) summaryText = "All";

  let total = expenses
    .map((expense) => expense.amount)
    .reduce((curr, amount) => curr + amount, 0)
    .toFixed(2);

  return (
    <View style={styles.summaryContainer}>
      <Text style={styles.period}>{summaryText}</Text>
      <Text style={styles.total}>{total} MMK</Text>
    </View>
  );
};

export default ExpenseSummary;

const styles = StyleSheet.create({
  summaryContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    paddingVertical: 7,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: GlobalStyles.colors.primary50,
  },
  period: {
    color: GlobalStyles.colors.primary400,
  },
  total: {
    fontWeight: "bold",

    color: GlobalStyles.colors.primary500,
  },
});
