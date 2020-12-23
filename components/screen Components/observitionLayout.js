import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const observationLayout = (props) => {
  
  return (
    <>
      <View style={styles.field}>
        <View style={{flexDirection: 'row', width: '100%'}}>
          {props.observation.length > 0 ? (
            <Image
              style={styles.img}
              source={{
                uri : 
                  'https://trello-attachments.s3.amazonaws.com/5db8df629e82fa748b5ecf01/5f12220cda1b8281626dd2e5/3a564d6baefe7b38e597eebece3118c4/bolha-do-discurso-quadrado.png',
              }}
            />
          ) : (
            <Image
              style={{width: 20, height: 20}}
              source={{
                uri:
                  'https://trello-attachments.s3.amazonaws.com/5db8df629e82fa748b5ecf01/5f12220cda1b8281626dd2e5/19a86db3c602193633f80f685412ea55/image.png',
              }}
            />
          )}
          <Text style={styles.text}> Observation</Text>
          <View style={{}}></View>
        </View>
        {props.children}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  txtDescribe: {
    fontSize: 13,
    fontFamily: 'Spartan',
  },
  field: {
    // marginVertical: 10,
    // flexDirection: "column",
    //   justifyContent: "center",
    //alignItems: "center",
    //  paddingLeft:20
  },
  img: {
    width: 20,
    height: 20,
    //alignSelf: "flex-end",
  },
  text: {
    fontSize: 13,
    //marginLeft: 15,
    fontFamily: 'SpartanBold',
  },
});
export default observationLayout;
