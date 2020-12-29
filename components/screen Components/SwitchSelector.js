import React from "react";
import SwitchSelector from "react-native-switch-selector";
import { Text, View } from "react-native";

const switchSelector = (props) => {
  const options = [
    { label: props.option[0], value: { value:  props.option[0], color: "green" } },
    { label: props.option[1], value: { value:  props.option[1], color: "yellow" } },
    { label: props.option[2], value: { value:  props.option[2], color: "red" } },
  ];

  //console.log(props.init)

  return (
    <View style={{alignItems:"center"}}>
      <Text style={{ fontSize: 20, margin: 25, fontFamily:'SpartanBold'}}>{props.children}</Text>
      <SwitchSelector
        textColor={"black"}
        fontSize={20}
        selectedColor={"white"}
        buttonColor={"black"}
        borderColor="black"
        options={options}
        borderRadius={6}
        style={{ width: "100%", height: "10%" ,}}
        initial={0}
     
        onPress={props.onPress}
        height={40}
    
      />
    </View>
  );
};

export default switchSelector;
