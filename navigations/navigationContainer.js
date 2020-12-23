import React from "react";
import{ActivityIndicator} from "react-native"
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { isEmpty, isLoaded } from "react-redux-firebase";
import { ScreenNavigator } from "./screensNavigation";
import LogScreen from "../screens/logScreen";

const AppNavigation = (props) => {
  const auth = useSelector((state) => state.firebase.auth);

  return (
    <NavigationContainer>
    {!isLoaded(auth)&& isEmpty(auth)&& <ActivityIndicator/>} 
     {isLoaded(auth) && !isEmpty(auth) &&<ScreenNavigator />  }
      

      {isLoaded(auth) && isEmpty(auth) &&<LogScreen />} 
    </NavigationContainer>
  );
};

export default AppNavigation;