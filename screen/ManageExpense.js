import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const ManageExpense = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>This is recent expense screen</Text>
      <Button title="Show Modal" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    borderWidth: 2,
    borderBottomWidth: 0,
    borderTopColor: "black",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,

    backgroundColor: "skyblue",
  },
});