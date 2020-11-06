import { StyleSheet, Platform } from "react-native";

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
    color: "tomato",
  },
});

export default styles;
