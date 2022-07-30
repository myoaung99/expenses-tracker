import React from "react";
import { View, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const HeaderButton = ({ name, color, size, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressed}
      onPress={onPress}
    >
      <View style={styles.button}>
        <Ionicons name={name} color={color} size={size} />
      </View>
    </Pressable>
  );
};

export default HeaderButton;

const styles = StyleSheet.create({
  button: {
    marginRight: 20,
  },
  pressed: {
    opacity: 0.5,
  },
});
