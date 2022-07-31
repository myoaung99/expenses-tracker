import React, { useLayoutEffect } from "react";
import { GlobalStyles } from "../constants/styles";
import IconButton from "../components/UI/IconButton";
import { View, StyleSheet } from "react-native";
import CustomButton from "../components/UI/CustomButton";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteExpense,
  addExpense,
  updateExpense,
} from "../store/expenses-slice";

const ManageExpense = ({ navigation, route }) => {
  const editingExpenseId = route.params?.expenseId; // safety check for undefined
  const isEditing = !!editingExpenseId; // convert to boolean

  const expenses = useSelector((state) => state.expenses.expenses);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Exit Expense" : "Add New Expense",
    });
  }, [navigation]);

  const deleteHandler = () => {
    dispatch(deleteExpense({ id: editingExpenseId }));
    navigation.goBack();
  };
  const cancelHandler = () => {
    navigation.goBack();
  };
  const confirmHandler = () => {
    if (isEditing) {
      dispatch(
        updateExpense({
          id: editingExpenseId,
          data: {
            name: "dummy",
            amount: 100,
            date: new Date().getTime(),
          },
        })
      );
    } else {
      dispatch(
        addExpense({
          name: "dummy",
          amount: 100,
          date: new Date().getTime(),
        })
      );
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <CustomButton style={styles.button} onPress={confirmHandler}>
          {isEditing ? "Edit" : "Add"}
        </CustomButton>
        <CustomButton style={styles.button} onPress={cancelHandler} mode="flat">
          Cancel
        </CustomButton>
      </View>

      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            onPress={deleteHandler}
            name="trash"
            size={36}
            color={GlobalStyles.colors.error500}
          />
        </View>
      )}
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
  },
});
