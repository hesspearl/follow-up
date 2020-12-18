import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFirestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";
import * as actions from "../../store/actions/filter";
import {Loading} from "../../screens/loadingScreen"

const Update = (props) => {
  const [done, setDone] = useState(true)
  const { id } = props.route.params;
  const { uid } = useSelector((state) => state.firebase.auth);
  useFirestoreConnect({
    collection: `users/${uid}/Cards`,
    storeAs: "Cards",
  });

  const dispatch = useDispatch();
  const cards = useSelector(({ fireStore: { ordered } }) => ordered.Cards);
  const state = useSelector((state) => state.filter.months);

 
  useEffect(() => {
    //  get card with same id
    let newData = cards.filter((i) => i.id === id);
    const replace = state.months.findIndex((i) => i.id === newData[0].id);
    state[replace] = newData[0];

    //
    dispatch(actions.deleteFilter());

    if (done=== false &&  !! state.currentMonth.position) {

      setDone(null)
      props.navigation.navigate("list");
    }
  }, [cards, done]);

  return (
    <Loading done={done} setDone={setDone} month={state.selectedMonth} />
  );
};

export default Update;
