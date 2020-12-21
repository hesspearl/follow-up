import React, { useRef, useState, useEffect, useContext } from "react";
import { View, TouchableOpacity, StyleSheet, Text, Modal } from "react-native";
import Tooltip from "../customComp/tooltip";
import { important, necessary, icons, price } from "../../modals/itemsArray";
import * as actions from "../../store/actions/filter";
import { useDispatch  } from "react-redux";
import {MyContext} from "../../context"
import size from "../../size"

const ListIcons = (props) => {
  const { filterItem, refScroll, showToast, positionX } = props;

  const [colors, setColor] = useState();
  const [filter, setFilter] = useState();
const{["storing"]: [data, setData]}= useContext(MyContext)




  const dispatch = useDispatch();

  // rest color and pressed to default
  // when no filter is selected
  useEffect(() => {
    if (!filter && colors == "black") {
      setColor("white");
    }

    filterItem(filter);
  }, [filter]);

  //filtering function
  const filtering = (arr, type, i) => {
    refScroll.scrollTo({ x: 0 });
    setColor({ color: "black", index: i });

    //array is from items array component
    //type the type of selected button
    return setFilter({ array: arr, type: type });
  };

  //return selected category array

  const onPress = (index, title) => {

    switch (title) {

      case "importance":
        filtering(important, "importance", index);

        break;

      case "necessary":
        filtering(necessary, "necessary", index);

        break;

      case "price":
        filtering(price, "price", index);

        break;

      case "monthly":
        setFilter(undefined);
        dispatch(actions.deleteFilter());
        if (filter) setColor("blue");
        setTimeout(() => {
          refScroll.scrollTo({ x: positionX });
        }, 100);
        break;
    }

    return;
  };

  return (
    <View style={{ ...styles.iconsContainer, marginBottom: 15 }}>
      {icons.map((item, index) => (
        <View key={index}>
          <View style={{ alignItems: "center", flexDirection: "column" }}>
            <Tooltip tip={item.title}>
              <TouchableOpacity
              onPressIn={()=> dispatch(actions.deleteFilter(), setData())}
                onPress={() => onPress(index, item.title)}
                onLongPress={() =>
                  showToast({ value: true, title: item.title })
                }
                onPressOut={() => showToast({ value: false, title: "" })}
              >
                {item.icon}
              </TouchableOpacity>
            </Tooltip>
            <View
              style={{
                ...styles.selected,
                backgroundColor:
                  colors?.index === index ? colors.color : item.color,
              }}
              />
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  selected: {
    width: 60,
    height: 10,

    marginTop: 5,
  },
  iconsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    height: "10%",
    alignItems: "center",
    marginTop: size.height<550 ?10 : null
 
  },
});
export default ListIcons;