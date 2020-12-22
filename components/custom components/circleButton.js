import React from "react";
import { View, Image, StyleSheet } from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler"
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';

const circleButton = (props) => {


  return (
    <TouchableOpacity onPress={props.onPress}
    enabledContentTapInteraction={false}>
      <View style={{ ...styles.container,  ...props.style }}>
      <MaterialCommunityIcons name={props.name} size={30} color="black" />
      </View>
    </TouchableOpacity>
  
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderStartWidth:2,
    borderEndWidth:2,

   alignItems:"center",
    justifyContent: "center",
  },
  img: {
    width: 100,
    height: 100,
    alignSelf: "center",
  },
});
export default circleButton;