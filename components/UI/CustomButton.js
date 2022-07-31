import React from "react";
import { Pressable, Text, View, StyleSheet, Platform } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function CustomButton({ children, style, onPress, mode }) {
  return (
    <View style={[styles.outerContainer, style]}>
      <Pressable
        android_ripple={{ color: GlobalStyles.colors.primary500 }}
        style={({ pressed }) =>
          pressed
            ? [styles.button, mode === "flat" && styles.flat, styles.pressed]
            : [styles.button, mode === "flat" && styles.flat]
        }
        onPress={onPress}
      >
        <View>
          <Text
            style={[styles.buttonText, mode === "flat" && styles.buttonText]}
          >
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CustomButton;

const styles = StyleSheet.create({
  outerContainer: {},
  innerContainer: {},
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary500,
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  flatText: {
    color: GlobalStyles.colors.primary200,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 4,
  },
});
