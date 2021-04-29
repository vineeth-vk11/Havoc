import React, { useState } from "react";
import { Keyboard, Touchable } from "react-native";
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
import { TextInput, TouchableRipple } from "react-native-paper";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Register1 = ({ navigation }) => {
  const [phoneNo, setphoneNo] = useState();
  return (
    <SafeAreaView style={styler.screen}>
      <View style={styler.havoc}>
        <Image source={require("../assets/Images/HavocTherapy.png")} />
      </View>
      <TextInput
        mode="outlined"
        label="Phone Number"
        style={styler.phoneNumber}
        theme={{
          colors: { primary: "#7AC141", underlineColor: "transparent" },
        }}
        keyboardType="number-pad"
        onChangeText={(text) => setphoneNo(text)}
        value={phoneNo}
      ></TextInput>
      <TouchableOpacity onPress={() => navigation.navigate("EnterOTP")}>
        <Text style={styler.sendOtp}>Get OTP</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: "row" }}>
        <View style={styler.lineStyle} />
        <View style={styler.lineStylew} />
        <Text>OR</Text>
        <View style={styler.lineStyle} />
      </View>
      <View>
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
      </View>
    </SafeAreaView>
  );
};

export default Register1;
const styler = StyleSheet.create({
  screen: {
    alignItems: "center",
    flex: 1,
  },
  phoneNumber: {
    padding: 10,
    width: 310,
    height: 52,
    color: "#828282",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  sendOtp: {
    borderRadius: 8,
    width: 310,
    height: 45,
    backgroundColor: "#7AC141",
    color: "white",
    margin: 20,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 20,
    elevation: 5,
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
    width: 310,
    height: 50,
    backgroundColor: "white",
    color: "grey",
    margin: 20,
    fontSize: 16,
    elevation: 5,
    textAlign: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  havoc: {
    justifyContent: "center",
    margin: 50,
  },
  textSignIn: {
    color: "grey",
    fontSize: 18,
    alignSelf: "center",
    marginRight: 50,
  },
  textView: {
    width: 260,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
