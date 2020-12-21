import React, { useReducer, useEffect } from "react";
import {
  View,
  Text,
  Modal,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import ModalComp from "../customComp/Modal"

const DATA="DATA"
const SHOW ="SHOW"


const reducer=(state , action )=>{
  switch(action.type){
 case DATA:{
   const update={
     value : action.value,
     avatar:action.avatar
   }
   return{
     ...state,
     application:update
   }
 }
 case SHOW:{
   return{
     ...state, 
     show:action.show}
 } 
 
  }
  return state 
}

const ApplicationModal = (props) => {
 
 

  const [stateValue, dispatch] = useReducer(reducer,{
    application:{

    value: "others",
    avatar: "https://trello-attachments.s3.amazonaws.com/5db8df629e82fa748b5ecf01/5f12220cda1b8281626dd2e5/f82234345b15940f97eebef361f10dc1/others.PNG",
  }
,
  show:false,
}
  )
 

useEffect(() => {
  if(stateValue.application){
    props.onChangeItem(stateValue.application)
  }
  
}, [stateValue ]
)



const pressHandler=(l)=>{
  
  dispatch({
    type:DATA,
    value:l.label,
     avatar:l.avatar
   })
   
    dispatch({
     type:SHOW,
     show:false
  })
}
  
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Application</Text>
      <TouchableOpacity onPress={() => dispatch({type:SHOW , show:true})}>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.imgContain}>
            <Image style={styles.img} source={{ uri:  stateValue.application.avatar }} />
          </View>

          <Text style={styles.value}>{stateValue.application.value}</Text>
        </View>
        <ModalComp
           visible={stateValue.show}
           onPress={pressHandler }
           onRequestClose={() => dispatch({type:SHOW, show:false})}
        /> 
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {height:"15%" },
  title: {
    fontSize: 18,
    // margin: 10,
     marginTop: 20,
    // marginBottom: 15,
    fontFamily: "SpartanBold",
  },
  imgContain: {
    width: 40,
    height: 40,
    borderRadius: 15,
    borderWidth: 1,
    alignSelf: "center",
    justifyContent: "center",
    marginTop:10
  },

  img: { width: "100%", height: "95%", borderRadius: 10, alignSelf: "center" },
  value: {
    fontSize: 20,
    fontWeight:"bold",
    margin: 20,
    marginTop: 20,
    marginBottom: 15,
    fontFamily: "Spartan",
  },

 
});

export default ApplicationModal;
