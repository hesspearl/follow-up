import React, { useState, useEffect , useCallback } from "react";
import {View} from "react-native"
import Cart from "../assets/svg/cart.svg";
import { useFirestore } from "react-redux-firebase";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../store/actions/filter";
import {
  currentMonth,
  findMonth,
} from "../components/functional components/LoadingMonth";
import moment from "moment";

import { AdMobInterstitial } from "expo-ads-admob";
import { AD_INTERSTITIAL} from "@env";


import { position } from "../modals/itemsArray";

export const Loading = (props) => {
  const dispatch = useDispatch();
  const cards = useSelector(({ fireStore: { ordered } }) => ordered.Cards);


  const selectCurrentMonth= useCallback(
    () => {
     // const cm = currentMonth();

     const p=position[props.month] 
      const items = findMonth(cards, props.month);
      
      dispatch(actions.rawMonths(items));
      dispatch(actions.filterByMonths(items, p, props.month));
      props.setDone(false);

  }
   ,[props.done]
  )
  //console.log(props.done)
 

  useEffect(() => {
    if (props.done) {
     selectCurrentMonth()
    }
  }, [props.done])
    


  return (
    <View style={{flex:1 , justifyContent:"center", alignItems:"center"}}>
  <Cart width="250" height="200" />
    </View>
  
  );
};

const LoadingScreen = (props) => {
  const [done, setDone] = useState(null);
  const data = useSelector((state) => state.format);
  const { uid } = useSelector((state) => state.firebase.auth);
  const filterState = useSelector((state) => state.filter);
  
  console.log(done)

  const ads = async () => {
    await AdMobInterstitial.setAdUnitID(
      AD_INTERSTITIAL
    ); // Test ID, Replace with your-admob-unit-id
    await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
    await AdMobInterstitial.showAdAsync();
  };
  
  const firestore = useFirestore();

  const update = async() => {
    await firestore
      .collection("users")
      .doc(uid)
      .collection("Cards")
      .add({
        ...data,
        createdAt: firestore.FieldValue.serverTimestamp(),
        date:moment(data.format.date, "DD/MM/YYYY").format('x')
        
      })
      .then(() => {
        setDone(true);
      });
  };

  useEffect(() => {

    
    if (done === false &&  ! filterState.currentMonth.position) {
      
      setDone(true)
 
    }

     if (done=== false &&  !! filterState.currentMonth.position) {
      
      setDone(null)
      props.navigation.navigate("list");
    }
    const unsubscribe = props.navigation.addListener("focus", () => {
      update();
    });

    return unsubscribe
  }, [data, firestore, done]);



  return <Loading done={done} setDone={setDone} month={filterState.selectedMonth}/>;
};

export default LoadingScreen;