import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses }) => {
  const renderItem = ({ item }) => {
    return <ExpenseItem expense={item} />;
  };
  return (
    <View style={styles.expenseListContainer}>
      <FlatList
        data={expenses}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ExpenseList;

const styles = StyleSheet.create({
  expenseListContainer: {
    width: "100%",
    marginTop: 20,
  },
});
