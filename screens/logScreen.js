import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  ActivityIndicator
} from "react-native";
import LogButton from "../components/custom components/logButton";
import Input from "../components/custom components/logInput";
import { ResetPass } from "../components/screen Components/resetPass";
import Search from "../assets/svg/search.svg";
//import { ANDROID_CLIENT_ID } from "@env";
import { useFirebase } from "react-redux-firebase";
import { useSelector } from "react-redux";
//import * as Google from "expo-google-app-auth";




// first screen show , have log in / sign up components

const LogScreen = (props) => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showTitle, setShowTitle] = useState(true);
  //height of bottom sheet
  const [height, setHeight] = useState(410);
  const [showResetPass, setShowResetPass] = useState(false);

// listener to when keyboard open 
  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    };
  }, [Keyboard]);

  //change bottom sheet height accord to keyboard state
  const _keyboardDidShow = () => {
    setShowTitle(false)
    setHeight(500);
    
  };

  const _keyboardDidHide = () => {
    setHeight(410);
    setShowTitle(true)
  };



  return (
    <View style={styles.container}>
     {showTitle&& <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ ...styles.title }}>Follow</Text>
        <Text style={{ ...styles.title, fontFamily: "SpartanBold" }}>Up</Text>
      </View>}
      <View style={{ ...styles.bottom, height: height }}>
        {!showSignIn && !showResetPass && (
          <Login
            show={setShowSignIn}
            showReset={setShowResetPass}
            navigation={props.navigation}
          />
        )}
        {showSignIn && <SignIn show={setShowSignIn} />}
        {showResetPass && <ResetPass show={setShowResetPass} />}
      </View>
    </View>
  );
};


//log in component 

const Login = (props) => {
  const firebase = useFirebase();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // log in with email and password
  const logIn = () => {
    firebase
      .login({
        email: userEmail,
        password: userPassword,
      })

      .catch((err) => {
        alert(err);
      });
  };

  // log in with google account 
  const google = async () => {
    setLoading(true);
    try {
      const { accessToken, idToken, type } = await Google.logInAsync({
        androidClientId: ANDROID_CLIENT_ID,
        scopes: ["profile", "email"],
      });

      if (type === "success") {
        setLoading(false);

        firebase.login({
          credential: firebase.auth.GoogleAuthProvider.credential(
            idToken,
            accessToken
          ),
        });
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      console.log(e);
    }
  };

  const signInWithGoogle = () => {
    google();
  };

  return (
    <View>
      <Input
        name="mail"
        title="Enter your email"
        onChangeText={(text) => setUserEmail(text)}
      />

      <Input
        name="lock"
        title="Enter password"
        secureTextEntry={true}
        onChangeText={(text) => setUserPassword(text)}
      />
      <TouchableOpacity onPress={() => props.showReset(true)}>
        <Text style={styles.text}>forgot your password?</Text>
      </TouchableOpacity>

      <LogButton title="Log in" onPress={logIn} />
      <TouchableOpacity onPress={() => props.show(true)}>
        <Text style={styles.text}>you don't have account? click here</Text>
      </TouchableOpacity>

      <View
        style={{
          alignItems: "center",
          justifyContent: "space-evenly",
          flex: 1,
        }}
      >
        <Text style={styles.text}>- or -</Text>
        {!loading ? (
          <TouchableOpacity onPress={() => signInWithGoogle()}>
            <Search style={{ width: 30, height: 30 }} />
          </TouchableOpacity>
        ) : (
          <ActivityIndicator />
        )}
      </View>
    </View>
  );
};


// sign in component 
const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");

  const firebase = useFirebase();

  const sign = () => {
    //test validation
    const regEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!password || !email || !username || !confirmPassword) {
      alert("please don't let field empty");
      return;
    }

    if (!regEmail.test(email.toLowerCase())) {
      alert("not valid email");
      return;
    }

    if (confirmPassword != password) {
      alert("password not matching");
      return;
    } else {
      props.show(false);
      firebase.createUser(
        { email, password },
        { displayName: username, email }
      );
    }
  };

  return (
    <View>
      <Input
        name="user"
        title="Enter user name"
        onChangeText={(text) => setUsername(text)}
        type="name"
      />
      <Input
        name="mail"
        title="Enter your email"
        onChangeText={(text) => setEmail(text)}
        type="email"
      />
      <Input
        name="lock"
        title="Enter password"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        type="password"
      />
      <Input
        name="lock"
        title="Enter password again"
        secureTextEntry={true}
        type="password"
        onChangeText={(text) => setConfirmPassword(text)}
      />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <LogButton title="return" onPress={() => props.show(false)} />
        <LogButton title="sign up" onPress={sign} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "space-between", alignItems: "center" },
  image: { width: 300, height: 200 },
  title: { fontSize: 60, fontFamily: "Spartan" },
  bottom: {
    backgroundColor: "white",
    width: "90%",
    borderTopWidth: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    marginTop: 10,
    alignItems: "center",
    paddingTop: 10,
  },

  text: {
    fontSize: 14,
    fontFamily: "SpartanBold",
    marginHorizontal: 15,
  },
});
export default LogScreen;