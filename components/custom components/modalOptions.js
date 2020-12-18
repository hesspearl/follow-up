import React, { useState } from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";

const ModalOptions = (props) => {
  const [visible, setVisible] = useState(false);

  const options = [
    {
      label: props.option[0],
      value: { value: props.option[0], color: "green" },
    },
    {
      label: props.option[1],
      value: { value: props.option[1], color: "yellow" },
    },
    { label: props.option[2], value: { value: props.option[2], color: "red" } },
  ];

  const onValueChange = (value) => {
    props.onValueChange(value);
    return setVisible(false);
  };

  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        presentationStyle="overFullScreen"
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.container}>
          <View style={styles.modal}>
            {options.map((i, index) => (
              <View key={index}>
                <TouchableOpacity onPress={() => onValueChange(i.value)}>
                  <Text style={styles.text}>{i.label}</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
      </Modal>

      <TouchableOpacity onPress={() => setVisible(true)}>
        <Text style={styles.value}>{props.value}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 13,
    fontFamily: "SpartanBold",
    color: "white",
  },

  value: {
    fontSize: 13,
    fontFamily: "Spartan",
    margin: 5,
    color: "black",
  },
  modal: {
    backgroundColor: "black",
    borderRadius: 20,
    width: "60%",
    height: "20%",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default ModalOptions;
