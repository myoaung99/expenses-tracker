import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses }) => {
  const renderItem = ({ expense }) => {
    return <ExpenseItem expense={expense} />;
  };
  return (
    <View>
      <FlatList
        data={expenses}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ExpenseList;
