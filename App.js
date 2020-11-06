// import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, LogBox, Text, View } from "react-native";
import {
  useDeviceOrientation,
  useDimensions,
} from "@react-native-community/hooks";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import WelcomeScreen from "./app/screens/welcome";
import ViewImageScreen from "./app/screens/view-image";
import ListingDetailScreen from "./app/screens/listing-detail";
import AppText from "./app/components/app-text";
import AppButton from "./app/components/app-button";
import AppCard from "./app/components/app-cards";

LogBox.ignoreLogs(["Remote debugger"]);
export default function App() {
  console.log("app executed");
  return (
    // <View style={styles.container}>
    //   <ListingDetailScreen
    //     title="Red Jacket"
    //     subTitle="$43"
    //     image={require("./app/assets/jacket.jpg")}
    //   />
    // </View>
    <ViewImageScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#f8f4f4",
    padding: 20,
    paddingTop: 100,
  },
});
