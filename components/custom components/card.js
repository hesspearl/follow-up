import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import colors from "../../colors";

const Cards = (props) => {

  
  return (
    <View style={styles.product}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft:30
        }}
      >
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: props.picture }} />
        </View>

        <View style={styles.details}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
            {props.product}
          </Text>
          <View style={{flexDirection:"row", }}>
           <Text  style={styles.title}>
            {props.price.value}
          </Text>
            <Text style={styles.title}>{props.price.code}</Text>
          </View>
          
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    borderRadius: 20,
    backgroundColor: colors.textBack,
    marginVertical: 3,
    width: "80%",
    elevation: 10,
    alignSelf: "center",
    marginVertical: 20,
    height: 100,
  },
  touchable: {
    borderRadius: 10,
    overflow: "hidden",
  },
  imageContainer: {
    width: 70,
    height: 70,
  //  marginLeft: 20,
    borderWidth: 1,
  //  margin: 10,
    borderRadius: 40,
  },
  image: {
    width: 68,
    height: 68,

    borderRadius: 50,
  },
  details: {
    //flex:1,
   // justifyContent: "center",
    alignItems: "center",
   // marginHorizontal: 30,
    width: "75%",
  },
  title: {
    fontFamily: "SpartanBold",
    fontSize: 20,
    marginHorizontal:5
  },
  report: {
    fontFamily: "Piedra",
    fontSize: 30,
    color: "#888",
   
  },
});
export default Cards;
