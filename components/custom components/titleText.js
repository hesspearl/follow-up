import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import colors from "../../colors"
const titleText= props =>{
return (
<Text style={styles.txt}>
    {props.title}
</Text>
)
}

const styles= StyleSheet.create({
    txt:{
        color:colors.titles,
        fontSize:15,
        marginVertical:10,
        fontFamily:"Spartan"
        
    }
})
export default titleText;