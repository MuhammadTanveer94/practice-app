import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

import colors from "../../config/colors";

function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

Platform.select({
  android: {
    fontFamily: "Roboto",
    fontSize: 18,
  },
  ios: {
    fontFamily: "Avenir",
    fontSize: 18,
  },
});

const styles = StyleSheet.create({
  text: {
    color: colors.black,
  },
});

export default AppText;
