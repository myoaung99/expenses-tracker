import React from "react";
import { Text, View, StyleSheet } from "react-native";

const ExpenseItem = ({ expense }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>{expense.name}</Text>
      <Text style={styles.itemText}>{expense.amount} MMK</Text>
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
    marginVertical: 3,

    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: "black",
  },
  itemText: {
    color: "white",
  },
});
