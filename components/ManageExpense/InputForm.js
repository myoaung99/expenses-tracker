import React, { useState } from "react";
import Input from "./Input";
import CustomButton from "../../components/UI/CustomButton";
import { View, StyleSheet, Text, Alert } from "react-native";
import { getStructuredDate } from "../../util/date";

const InputForm = ({ onSubmit, onCancel, confirmLabel, defaultValue }) => {
  const [inputValues, setInputValues] = useState({
    amount: {
      value: defaultValue ? defaultValue.amount.toString() : "",
      isValid: true,
    },
    date: {
      value: defaultValue ? getStructuredDate(new Date(defaultValue.date)) : "",
      isValid: true,
    },
    name: {
      value: defaultValue ? defaultValue.name : "",
      isValid: true,
    },
  });

  // form input typing handler
  const textInputChangeHandler = (inputType, enteredText) => {
    setInputValues((currentValue) => ({
      ...currentValue,
      [inputType]: {
        value: enteredText,
        isValid: true,
      },
      // object name ကို dynamic ထည့်ချင်ရင် [] ထည့်သုံးရတယ်
      // [inputType]: enteredText --> true
      // inputType: enteredText --> false
    }));
  };

  // on button click
  const submitHandler = () => {
    const { name, amount, date } = inputValues;

    const numAmount = Number(amount.value);

    const amountIsValid = !isNaN(numAmount) || numAmount > 0;
    const dateIsValid = new Date(date.value).toString() !== "Invalid Date";
    const nameIsValid = name.value.trim().length > 0;

    // basic validate
    if (!amountIsValid || !dateIsValid || !nameIsValid) {
      setInputValues((currInput) => {
        return {
          amount: { value: currInput.amount.value, isValid: amountIsValid },
          date: { value: currInput.date.value, isValid: dateIsValid },
          name: { value: currInput.name.value, isValid: nameIsValid },
        };
      });
      return;
    }

    const expenseData = {
      name: name.value,
      amount: numAmount,
      date: new Date(date.value).getTime(),
    };
    onSubmit(expenseData);
  };

  const formIsValid =
    inputValues.amount.isValid &&
    inputValues.date.isValid &&
    inputValues.name.isValid;

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
            value: inputValues.amount.value,
            onChangeText: textInputChangeHandler.bind(this, "amount"),
          }}
        />
        <Input
          style={styles.input}
          label="Date"
          textInputConfigurations={{
            maxLength: 10,
            value: inputValues.date.value,
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
          value: inputValues.name.value,
          onChangeText: textInputChangeHandler.bind(this, "name"),
        }}
      />

      {!formIsValid && <Text>Invalid inputs.Please check your inputs.</Text>}

      <View style={styles.buttonsContainer}>
        <CustomButton style={styles.button} onPress={submitHandler}>
          {confirmLabel}
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
