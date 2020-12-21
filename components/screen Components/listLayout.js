import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../../colors";
import { TouchableOpacity } from "react-native-gesture-handler";

const listLayout = (props) => {
  const { array, Handler, selected, width, fontSize } = props;

  return array.map((item, index) => (
    <View key={index}>
      <TouchableOpacity onPress={() => Handler(index)}>
        <View
          style={{
            ...styles.container,
            backgroundColor: selected === index ? "black" : colors.textBack,
            width: width ? width : 100,
          }}
        >
          <Text
            style={{
              ...styles.title,
              color: selected === index ? "white" : "black",
              fontSize: fontSize ? fontSize : 15,
            }}
          >
            {item}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  ));
};
const styles = StyleSheet.create({
  container: {
    height: 50,

    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  title: {
    fontFamily: "SpartanBold",

    //color:"white"
  },
});
export default listLayout;
