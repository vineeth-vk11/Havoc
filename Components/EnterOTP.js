import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import {
  Keyboard,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { showMessage, hideMessage } from "react-native-flash-message";

import * as firebase from "firebase";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const EnterOTP = ({
  route: {
    params: { verificationId },
  },
  navigation,
}) => {
  const [verificationCode, setVerificationCode] = useState();

  return (
    <View style={styler.screen}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={styler.havoc}>
          <Image source={require("../assets/Images/HavocTherapy.png")} />
        </View>
        <View style = {{alignItems: "center"}}>
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
                navigation.navigate("Register3");
              } catch (err) {
                console.log(err);
                showMessage({
                  message: "OTP validation failed",
                  type: "info",
                });
              }
            }}
          >
            <Text style={styler.getStarted}>VERIFY</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};

export default EnterOTP;

const styler = StyleSheet.create({
  getStarted: {
    borderRadius: 7,
    width: 310,
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
    overflow: "hidden"
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
    width: "80%",
    height: 55,
    color: "#828282",
    justifyContent: "center",
    backgroundColor: "#fff",
    fontSize: 16,
  },
  havoc: {
    justifyContent: "center",
    margin: 50,
  },
});
