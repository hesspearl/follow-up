import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Input from "../custom components/logInput";
import LogButton from "../custom components/logButton";
import { useFirebase } from "react-redux-firebase";

export const ResetPass = (props) => {
  const firebase = useFirebase();
  const [email, setEmail] = useState();

  const sendPassword = (e) => {
    firebase
      .auth()
      .sendPasswordResetEmail(e)
      .then(() => props.show(false))
      .catch((err) => console.log(err+ "error"));
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Input
        name="key"
        title="Enter email"
        onChangeText={(text) => setEmail(text)}
      />
      <View style={{ flexDirection: "row", marginTop: 30 }}>
        <LogButton title="return" onPress={() => props.show(false)} />
        <LogButton title="send" onPress={()=>sendPassword(email)} />
      </View>
    </View>
  );
};
