import React from "react";
import { TextInput, StyleSheet, View, Text } from "react-native";
import colors from "../../colors";
import size from "../../size"

const TextField = (props) => {
  

  return(
<View style={{ ...styles.container, ...props.contain}} >
    <Text    style={{...styles.text,...props.color}}>
{props.children}
    </Text>
    <View style={styles.inputs}>
      <TextInput style={{padding:5, fontSize:20}} 
        onChangeText={props.onChangeText}
        value={props.value }
        keyboardType={props.keyboardType}
        onBlur={props.onBlur}
        ref={props.ref}
      />
    </View>
     
</View>
       
        )
  ;
};

let margin 
if (size.height < 550 )
{margin=40}
 else
  if (size.height<600)
{ margin=30}

const styles = StyleSheet.create({
  container:{
    width: 200,
    
marginTop:margin? margin :10
  },
  text:{
    fontSize:18,

  fontFamily:'SpartanBold',
color:"white" }
   ,
  inputs: {
    padding:10,
  marginVertical:20,
  
    borderRadius: 10,
   
   
    borderWidth: 1,
    backgroundColor: colors.textBack,
 height:73,
  justifyContent:"center"
  },
});
export default TextField;