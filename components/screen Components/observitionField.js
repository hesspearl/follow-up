import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";

const ObservationField = (props) => {
  const [show, setShow] = useState(false);

  console.log(props.value)

  const onSubmit = (value) => {
    if (value.trim().length >= 0) {
      setShow(true);
      props.onChangeText(value);
    } else {
      setShow(false);
    }
  };

  return (
    <View style={styles.container}>
    
    <Text style={styles.text}> observation</Text>
      <View style={styles.field}>
        {show ? (
          <Image
            style={styles.img}
            source={{
              uri:
                "https://trello-attachments.s3.amazonaws.com/5db8df629e82fa748b5ecf01/5f12220cda1b8281626dd2e5/3a564d6baefe7b38e597eebece3118c4/bolha-do-discurso-quadrado.png",
            }}
          />
        ) : (
          <Image
            style={{ width: 40, height: 40 }}
            source={{
              uri:
                "https://trello-attachments.s3.amazonaws.com/5db8df629e82fa748b5ecf01/5f12220cda1b8281626dd2e5/19a86db3c602193633f80f685412ea55/image.png",
            }}
          />
        )}
 <TextInput
        style={{ paddingLeft: 10, fontSize: 18 }}
        onChangeText={(value) => onSubmit(value)}
        placeholder={"write something "}
        value={props.value}
      />
      </View>
     
    </View>
  );
  
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical:20,
    height: 110,

  },
  text: {
    fontSize: 20,

    fontFamily: "SpartanBold",
  },
 
  img: {
    width: 30,
    height: 30,
    alignSelf: "flex-end",
    
  },
  field: {
    flexDirection: "row",
    margin:10,
    marginVertical:20,
    //justifyContent: "space-between" ,
  },
});
export default ObservationField;