import React from "react";
import {StyleSheet} from "react-native";
import { ThemedText } from "./ThemedText";

const Cat = () => {
  return (
    <ThemedText style={styles.container} lightColor="#000" darkColor="#fff">
      Hello, I am your cat!
    </ThemedText>
  );
};

const styles = StyleSheet.create({
  container: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Cat;
