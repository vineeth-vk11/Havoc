import React, { useState } from "react";
import { ImageBackground, ScrollView } from "react-native";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { TextInput } from "react-native-paper";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";

import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';

import { Dimensions } from "react-native";
import { ScreenHeight } from "react-native-elements/dist/helpers";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const Register2 = ({ navigation }) => {
  var radio_props = [
    { label: "Male", value: 0 },
    { label: "Female", value: 1 },
    { label: "Prefer not to say", value: 2 },

  ];
  const [value, setvalue] = useState();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const createAlert = (message) =>
    Alert.alert("Enter data", message, [{ text: "OK", onPress: () => { } }], {
      cancelable: false,
    });

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
            <View style={styler.addtionalInfoView}>
              <Text style={styler.text}>Additional Information</Text>
            </View>
            <View style={styler.inputsView}>
              <TextInput
                mode="flat"
                label="What do we call you ?"
                style={styler.name}
                theme={{ colors: { primary: "#7AC141" } }}
                onChangeText={(text) => {
                  setName(text);
                }}
              ></TextInput>

              <TextInput
                mode="flat"
                label="How old are you ?"
                style={styler.name}
                theme={{ colors: { primary: "#7AC141" } }}
                keyboardType="number-pad"
                onChangeText={(text) => {
                  setAge(text);
                }}
              ></TextInput>
            </View>
            <View style={styler.genderView}>
              <Text style={styler.genderText}>Select Your Gender</Text>
            </View>
            <RadioForm
              formHorizontal={false}
              animation={true}
              style={{ marginTop: 16 }}
            >
              {radio_props.map((obj, i) => (
                <RadioButton labelHorizontal={true} key={i}>
                  <View
                    style={{
                      width: "100%",
                      height: "100%",
                      paddingHorizontal: 10,
                    }}
                  >
                    <View style={styler.radioButtons}>
                      <RadioButtonInput
                        obj={obj}
                        index={i}
                        isSelected={value === i}
                        onPress={(value) => {
                          if (value === 0) {
                            setGender("Male");
                          } else if (value == 1) {
                            setGender("Female");
                          }
                          else {
                            setGender("Prefer not to say")
                          }
                          setvalue(value);
                        }}
                        borderWidth={2}
                        buttonInnerColor={"#7AC141"}
                        buttonOuterColor={value === i ? "#7AC141" : "#000000"}
                        buttonSize={12}
                        buttonOuterSize={24}
                        buttonStyle={{ marginRight: 20, marginBottom: 10 }}
                        buttonWrapStyle={{ marginLeft: 10 }}
                      />
                      <RadioButtonLabel
                        obj={obj}
                        index={i}
                        labelHorizontal={true}
                        onPress={(value) => {
                          if (value === 0) {
                            setGender("Male");
                          } else if (value == 1) {
                            setGender("Female");
                          }
                          else {
                            setGender("Prefer not to say")
                          }
                          setvalue(value);
                        }}
                        labelStyle={{
                          fontSize: 20,
                          color: "black",
                          marginBottom: 5,
                        }}
                        labelWrapStyle={{}}
                      />
                    </View>
                  </View>
                </RadioButton>
              ))}
            </RadioForm>
            <View style={styler.getStartedView}>
              <TouchableOpacity
                onPress={() => {
                  if (age !== "" && name !== "" && gender !== "") {
                    if (firebase.auth().currentUser) {
                      var user = firebase.auth().currentUser.uid;

                      firestore()
                        .collection("users")
                        .doc(user)
                        .set({
                          isListener: false,
                          age: Number(age),
                          name: name,
                          gender: gender,
                        })
                        .then(() => {
                          navigation.navigate("Register3");
                        });
                    }
                  } else {
                    createAlert("Please fill all the fields to continue");
                  }
                }}
              >
                <Text style={styler.getStarted}>Get Started</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </ScrollView>
    </ImageBackground>
  );
};

export default Register2;

const styler = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  imageBg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
  },
  getStarted: {
    borderRadius: 15,
    width: 0.85 * screenWidth,
    height: 0.08 * screenHeight,
    backgroundColor: "#7AC141",
    color: "white",
    marginHorizontal: 10,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 20,
    elevation: 5,
    overflow: "hidden",
    paddingVertical: 0.025 * ScreenHeight,
  },
  name: {
    padding: 8,
    borderRadius: 0,
    width: windowWidth - 48,
    height: 55,
    color: "#828282",
    justifyContent: "center",
    backgroundColor: "transparent",
    fontSize: 16,
  },
  addtionalInfoView: {
    flex: 0.1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: windowHeight / 10,
  },
  inputsView: {
    flex: 0.2,
    marginTop: 20,
    marginBottom: 20,
  },
  getStartedView: {
    flex: 0.2,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  genderView: {
    flex: 0.3,
    width: "100%",
    marginHorizontal: 10,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 12,
  },
  genderText: {
    fontSize: 25,
    marginLeft: 10,
  },
  radioButtons: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
});
