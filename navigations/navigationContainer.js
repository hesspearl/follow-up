import React from "react";
import{ActivityIndicator} from "react-native"
import { NavigationContainer, DarkTheme, DefaultTheme } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { isEmpty, isLoaded } from "react-redux-firebase";
import { ScreenNavigator } from "./screensNavigation";
import LogScreen from "../screens/logScreen";

const AppNavigation = (props) => {

  const customDarkTheme={
    ...DarkTheme,
    colors:{
      ...DarkTheme.colors,
      primary: 'rgb(255, 45, 85)',
      background: 'rgb(242, 242, 242)',
      card: 'rgb(255, 255, 255)',
      text: 'rgb(28, 28, 30)',
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',
    }
    
  }

  
  const auth = useSelector((state) => state.firebase.auth);

  return (
    <NavigationContainer theme={customDarkTheme}>
    {!isLoaded(auth)&& isEmpty(auth)&& <ActivityIndicator/>} 
     {isLoaded(auth) && !isEmpty(auth) &&<ScreenNavigator />  }
      

      {isLoaded(auth) && isEmpty(auth) &&<LogScreen />} 
    </NavigationContainer>
  );
};

export default AppNavigation;