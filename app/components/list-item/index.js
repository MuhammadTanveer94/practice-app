import React from "react";
import { StyleSheet, View, Image } from "react-native";

import AppText from "../app-text";
import colors from "../../config/colors";

function ListItem({ title, subTitle, image }) {
  console.log("inside item");
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  title: {
    marginBottom: 3,
    fontWeight: "500",
  },
  subTitle: {
    color: colors.grey,
  },
});

export default ListItem;
