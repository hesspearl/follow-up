import React, { useEffect, useState } from "react";
import { View , PermissionsAndroid, NativeModules} from "react-native";
import Geolocation from '@react-native-community/geolocation';
import {
  useFirebase,
  useFirestoreConnect,
  isLoaded,
} from "react-redux-firebase";
import { useDispatch, useSelector } from "react-redux";
import Wallet from "../assets/svg/wallet.svg";
import * as actions from "../store/actions/filter";
import Start from "./startScreen";
import * as RNLocalize from "react-native-localize";
import Icon from 'react-native-vector-icons';

// this screen show first after log in
const StartLS = (props) => {
  //const [country, setCountry] = useState(null);
  const [geoLocation, setGeoLocation] = useState({})
  const auth = useSelector((state) => state.firebase.auth);
  const state = useSelector((state) => state.firebase.profile);
  const filterState = useSelector((state) => state.filter);
  const cards = useSelector(({ fireStore: { ordered } }) => ordered.Cards);
  const firebase = useFirebase();
  const dispatch = useDispatch();

  const local=NativeModules.I18nManager.allowRTL
 
 

  // sort by timestamp
  useFirestoreConnect({
    collection: `users/${auth.uid}/Cards`,
    storeAs: "Cards",
    orderBy: "date",
  });

  

  // currency API
   
  //find user location to get what currency is using 
  // const location = async () => {
  //   let granted = await PermissionsAndroid.request(
  //     PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //     {
  //       title: 'Location Access Required',
  //       message: 'This App needs to Access your location',
  //     },
  //   );
  //   if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
  //     alert("Permission to access location was denied");
  //   }
  // }

   const findCurrency=()=>{
    
      const countryCurrency=RNLocalize.getCurrencies()
      const country_coding = RNLocalize.getCountry()

     // const currency = require("../modals/country-by-currency-code.json");
      const country_api = require("../modals/country-codes.json");

      const country_c = country_api.filter((item) => item.code === country_coding)
      console.log(country_c[0].name)
      console.log(countryCurrency[0])

      firebase.updateProfile({
              currency: {
                code: countryCurrency[0],
                country: country_c[0].name,
              },
            });
    
  
   };

  // need to check: https://github.com/react-native-geolocation/react-native-geolocation/tree/1786929f2be581da91082ff857c2393da5e597b3

 

  useEffect(() => {
    // run location function only once
    if (!state.currency) {
      findCurrency();
    }
    
    const unsubscribe = props.navigation.addListener("focus", () => {
      // delete the filtered cards to load them again 
      //so it will always be up to date
      dispatch(actions.deleteMonth());

      console.log("here");
    });

    return unsubscribe;
  });

  //return the screen when everything loaded
  if (isLoaded(cards) && isLoaded(state))
    return <Start navigation={props.navigation} geoLocation={geoLocation}/>;

//shows a loading screen 
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Wallet width="250" height="200" />
    </View>
  );
};


export default StartLS;
