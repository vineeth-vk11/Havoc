import React, { useState, useEffect } from "react";
import { ImageBackground, Keyboard, Touchable } from "react-native";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  LogBox,
  Alert,
} from "react-native";
import { Icon } from "react-native-elements";
import { SocialIcon } from "react-native-elements";
import {
  ActivityIndicator,
  TextInput,
  TouchableRipple,
} from "react-native-paper";
import { showMessage, hideMessage } from "react-native-flash-message";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import {
  FirebaseRecaptchaVerifierModal,
  FirebaseRecaptchaBanner,
} from "expo-firebase-recaptcha";
import { BackgroundImage } from "react-native-elements/dist/config";

import firebase from "firebase";
require("firebase/firestore");

import { Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ScreenHeight } from "react-native-elements/dist/helpers";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Register1 = ({ navigation }) => {
  const recaptchaVerifier = React.useRef(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [verificationId, setVerificationId] = useState();
  const firebaseConfig = firebase.apps.length
    ? firebase.app().options
    : undefined;

  const attemptInvisibleVerification = true;

  const createAlert = (title, message) =>
    Alert.alert(title, message, [{ text: "OK", onPress: () => {} }], {
      cancelable: false,
    });

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
          <FirebaseRecaptchaVerifierModal
            ref={recaptchaVerifier}
            firebaseConfig={firebaseConfig}
            attemptInvisibleVerification={attemptInvisibleVerification}
          />
          <View style={styler.havoc}>
            <Image source={require("../assets/logoTB.png")} />
          </View>
          <TextInput
            mode="outlined"
            label="Phone Number"
            style={styler.phoneNumber}
            theme={{
              colors: { primary: "#7AC141", underlineColor: "transparent" },
            }}
            keyboardType="phone-pad"
            onChangeText={(text) => setPhoneNumber(text)}
            // defaultValue={phoneNumber ? "+91 " + phoneNumber : "+91 "} 
            value={phoneNumber}
            
          ></TextInput>
          <TouchableOpacity
            onPress={async () => {
              try {
                const phoneProvider = new firebase.auth.PhoneAuthProvider();
                const otpPhoneNumber = "+91" + phoneNumber
                const verificationId = await phoneProvider.verifyPhoneNumber(
                otpPhoneNumber,
                  recaptchaVerifier.current
                );
                setVerificationId(verificationId);
                navigation.navigate("EnterOTP", {
                  verificationId: verificationId,
                });
              } catch (err) {
                if (err.message === "TOO_SHORT") {
                  createAlert(
                    "Wrong phone number",
                    "Phone number entered is short. Please include your country code and try again."
                  );
                } else {
                  createAlert(
                    "Error",
                    "Unexpected error occured. Please try again."
                  );
                }
              }
            }}
          >
            <Text style={styler.sendOtp}>Get OTP</Text>
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
    // padding: 10,
    width: windowWidth * 0.9,
    height: 52,
    color: "#828282",
    backgroundColor: "#fff",
    justifyContent: "center",
   
  },
  sendOtp: {
    borderRadius: 8,
    width: windowWidth * 0.9,
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
