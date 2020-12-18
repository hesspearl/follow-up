import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../../colors"

const bsh = (props) => {
  return (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.bottomSheet,
    shadowColor: "#000000",
    paddingTop: 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    elevation: 3,
    borderTopWidth: 0.2,
    borderRightWidth: 0.2,
    borderLeftWidth: 0.2,
  },
  panelHeader: {
    alignItems: "center",
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: "black",
    marginBottom: 10,
  },
});
export default bsh;