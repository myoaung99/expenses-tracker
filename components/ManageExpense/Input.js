import React from "react";
import { GlobalStyles } from "../../constants/styles";
import { Text, TextInput, View, StyleSheet } from "react-native";

const Input = ({ label, textInputConfigurations, style }) => {
  const inputStyles = [styles.inputBox];

  if (textInputConfigurations?.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={styles.inputLabel}>{label}</Text>
      <TextInput style={inputStyles} {...textInputConfigurations} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 16,
    marginVertical: 8,
  },
  inputLabel: {
    fontSize: 12,
    marginBottom: 4,
    color: GlobalStyles.colors.primary100,
  },
  inputBox: {
    padding: 5,
    borderRadius: 4,
    color: GlobalStyles.colors.primary700,
    backgroundColor: GlobalStyles.colors.primary100,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
});
