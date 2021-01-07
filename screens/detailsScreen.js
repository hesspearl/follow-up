import React, { useRef, useContext } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useFirestore, isLoaded } from "react-redux-firebase";
import TitleText from "../components/custom components/titleText";
import ToolTip from "../components/custom components/tooltip";
import CircleButton from "../components/custom components/circleButton";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  ImportantLabels,
  NecessaryLabels,
} from "../components/screen Components/labels";
import { useDispatch, useSelector } from "react-redux";
import { deletedItem } from "../store/actions/filter";

const size = { width: 250, height: 40 };

const DetailsScreen = (props) => {
  const firestore = useFirestore();
  const { data, id, refTo } = props;
  const ref2 = useRef();
  const ref = useRef();
  const dispatch = useDispatch();
  const { uid } = useSelector((state) => state.firebase.auth);

 
  const edit = () => {
    refTo.current.snapTo(2);
    props.navigation.navigate("Edit", { dataId: data, id: id });
  };

  const deleteCard = () => {
    firestore.collection("users").doc(uid).collection("Cards").doc(id).delete();
    dispatch(deletedItem(id));
    
    refTo.current.snapTo(2);
  };

  return (
    <View style={styles.container}>
      <View style={{ ...styles.content, marginTop: 20 }}>
        <CircleButton
          onPress={deleteCard}
          img={{ width: 35, height: 35 }}
          style={styles.icons}
          name="delete"
        />
        <View style={{ elevation: 10 }}>
          <Image
            style={styles.image}
            source={{ uri: data.application.avatar }}
          />
        </View>

        <CircleButton
          onPress={edit}
          img={{ width: 35, height: 35 }}
          style={styles.icons}
          name="pencil"
        />
      </View>

      <View style={styles.imageContainer}>
        <ToolTip forwardRef={ref} tip={data.productName} size={size}>
          <TouchableOpacity onPress={() => ref.current.toggleTooltip()}>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={{
                ...styles.title,
                fontSize: 25,
                fontFamily: "SpartanBold",
              }}
            >
              {data.productName}
            </Text>
          </TouchableOpacity>
        </ToolTip>
        <View style={{flexDirection:"row"}}>
            <Text style={{ ...styles.title, marginBottom: 20, fontSize: 20 }}>
          {" "}
          {data.spend.code}
        </Text>
        <Text style={{ ...styles.title, marginBottom: 20, fontSize: 20 }}>
          {" "}
          {data.spend.value}
        </Text>
        </View>
      
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.rowContain}>
          <ImportantLabels type={data.important.value} />
          <NecessaryLabels type={data.necessary.value} />
        </View>

        <View style={styles.content}>
          <View style={{ flexDirection: "column", width: "40%" }}>
            <View>
              <TitleText title="Date" />
              <Text style={styles.title}> {data.date}</Text>
            </View>
            <View>
              <TitleText title="Application" />
              <Text style={styles.title}> {data.application.value}</Text>
            </View>
          </View>

          <View style={{ flexDirection: "column", width: "40%" }}>
            {/* <View>
              <TitleText title="Attachment" />
              <Text style={styles.note}>add an attachment </Text>
            </View> */}

            <View style={{ marginBottom: 20 }}>
              <TitleText title="Observation" />

              {data.observation.length === 0 ? (
                <Text style={styles.note}>add an observation </Text>
              ) : (
                <ToolTip forwardRef={ref2} tip={data.observation} size={size}>
                  <TouchableOpacity
                    onPress={() => ref2.current.toggleTooltip()}
                  >
                    <Text
                      numberOfLines={3}
                      ellipsizeMode="tail"
                      style={{ ...styles.title, width: 180 }}
                    >
                      {data.observation}
                    </Text>
                  </TouchableOpacity>
                </ToolTip>
              )}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //height: "80%",
    width: "100%",
    backgroundColor: 'white',
    //marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "Spartan",
    fontSize: 15,
    // marginVertical:5
  },
  imageContainer: {
    width: "90%",
    // height: "50%",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#979797",
    // padding:10
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    margin: 10,
  },

  contentContainer: {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    margin: 20,
  },

  rowContain: {
    flexDirection: "row",
    width: "100%",
    // height: "20%",
    alignItems: "flex-end",
    //margin:10,

    paddingBottom: 20,
    justifyContent: "space-evenly",
  },
  note: {
    fontFamily: "Spartan",
    fontSize: 15,
    width: 300,
    color: "#A8A2A2",
    // marginVertical:5,
  },

  icons: {
    width: 55,
    height: 55,
    //backgroundColor: colors.icons,
    borderWidth: 0,
  },
});
export default DetailsScreen;