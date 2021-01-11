import React, {useEffect} from "react";
import{ActivityIndicator, Appearance} from "react-native"
import { NavigationContainer } from "@react-navigation/native";
import { useSelector , useDispatch } from "react-redux";
import { isEmpty, isLoaded } from "react-redux-firebase";
import { ScreenNavigator } from "./screensNavigation";
import LogScreen from "../screens/logScreen";
import{changeTheme} from "../store/actions/theme"
import{darkTheme,defaultTheme} from "../styles/themes"

const AppNavigation = (props) => {
  const dispatch = useDispatch()

  //https://dev.to/franciscocobas/implement-dark-mode-in-android-and-ios-apps-with-react-native-and-redux-52n9
  useEffect(() => {

    dispatch(changeTheme(Appearance.getColorScheme()==='dark'? darkTheme: defaultTheme))
    Appearance.addChangeListener(onThemeChange);

    return () => Appearance.removeChangeListener(onThemeChange);
  }, []);

 //when phone theme got change 
 const onThemeChange=({colorScheme})=>{
  dispatch(changeTheme(colorScheme==='dark'? darkTheme: defaultTheme))
 }

  const theme= useSelector(({theme})=> theme.theme)
  const auth = useSelector((state) => state.firebase.auth);

console.log(theme.colors.background)
  return (
    <NavigationContainer theme={theme}>
    {!isLoaded(auth)&& isEmpty(auth)&& <ActivityIndicator/>} 
     {isLoaded(auth) && !isEmpty(auth) &&<ScreenNavigator />  }
      

      {isLoaded(auth) && isEmpty(auth) &&<LogScreen />} 
    </NavigationContainer>
  );
};

export default AppNavigation;