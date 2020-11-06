import React from "react";
import {
  StyleSheet,
  StatusBar,
  View,
  Image,
  ImageBackground,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color={colors.white} size={25} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color={colors.white}
          size={25}
        />
      </View>
      <Image
        source={require("../../assets/chair.jpg")}
        style={styles.background}
        resizeMode="contain"
      />
      {/* <View style={styles.viewTop}>
        <View style={styles.loginButton}></View>
        <View style={styles.registerButton}></View>
      </View>
      <ImageBackground
        source={require("../assets/chair.jpg")}
        style={styles.background}
      ></ImageBackground>
      <View style={styles.viewBottom}></View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "black",
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  closeIcon: {
    left: 30,
    position: "absolute",
    top: 40,
  },
  deleteIcon: {
    right: 30,
    position: "absolute",
    top: 40,
  },
  //   mainContainer: {
  //     flex: 1,
  //   },
  //   background: {
  //     flex: 1,
  //   },
  //   viewTop: {
  //     backgroundColor: "black",
  //     flexDirection: "row",
  //     height: 110,
  //     marginTop: StatusBar.currentHeight,
  //   },
  //   viewBottom: {
  //     backgroundColor: "black",
  //     flexDirection: "row",
  //     height: 100,
  //   },
  //   loginButton: {
  //     width: 35,
  //     height: 35,
  //     backgroundColor: "#fc5c65",
  //     left: 20,
  //     position: "absolute",
  //     top: 10,
  //   },
  //   registerButton: {
  //     width: 35,
  //     height: 35,
  //     backgroundColor: "#4ecdc4",
  //     right: 20,
  //     top: 10,
  //     position: "absolute",
  //   },
});

export default ViewImageScreen;
