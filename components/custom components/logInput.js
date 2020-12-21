import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native';
import { Entypo } from "@expo/vector-icons";
import size from "../../size";

const logInput= props =>{
return (
    <View style={styles.input}>
    <Entypo
      name={props.name}
      size={30}
      color="black"
      style={{ alignSelf: "center" }}
    />
    <TextInput
      {...props}
      style={{...styles.textInput, ...props.style}}
      placeholder={props.title}
      placeholderTextColor="black"
      onChangeText={props.onChangeText}
      autoCompleteType={props.type}
    />
  </View>
)
}

const styles= StyleSheet.create({
    input: {
        width: size.width===320? 270: 300,
        height: 60,
        borderWidth: 2,
        borderRadius: 10,
        margin: 10,
        flexDirection: "row",
        paddingStart: 20,
        backgroundColor: "white",
      },
      textInput: {
        paddingStart: 20,
        fontFamily: "Spartan",
        width: 200,
        fontSize: 18,
      },
})
export default logInput;