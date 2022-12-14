import React from "react";
import { Text, View, StyleSheet } from "react-native";
import ExpenseSummary from "./ExpenseSummary";
import ExpenseList from "./ExpenseList";
import { GlobalStyles } from "../../constants/styles";

const ExpenseOutput = ({ isRecent, expenses, fallbackText }) => {
  let summaryText = "All";
  let content = <Text style={styles.infoText}>{fallbackText}</Text>;

  if (isRecent) {
    summaryText = "Last 7 days";
  }

  if (expenses.length > 0) {
    content = <ExpenseList expenses={expenses} />;
  }

  return (
    <View style={styles.container}>
      <ExpenseSummary summaryText={summaryText} expenses={expenses} />
      {content}
    </View>
  );
};

export default ExpenseOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  infoText: {
    color: "#ccc",
    textAlign: "center",
    marginTop: 30,
  },
});
