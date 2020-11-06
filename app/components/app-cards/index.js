import React from "react";
import { StyleSheet, View, Image } from "react-native";

import colors from "../../config/colors";
import AppText from "../app-text";

function AppCard({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.cardDetail}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 15,
    marginBottom: 20,
    elevation: 24,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  cardDetail: {
    padding: 10,
  },
  title: {
    marginBottom: 7,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});
export default AppCard;
