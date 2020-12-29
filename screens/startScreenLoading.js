import React, { useEffect, useState } from "react";
import { View , PermissionsAndroid} from "react-native";
//import * as Location from "expo-location";
import Geolocation from '@react-native-community/geolocation';
import Geocoder from '@timwangdev/react-native-geocoder';
import {
  useFirebase,
  useFirestoreConnect,
  isLoaded,
} from "react-redux-firebase";
import { useDispatch, useSelector } from "react-redux";
import Wallet from "../assets/svg/wallet.svg";
import * as actions from "../store/actions/filter";
import Start from "./startScreen";

import Icon from 'react-native-vector-icons';

// this screen show first after log in
const StartLS = (props) => {
 // const [country, setCountry] = useState(null);
 const [geoLocation, setGeoLocation] = useState(null)
  const auth = useSelector((state) => state.firebase.auth);
  const state = useSelector((state) => state.firebase.profile);
  const filterState = useSelector((state) => state.filter);
  const cards = useSelector(({ fireStore: { ordered } }) => ordered.Cards);
  const firebase = useFirebase();
  const dispatch = useDispatch();
// console.log(geoLocation)
  // sort by timestamp
  useFirestoreConnect({
    collection: `users/${auth.uid}/Cards`,
    storeAs: "Cards",
    orderBy: "date",
  });

  

  // currency API
  const currency = require("../modals/country-by-currency-code.json");
  //const curCode = currency.filter((item) => item.country === country);

  //find user location to get what currency is using 
  const location = async () => {
    let granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Location Access Required',
        message: 'This App needs to Access your location',
      },
    );
    if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
      alert("Permission to access location was denied");
    }

    if (state.currency) {
      return;
    }


// need to check: https://github.com/react-native-geolocation/react-native-geolocation/tree/1786929f2be581da91082ff857c2393da5e597b3
    
      Geolocation.getCurrentPosition( (position) => {

          
          // //getting the Longitude from the location json
          const currentLongitude =position.coords.longitude
      
          // //getting the Latitude from the location json
          const currentLatitude =position.coords.latitude

            setGeoLocation({
            lat:currentLatitude,
            lng: currentLongitude
          })
        
      

         }
         , (error) => alert(error.message), { 
           enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 
         }
       
         
  
      )
      
   

  }
  

  // const findCurrency=async()=>{
    
    

  
  //     const res= await Geocoder.geocodePosition(geoLocation, {fallbackToGoogle:true})
  //     res is an Array of geocoding object (see below)
    
  //     console.log(res)
    
  //    setCountry(country[0].country);
  //   }
 
  //   if (country) {
  //     firebase.updateProfile({
  //       currency: {
  //         code: curCode[0].currency_code,
  //         country: curCode[0].country,
  //       },
  //     });
  //   }
  // };

  useEffect(() => {
    // run location function only first time
    if (!state.currency) {
      location();
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
