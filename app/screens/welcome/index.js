import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

import AppButton from "../../components/app-button";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={2}
      source={require("../../assets/background.jpg")}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/logo-red.png")}
        />
        <Text style={styles.logoText}>Sell what you don't want</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Login" />
        <AppButton title="Register" color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    top: "15%",
    alignItems: "center",
  },
  logo: {
    width: 90,
    height: 90,
  },
  logoText: {
    marginVertical: 10,
    fontSize: 25,
    fontWeight: "bold",
  },
  buttonContainer: {
    width: "100%",
    padding: 20,
  },
});

export default WelcomeScreen;
