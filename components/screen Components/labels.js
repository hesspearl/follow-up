import React from "react";
import { View, Text, StyleSheet } from "react-native";
import size from "../../styles/size"

const high = "high";
const low = "low";
const average = " average";

export const ImportantLabels = (props) => {


  let option;
  let color;

  switch (props.type) {
    case low:
      option = "low Importance";
      color = "red";
      break;

    case high:
      option = "high Importance";
      color = "green";
      break;

    case average:
      option = "avg Importance";
      color = "yellow";
      break;
  }

  //console.log(option);
  return (
    <View style={{ ...styles.contain, backgroundColor: color }}>
      <Text style={styles.textInside}>{option}</Text>
    </View>
  );
};

const yes = "yes";
const no = " no";
const maybe = "maybe";

export const NecessaryLabels = (props) => {
  let option;
  let color;

  switch (props.type) {
    case yes:
      option = "It's necessary";
      color = "green";
      break;
    case no:
      option = "not necessary";
      color = "red";
      break;
    case maybe:
      option = "mab necessary";
      color = "yellow";
      break;
  }
  return (
    <View style={{ ...styles.contain, backgroundColor: color }}>
      <Text style={styles.textInside}>{option}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contain: {
    width: size.height<600 ?150:170,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 11,
    
  },
  textInside: {
    fontSize: 13,
    fontFamily:"SpartanBold",
    marginLeft: 5,
  },
});