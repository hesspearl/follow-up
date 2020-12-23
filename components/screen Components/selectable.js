import React, { useState, useEffect, useContext } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import * as actions from "../../store/actions/filter";
import { useFirestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";
import moment from "moment";
import ListLayout from "../screen Components/listLayout";

const Query = {
  collection:"Cards",

  
}
const Selectable = (props) => {
  const { array, filter, navigation, indexOfMonth, store } = props;
  // selected change color to black
  const [selectedMonth, setSelectedMonth] = useState(indexOfMonth);
  // selected change color to black
  const [selectedFilter, setSelectedFilter] = useState();

  const dispatch = useDispatch();
  const state = useSelector((state) => state.filter);
  const { uid } = useSelector((state) => state.firebase.auth);
 

  useFirestoreConnect({
    collection: `users/${uid}/Cards`,
    storeAs: "Cards",
    orderBy:"date"
  });
  const cards = useSelector(({ fireStore: { ordered } }) => ordered.Cards);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      setSelectedFilter();
    });
store({
  ["storing"]:[selectedFilter, setSelectedFilter]
})
    return unsubscribe;
  }, [navigation, selectedFilter]);


  

  //function that return the month selected
  const MonthsHandler = (index) => {
    let items = [];
    setSelectedMonth(index);

    for (const card of cards) {
      let date = moment(card.format.date, "DD/MM/YYYY", true).format();

      if (moment(date).month() === index) {
        if (moment(date).format("DD/MM/YYYY") === card.format.date) {

          
          items.push(card);
        }
      }
    }


    dispatch(actions.selectedMonth(index))
    dispatch(actions.rawMonths(items));
    dispatch(actions.filterByMonths(items));
  };

  // function that handle the filters returns
  const filterHandler = (index) => {
    //setSelectedFilter(index);

    if (!state.months.length) {
      return alert("please choose month, or this month have no items  ");
    }

    switch (filter.type) {
      case "importance":
        
        filtering("important", index);
        break;
      case "necessary":
        filtering("necessary", index);
        break;

      case "price":
        filterPrice(index);
        break;
    }
  };

  const filterLoop=(arr)=>{
    const year = (index) => {
      return moment(arr[index].format.date, "DD/MM/YYYY").year();
    };
    let y;

    //loop
    var i = 0;
    while (i < arr.length) {
      if (year(0) !== year(i) && year(i) != y) {
        y = year(i);

        arr.splice(i, 0, { year: y });

        i++;
      }

      i++;
    }
  }

  const filtering = (item, index) => {
   
    setSelectedFilter(index)
    let f = [];

 
    state.rawMonths
      .filter((i) =>i.format[item].value == filter.array[index])
      .map((i) => f.push(i));

     filterLoop(f)

    if (!f.length) {
      dispatch(actions.deleteFilter());
    } else {
      dispatch(actions.selectFilter(f, item));
    }
  };

  const filterPrice = (index) => {
    setSelectedFilter(index)
    
    let f = [];

    
    // if filter array =1 (highest to lowest)
    if (index === 0) {
    
      state.rawMonths
        .sort((a, b) => b.format?.spend.value - a.format?.spend.value)
        .map((i) => f.push(i));
  
       
      dispatch(actions.selectFilter(f, "price"));
    }

    if (index === 1) {
      state.rawMonths
        .sort((a, b) => a.format?.spend.value - b.format?.spend?.value)
        .map((i) => f.push(i));

      dispatch(actions.selectFilter(f, "price"));
    }
    if (!f.length) {
      dispatch(actions.deleteFilter());
    }
  };

  

  if (filter) {
    return (
      <ListLayout
        array={filter.array}
        selected={selectedFilter}
        Handler={filterHandler}
        width={filter.type === "price" && 180}
        fontSize={filter.type === "price" && 15}
     
      />
    );
  } else {
    return (
      <ListLayout
        array={array}
        selected={selectedMonth}
        Handler={MonthsHandler}
      />
    );
  }
};

export default Selectable;