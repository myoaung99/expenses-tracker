import React from "react";
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
      <Text style={styles.summary}>{summaryText}</Text>
      <Text style={styles.summary}>{total} MMK</Text>
    </View>
  );
};

export default ExpenseSummary;

const styles = StyleSheet.create({
  summaryContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: "black",
  },
  summary: {
    color: "white",
  },
});
