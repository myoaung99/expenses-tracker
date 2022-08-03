import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import CustomButton from "./CustomButton";

const LoadingOverlay = ({ message, onConfirm }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>Error!</Text>
      <Text style={[styles.text, styles.message]}>{message}</Text>
      <CustomButton onPress={onConfirm}>Ok</CustomButton>
    </View>
  );
};

export default LoadingOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.primary700,
  },
  text: {
    color: "white",
    textAlign: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  message: {
    maxWidth: "70%",
    marginVertical: 20,
  },
});
