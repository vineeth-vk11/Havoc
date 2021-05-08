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

import firebase from "firebase";
require("firebase/firestore");

import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const EnterOTP = ({
  route: {
    params: { verificationId },
  },
  navigation,
}) => {
  const [verificationCode, setVerificationCode] = useState();

  const createAlert = () =>
    Alert.alert(
      "Wrong OTP",
      "Please Enter Correct OTP",
      [{ text: "OK", onPress: () => {} }],
      { cancelable: false }
    );

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
              onChangeText={(text) => setVerificationCode(text)}
              value={verificationCode}
            />
          </View>
        </TouchableWithoutFeedback>

        <View style={styler.getStartedView}>
          <TouchableOpacity
            onPress={async () => {
              try {
                const credential = firebase.auth.PhoneAuthProvider.credential(
                  verificationId,
                  verificationCode
                );
                console.log("waiting to login");
                await firebase.auth().signInWithCredential(credential);
                console.log("waiting to navigate");

                if (firebase.auth().currentUser) {
                  var user = firebase.auth().currentUser.uid;

                  firebase
                    .firestore()
                    .collection("users")
                    .doc(user)
                    .get()
                    .then((documentSnapshot) => {
                      if (!documentSnapshot.exists) {
                        navigation.navigate("Register2");
                        console.log("Hi");
                      } else {
                        if (documentSnapshot.data()["isListener"]) {
                          navigation.navigate("ListenerDB");
                        } else {
                          navigation.navigate("Register3");
                        }
                      }
                    });
                }
              } catch (err) {
                createAlert();
                console.log(err);
              }
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
    height: 45,
    backgroundColor: "#7AC141",
    color: "white",
    marginVertical: 20,
    marginHorizontal: 20,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 15,
    elevation: 5,
    padding: 10,
    overflow: "hidden",
  },
  imageBg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  getStartedView: {
    alignItems: "center",
    marginVertical: 10,
  },
  screen: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    borderColor: "black",
    borderRadius: 0,
    width: windowWidth - 48,
    height: 55,
    color: "#828282",
    justifyContent: "center",
    backgroundColor: "#fff",
    fontSize: 16,
  },
  havoc: {
    alignSelf: "center",
    justifyContent: "center",
    margin: 50,
  },
});
