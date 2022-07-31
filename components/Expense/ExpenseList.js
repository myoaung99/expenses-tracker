import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, FlatList } from "react-native";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses }) => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    const pressHandler = () => {
      navigation.navigate("ManageExpense", {
        expenseId: item.id,
      });
    };
    return <ExpenseItem expense={item} onPress={pressHandler} />;
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
    paddingBottom: 20,
  },
});
