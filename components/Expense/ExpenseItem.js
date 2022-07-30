import React from "react";
import { GlobalStyles } from "./../../constants/styles";
import { Text, View, StyleSheet, Pressable, Platform } from "react-native";
import { getFormattedDate } from "../../util/date";

const ExpenseItem = ({ expense, onPress }) => {
  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        onPress={onPress}
        style={({ pressed }) =>
          pressed
            ? Platform.OS === "ios"
              ? [styles.item, styles.pressed]
              : styles.item
            : styles.item
        }
      >
        <View>
          <Text style={styles.itemText}>{expense.name}</Text>
          <Text style={styles.itemDate}>
            {getFormattedDate(new Date(expense.date))}
          </Text>
        </View>
        <Text style={styles.itemAmount}>{expense.amount.toFixed(2)}</Text>
      </Pressable>
    </View>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    marginBottom: 10,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
  pressed: {
    opacity: 0.75,
  },
});
