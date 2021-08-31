import React, { useState, useEffect } from "react";
import { ImageBackground, Keyboard } from "react-native";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";

import { Dimensions } from "react-native";
import { ScreenHeight } from "react-native-elements/dist/helpers";

import PhoneInput from "react-native-phone-number-input";

import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { appleAuth, AppleButton } from '@invertase/react-native-apple-authentication';

import { GoogleSignin } from '@react-native-google-signin/google-signin';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Register1 = ({ navigation }) => {

  const createAlert = (title, message) =>
    Alert.alert(title, message, [{ text: "OK", onPress: () => { } }], {
      cancelable: false,
    });

  const [phoneNumber, setPhoneNumber] = useState("");
  const phoneInput = React.useRef(null);

  const [confirm, setConfirm] = useState(null);

  async function signInWithPhoneNumber() {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    navigation.navigate("EnterOTP", {
      confirm: confirmation
    })
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  function onAuthStateChanged(user) {
    if (user) {
      var userId = firebase.auth().currentUser.uid;
      firestore()
        .collection("users")
        .doc(userId)
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
  }

  GoogleSignin.configure({
    webClientId: '349911897247-uhc0dvc7hrvatbq9ts5d9hr2s6insdl4.apps.googleusercontent.com',
  });

  async function onGoogleButtonPress() {
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
  }

  async function onAppleButtonPress() {
    // Start the sign-in request
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    });

    // Ensure Apple returned a user identityToken
    if (!appleAuthRequestResponse.identityToken) {
      throw 'Apple Sign-In failed - no identify token returned';
    }

    // Create a Firebase credential from the response
    const { identityToken, nonce } = appleAuthRequestResponse;
    const appleCredential = auth.AppleAuthProvider.credential(identityToken, nonce);

    // Sign the user in with the credential
    return auth().signInWithCredential(appleCredential);
  }

  return (
    <ImageBackground
      source={require("../assets/ss.png")}
      style={styler.imageBg}
    >
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <SafeAreaView style={styler.screen}>
          <View style={styler.havoc}>
            <Image source={require("../assets/logoTB.png")} />
          </View>

          <PhoneInput
            ref={phoneInput}
            defaultValue={phoneNumber}
            defaultCode="IN"
            onChangeFormattedText={(text) => {
              setPhoneNumber(text);
            }}
            withDarkTheme
            withShadow
            autoFocus
            layout="second"
          />
          <TouchableOpacity
            onPress={() => {
              signInWithPhoneNumber()
            }}
          >
            <Text style={styler.sendOtp}>Get OTP</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <View style={styler.lineStyle} />
            <View style={styler.lineStylew} />
            <Text>OR</Text>
            <View style={styler.lineStyle} />
          </View>
          <TouchableOpacity>
            <TouchableOpacity onPress={() => {
              onGoogleButtonPress()
            }}>
              <View style={styler.continueWithEmail}>
                <Image
                  source={require("../assets/Images/icons8-google-48.png")}
                  style={{ width: 40, height: 40, marginLeft: 10 }}
                />
                <View style={styler.textView}>
                  <Text style={styler.textSignIn}>Sign In</Text>
                </View>
              </View>
            </TouchableOpacity>
          </TouchableOpacity>

          <TouchableOpacity>
            <TouchableOpacity onPress={() => {
              onAppleButtonPress()
            }}>
              <View style={styler.continueWithEmail}>
                <Image
                  source={require("../assets/Images/icons8-apple-logo-48.png")}
                  style={{ width: 40, height: 40, marginLeft: 10 }}
                />
                <View style={styler.textView}>
                  <Text style={styler.textSignIn}>Sign In</Text>
                </View>
              </View>
            </TouchableOpacity>
          </TouchableOpacity>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

export default Register1;
const styler = StyleSheet.create({
  screen: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  imageBg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  phoneNumber: {
    padding: 10,
    width: windowWidth - 24,
    height: 52,
    color: "#828282",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  sendOtp: {
    borderRadius: 8,
    width: windowWidth - 48,
    height: 0.065 * windowHeight,
    backgroundColor: "#7AC141",
    color: "white",
    margin: 20,
    textAlign: "center",
    textAlignVertical: "center",
    alignContent: "center",
    alignItems: "center",
    fontSize: 20,
    elevation: 5,
    padding: 10,
    overflow: "hidden",
    paddingVertical: 0.02 * ScreenHeight,
  },
  lineStyle: {
    borderWidth: 0.4,
    width: 125,
    borderColor: "black",
    marginHorizontal: 15,
    marginBottom: 30,
    marginTop: 10,
    borderColor: "#828282",
  },
  lineStylew: {
    marginVertical: 0,
  },
  continueWithEmail: {
    borderRadius: 5,
    width: windowWidth - 48,
    height: 50,
    backgroundColor: "white",
    color: "grey",
    margin: 20,
    marginTop: 10,
    fontSize: 16,
    elevation: 5,
    overflow: "hidden",
    textAlign: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  havoc: {
    justifyContent: "center",
    marginTop: windowHeight / 8,
    marginBottom: 32,
  },
  textSignIn: {
    color: "grey",
    fontSize: 18,
    textAlign: "center",
  },
  textView: {
    width: 260,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
