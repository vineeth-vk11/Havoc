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
import FlashMessage from "react-native-flash-message";

import {
  FirebaseRecaptchaVerifierModal,
  FirebaseRecaptchaBanner,
} from "expo-firebase-recaptcha";
import { BackgroundImage } from "react-native-elements/dist/config";

import firebase from "firebase";
require("firebase/firestore");

import { Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Register1 = ({ navigation }) => {
  const recaptchaVerifier = React.useRef(null);
  const [phoneNumber, setPhoneNumber] = useState();
  const [verificationId, setVerificationId] = useState();
  const firebaseConfig = firebase.apps.length
    ? firebase.app().options
    : undefined;

  const attemptInvisibleVerification = true;

  return (
    <ImageBackground
      source={require("../assets/ss.png")}
      style={styler.imageBg}
    >
      <ScrollView>
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
              value={phoneNumber}
            ></TextInput>
            <TouchableOpacity
              onPress={async () => {
                try {
                  const phoneProvider = new firebase.auth.PhoneAuthProvider();
                  const verificationId = await phoneProvider.verifyPhoneNumber(
                    phoneNumber,
                    recaptchaVerifier.current
                  );
                  setVerificationId(verificationId);
                  navigation.navigate("EnterOTP", {
                    verificationId: verificationId,
                  });
                } catch (err) {
                  showMessage({
                    message: "Enter mobile number with country code",
                    type: "info",
                  });
                  console.log(err);
                }
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
              <TouchableOpacity>
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
            <FlashMessage position="top" style={{ marginTop: 30 }} />
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </ScrollView>
    </ImageBackground>
  );
};

export default Register1;
const styler = StyleSheet.create({
  screen: {
    alignItems: "center",
    flex: 1,
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
    width: windowWidth - 48,
    height: 52,
    color: "#828282",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  sendOtp: {
    borderRadius: 8,
    width: windowWidth - 48,
    height: 45,
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
