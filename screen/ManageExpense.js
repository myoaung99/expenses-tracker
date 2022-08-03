import React, { useLayoutEffect, useState } from "react";
import { GlobalStyles } from "../constants/styles";
import IconButton from "../components/UI/IconButton";
import { View, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteExpense,
  addExpense,
  updateExpense,
} from "../store/expenses-slice";
import InputForm from "../components/ManageExpense/InputForm";
import {
  deleteExpenseServer,
  storeExpenseServer,
  updateExpenseServer,
} from "../util/http-request";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";

const ManageExpense = ({ navigation, route }) => {
  const editingExpenseId = route.params?.expenseId; // safety check for undefined
  const isEditing = !!editingExpenseId; // convert to boolean
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);
  const expenses = useSelector((state) => state.expenses.expenses);
  const dispatch = useDispatch();

  // => undefined or object
  const editingExpense = expenses.find(
    (expense) => expense.id === editingExpenseId
  );

  // header title
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Exit Expense" : "Add New Expense",
    });
  }, [navigation]);

  const deleteHandler = async () => {
    dispatch(deleteExpense({ id: editingExpenseId }));
    setIsSubmitting(true);
    try {
      await deleteExpenseServer(editingExpenseId);
      navigation.goBack();
    } catch (error) {
      setIsError(true);
      setIsSubmitting(false);
    }
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = async (expenseInfos) => {
    setIsSubmitting(true);
    try {
      if (isEditing) {
        dispatch(
          updateExpense({
            id: editingExpenseId,
            data: expenseInfos,
          })
        );
        await updateExpenseServer(editingExpenseId, expenseInfos);
        // console.log(JSON.stringify(expenseInfos));
      } else {
        const id = await storeExpenseServer(expenseInfos);
        dispatch(addExpense({ ...expenseInfos, id }));
      }

      navigation.goBack();
    } catch (error) {
      setIsSubmitting(false);
      setIsError(error);
    }
  };

  if (isError && !isSubmitting) {
    return (
      <ErrorOverlay
        message="Something went wrong. Please try again later"
        onConfirm={() => setIsError(false)}
      />
    );
  }

  if (isSubmitting) {
    return <LoadingOverlay />;
  }

  return (
    <View style={styles.container}>
      <InputForm
        onSubmit={confirmHandler}
        onCancel={cancelHandler}
        confirmLabel={isEditing ? "Edit" : "Add"}
        defaultValue={editingExpense}
      />

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
});
