import React from "react";
import { GlobalStyles } from "../constants/styles";
import IconButton from "../components/UI/IconButton";
import { Text, View, Button, StyleSheet } from "react-native";
import CustomButton from "../components/UI/CustomButton"

const ManageExpense = ({ navigation, route }) => {
  const editingExpenseId = route.params?.expenseId; // safety check for undefined
  const isEditing = !!editingExpenseId; // convert to boolean

  navigation.setOptions({
    title: isEditing ? "Exit Expense" : "Add New Expense",
  });

  const cancelHandler = ()=>{}
  const confirmHandler = ()=>{}

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <CustomButton style={styles.button} onPress={confirmHandler}>{isEditing ? "Edit" : "Add"}</CustomButton>
        <CustomButton style={styles.button} onPress={confirmHandler} mode="flat">Cancel</CustomButton>
      </View>

      <View style={styles.deleteContainer}>
        <IconButton
          name="trash"
          size={36}
          color={GlobalStyles.colors.error500}
        />
      </View>
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    alignItems: "center",
    marginTop: 20,
    paddingTop: 10,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
  },
  buttonsContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  }
});
