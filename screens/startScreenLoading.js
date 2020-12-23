import React, { useEffect, useState } from "react";
import { View } from "react-native";
//import * as Location from "expo-location";
import Location from '@react-native-community/geolocation';
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
  const [country, setCountry] = useState(null);
  const auth = useSelector((state) => state.firebase.auth);
  const state = useSelector((state) => state.firebase.profile);
  const filterState = useSelector((state) => state.filter);
  const cards = useSelector(({ fireStore: { ordered } }) => ordered.Cards);
  const firebase = useFirebase();
  const dispatch = useDispatch();

  // sort by timestamp
  useFirestoreConnect({
    collection: `users/${auth.uid}/Cards`,
    storeAs: "Cards",
    orderBy: "date",
  });


  // currency API
  const currency = require("../modals/country-by-currency-code.json");
  const curCode = currency.filter((item) => item.country === country);

  //find user location to get what currency is using 
  const location = async () => {
    let { status } = Location.requestAuthorization();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
    }
    if (state.currency) {
      return;
    }


// need to check: https://github.com/react-native-geolocation/react-native-geolocation/tree/1786929f2be581da91082ff857c2393da5e597b3
    try {
      let location = await Location.getCurrentPositionAsync({});
      let country = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      setCountry(country[0].country);
    } catch (error) {
      alert(error);
    }

    if (country) {
      firebase.updateProfile({
        currency: {
          code: curCode[0].currency_code,
          country: curCode[0].country,
        },
      });
    }
  };

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
    return <Start navigation={props.navigation} />;

//shows a loading screen 
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Wallet width="250" height="200" />
    </View>
  );
};


export default StartLS;
