import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import colors from "../../colors"

const Lights= props =>{
return (
    <View style={styles.container}>
         <View style={{marginLeft:20, marginTop:20}} >
    <Text style={styles.txtDescribe}>{props.title}</Text>
  </View>
  <View style={styles.background}>
            <View
              style={{
                ...styles.colorCircle,
                backgroundColor: props.color,
              }}
            />
            {/* <Text style={styles.textInside}>{props.value}</Text> */}
            {props.children}
          </View>
    </View>
   
)
}

const styles= StyleSheet.create({
    container:{
    //    flexDirection:"column", 
   // width:"100%", 
    justifyContent:"center", 
    alignItems:"center", 
  
},
    txtDescribe: {
        fontSize: 13,
        fontFamily: "SpartanBold",
      
      },
      background: {
      //  flexDirection: "column",
        borderRadius: 50,
       marginTop:5.,
        backgroundColor: colors.textBack,

      
       alignItems: "center",
        //justifyContent: "space-around",
      },
      colorCircle: {
        borderRadius: 50,
        height: 30,
        width: 30,
      },
      textInside: {
        fontSize: 10,
        fontFamily: "SpartanBold",
      
      },
})
export default Lights;