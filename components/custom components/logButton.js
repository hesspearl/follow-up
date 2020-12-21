import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import size from "../../size";

const logButton = (props) => {
  return (
    <View style={styles.button}>
      <TouchableOpacity onPress={props.onPress}>
        <Text style={styles.title}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight:"bold",
    fontFamily:"Spartan",
    color:"white",
  },
  button: {
    width: size.width/3.5,
    height: 60,
    elevation: 6,
    fontSize: 30,
    backgroundColor:"black",
    justifyContent: "center",
    alignItems: "center",
    borderRadius:20,
    alignSelf: "center",
    margin:10
  },
});
export default logButton;
