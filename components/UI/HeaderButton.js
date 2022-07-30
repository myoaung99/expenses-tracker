import React from "react";
import { View, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const HeaderButton = () => {
  return (
    <Pressable>
      <View>
        <Ionicons name="add" color="black" size={28} />
      </View>
    </Pressable>
  );
};

export default HeaderButton;
