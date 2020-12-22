import React, { useReducer } from "react";
import {
  View,
  Modal,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView
} from "react-native";
import  AntDesign  from "react-native-vector-icons/AntDesign";
import { useDispatch } from "react-redux";
import { changeValidation } from "../../store/actions/modalState";
import { Input } from "react-native-elements";

export const InputModal = (props) => {
  return (
    <Modal
      animationType="slide"
     
      visible={props.visible}
      onRequestClose={props.onRequestClose}
    >
    <ScrollView>
      <View style={styles.modalContainer}>
      {props.children}
      </View>
      </ScrollView>
    </Modal>
  );
};

export const TextModal = (props) => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      onPress={() => dispatch(changeValidation(props.type, true))}
    >
      <View style={styles.rowContain}>
        <Text style={styles.title}>{props.title}</Text>

        <Text style={styles.title}>{props.text}</Text>
        <View style={{ marginVertical: 5 }}>
          <AntDesign name="right" size={15} color="black" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
   flex:1,
    backgroundColor: "white",
    justifyContent: "center",
    alignSelf: "center",
  },
  title: {
    fontFamily: "SpartanBold",
    fontSize: 13,
    marginVertical: 5,
  },
  rowContain: {
    flexDirection: "row",
    width: "100%",
    // height: "20%",

    marginTop: 10,
    borderBottomWidth: 1,
    paddingBottom: 20,
    justifyContent: "space-between",
  },
});