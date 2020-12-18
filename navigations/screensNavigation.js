import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import create from "../screens/createScreen";
import list from "../screens/listScreen";
import details from "../screens/deatilsScreen";
import start from "../screens/startScreen"
import LoadingScreen  from "../screens/loadingScreen"
import StartSL from "../components/functional components/startScreenLoading"
import editScreen from "../screens/editScreen"
import updating from "../components/functional components/updateScreen"
import settingScreen from "../screens/settingScreen"


  
  const BodyStack = createStackNavigator();
 

  export const ScreenNavigator = (props) => {
  return (

      <BodyStack.Navigator screenOptions={{ header: () => null}} >
       <BodyStack.Screen name="startLS" component={StartSL}  /> 
      {/* <BodyStack.Screen name="start" component={start}  /> */}
        <BodyStack.Screen name="list" component={list}  />
        <BodyStack.Screen name="details" component={details}  />
        <BodyStack.Screen name="create" component={create}  />
        <BodyStack.Screen name="loading" component={LoadingScreen}  />
        <BodyStack.Screen name="updating" component={updating}  />
        <BodyStack.Screen name="Edit" component={editScreen} />
        <BodyStack.Screen name="setting" component={settingScreen} />
      </BodyStack.Navigator>
    
  )
};
