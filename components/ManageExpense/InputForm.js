import React, { useState } from "react";
import Input from "./Input";
import CustomButton from "../../components/UI/CustomButton";
import { View, StyleSheet, Text, Alert } from "react-native";

const InputForm = ({ onSubmit, onCancel, isEditing }) => {
  const [inputValues, setInputValues] = useState({
    amount: "",
    date: "",
    name: "",
  });

  const textInputChangeHandler = (inputType, enteredText) => {
    setInputValues((currentValue) => ({
      ...currentValue,
      [inputType]: enteredText,
      // object name ကို dynamic ထည့်ချင်ရင် [] ထည့်သုံးရတယ်
      // [inputType]: enteredText --> true
      // inputType: enteredText --> false
    }));
  };

  const submitHandler = () => {
    const { name, amount, date } = inputValues;

    const numAmount = Number(amount);

    if (!name || isNaN(numAmount) || !amount || date.trim().length > 10) {
      Alert.alert("Invalid input", "Please enter the valid inputs", [
        { title: "Ok", style: "cancel" },
      ]);

      return;
    }
    const expenseData = {
      name: name,
      amount: numAmount,
      date: new Date(date).getTime(),
    };
    onSubmit(expenseData);
  };

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          style={styles.input}
          label="Amount"
          textInputConfigurations={{
            keyboardType: "decimal-pad",
            maxLength: 6,
            onChangeText: textInputChangeHandler.bind(this, "amount"),
          }}
        />
        <Input
          style={styles.input}
          label="Date"
          textInputConfigurations={{
            maxLength: 10,
            onChangeText: textInputChangeHandler.bind(this, "date"),
            placeholder: "YYYY-MM-DD",
            keyboardType: "number-pad",
          }}
        />
      </View>

      <Input
        label="Description"
        textInputConfigurations={{
          multiline: true,
          onChangeText: textInputChangeHandler.bind(this, "name"),
        }}
      />

      <View style={styles.buttonsContainer}>
        <CustomButton style={styles.button} onPress={submitHandler}>
          {isEditing ? "Edit" : "Add"}
        </CustomButton>
        <CustomButton style={styles.button} onPress={onCancel} mode="flat">
          Cancel
        </CustomButton>
      </View>
    </View>
  );
};

export default InputForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 50,
  },
  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    flex: 1,
  },
  title: {
    textAlign: "center",
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
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
