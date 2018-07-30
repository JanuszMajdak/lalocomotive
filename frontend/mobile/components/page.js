import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

class Page extends React.Component {
  render() {
    return (
      <View>
        <Text>Test</Text>
      </View>
    );
  }
}
{
  /* <View style={styles.top}>
</View> */
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between"
  },
  descriptionContainer: {
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    marginTop: 30
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    height: 30
  },
  title: {
    marginLeft: 10,
    fontSize: 15,
    fontWeight: "bold"
  },
  textContainer: {
    alignItems: "center",
    marginTop: 10,
    width: "90%"
  },
  cardsContainer: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%"
  },
  card: {
    padding: 10,
    marginTop: 10,
    alignItems: "center",
    width: "48%"
  },
  cardTitle: {
    marginBottom: 10,
    fontWeight: "bold"
  },

  buttonContainer: {
    marginBottom: 10,
    width: "100%",
    padding: 10
  },
  welcome: {
    fontSize: 50,
    textAlign: "center",
    justifyContent: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  image: {}
});

export default Page;
