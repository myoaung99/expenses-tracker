import React from "react";
import { Text, View, StyleSheet } from "react-native";

const AllExpense = () => {
  return (
    <View style={styles.container}>
      <Text>This is all expenses screen</Text>
    </View>
  );
};

export default AllExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
