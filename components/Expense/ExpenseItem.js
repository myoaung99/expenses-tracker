import React from "react";
import { GlobalStyles } from "./../../constants/styles";
import { Text, View, StyleSheet } from "react-native";
import { getFormattedDate } from "../../util/date";

const ExpenseItem = ({ expense }) => {
  return (
    <View style={styles.item}>
      <View>
        <Text style={styles.itemText}>{expense.name}</Text>
        <Text style={styles.itemDate}>
          {getFormattedDate(new Date(expense.date))}
        </Text>
      </View>
      <Text style={styles.itemAmount}>{expense.amount.toFixed(2)}</Text>
    </View>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  item: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: GlobalStyles.colors.primary400,
  },
  itemText: {
    color: "white",
    fontWeight: "bold",
    marginBottom: 3,
  },

  itemAmount: {
    color: GlobalStyles.colors.primary400,
    textAlign: "center",
    fontWeight: "bold",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    minWidth: "30%",
    maxWidth: "40%",
  },
  itemDate: {
    fontSize: 10,
    color: "white",
  },
});
