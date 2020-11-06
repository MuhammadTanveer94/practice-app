import React from "react";
import { StyleSheet, View, Image } from "react-native";

import colors from "../../config/colors";
import AppText from "../../components/app-text";
import ListingItem from "../../components/list-item";

function ListingDetail({ title, subTitle }) {
  return (
    <View>
      <Image style={styles.image} source={require("../../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.price}>{subTitle}</AppText>
      </View>
      <ListingItem
        image={require("../../assets/jacket.jpg")}
        title="testing"
        subTitle="test"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    padding: 10,
  },
  title: {
    // marginBottom: 7,
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    marginVertical: 10,
    fontSize: 20,
  },
});

export default ListingDetail;
