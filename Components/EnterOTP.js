import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import {
  Keyboard,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  Alert,
} from "react-native";

import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';

import { Dimensions } from "react-native";
import { ScreenHeight } from "react-native-elements/dist/helpers";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const EnterOTP = ({ navigation, route }) => {
  const { confirm } = route.params
  const [code, setCode] = useState('');

  const createAlert = (message) =>
    Alert.alert("Wrong OTP", message, [{ text: "OK", onPress: () => { } }], {
      cancelable: false,
    });

  async function confirmCode() {
    try {

      await confirm.confirm(code);

      if (firebase.auth().currentUser) {
        var user = firebase.auth().currentUser.uid;

        firestore()
          .collection("users")
          .doc(user)
          .get()
          .then((documentSnapshot) => {
            if (!documentSnapshot.exists) {
              navigation.navigate("Register2");
            } else {
              if (documentSnapshot.data()["isListener"]) {
                navigation.navigate("ListenerDB");
              } else {
                navigation.navigate("Register3");
              }
            }
          });
      }

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ImageBackground
      source={require("../assets/ss.png")}
      style={styler.imageBg}
    >
      <View style={styler.screen}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <View style={styler.havoc}>
            <Image source={require("../assets/logoTB.png")} />
          </View>
          <View style={{ alignItems: "center" }}>
            <TextInput
              mode="outlined"
              label="Enter OTP"
              theme={{
                colors: { primary: "#7AC141", underlineColor: "transparent" },
              }}
              keyboardType="number-pad"
              style={styler.name}
              onChangeText={(text) => setCode(text)}
              value={code}
            />
          </View>
        </TouchableWithoutFeedback>

        <View style={styler.getStartedView}>
          <TouchableOpacity
            onPress={() => {
              confirmCode()
            }}
          >
            <Text style={styler.getStarted}>VERIFY</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default EnterOTP;

const styler = StyleSheet.create({
  getStarted: {
    borderRadius: 7,
    width: windowWidth - 48,
    height: 0.065 * windowHeight,
    backgroundColor: "#7AC141",
    color: "white",
    marginVertical: 0.015 * windowHeight,
    marginHorizontal: 20,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 0.022 * windowHeight,
    elevation: 5,
    padding: 0.015 * windowHeight,
    overflow: "hidden",
    paddingVertical: 0.02 * ScreenHeight,
  },
  imageBg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  getStartedView: {
    alignItems: "center",
    marginVertical: 0.015 * windowHeight,
  },
  screen: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    borderColor: "black",
    borderRadius: 0,
    width: windowWidth - 48,
    height: 52,
    color: "#828282",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  havoc: {
    alignSelf: "center",
    justifyContent: "center",
    margin: 0.08 * windowHeight,
  },
});
