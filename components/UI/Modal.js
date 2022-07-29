import React from "react";
import { Text, View, StyleSheet, Modal } from "react-native";

const Modal = ({ modalIsVisible }) => {
  return (
    <Modal visible={modalIsVisible}>
      <View style={styles.container}>
        <Text>This is recent expense screen</Text>
      </View>
    </Modal>
  );
};

export default Modal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
