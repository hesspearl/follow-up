import React from "react";
import { View, Text, StyleSheet, Modal } from "react-native";
import { Tooltip } from "react-native-elements";

const tooltips = (props) => {
  const { forwardRef, tip, close, size, keys, toggleAction } = props;

  
  return (
    <Tooltip
      ref={forwardRef}
      onClose={close}
      //backgroundColor={"black"}
     toggleAction={toggleAction}
     key={keys}
      ModalComponent={Modal}
      width={size? size.width:150}
      height={size? size.height:50}
      popover={<Text style={styles.title}>{tip}</Text>}
    >
      {props.children}
    </Tooltip>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "Spartan",
    fontSize: 15,
    color: "white",

    // marginVertical:5
  },
});
export default tooltips;