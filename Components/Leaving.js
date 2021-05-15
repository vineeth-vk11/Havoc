import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions,
  ImageBackground,
  Alert,
} from "react-native";
import { Icon } from "react-native-elements";
import { set } from "react-native-reanimated";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";

import RadioButtonRN from "radio-buttons-react-native";

import firebase from "firebase";
require("firebase/firestore");

var radio_props = [
  {
    label: "I’ve been waiting for long",
    value: 0,
    txt: "We're sorry we couldn't find you a listener in time. It gets tough with many requests. More listeners sign up every day, rest assured we will find you a perfect person if you stay a bit longer",
  },
  {
    label: "I’m Nervous",
    value: 1,
    txt: "Its okay. It is quite stressful to interact with a stranger. But we are here to help and make you feel the best comfort. You will sail through it!",
  },
  {
    label: "Is my information confidential?",
    value: 2,
    txt: "Fear is genuine. And we understand. But your conversations are totally secure. We don't share anything with any third-partners. Your expression is valued and protected",
  },
  {
    label: "I'm not satisfied",
    value: 3,
    txt: "We are sorry you feel this way but maybe second stime's the charm",
  },
];

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const Leaving = ({ navigation }) => {
  const [value, setvalue] = useState();
  const [option, setOption] = useState("");

  const createAlert = () =>
    Alert.alert(
      "Select Option",
      "Please select an option",
      [{ text: "OK", onPress: () => {} }],
      { cancelable: false }
    );

  return (
    <ImageBackground
      source={require("../assets/ss.png")}
      style={styler.imageBg}
    >
      <SafeAreaView style={styler.screen}>
        <View style={styler.sadFaceView}>
          <View style={styler.sadFace}>
            <Image
              style={{
                width: 0.29 * screenWidth,
                height: 0.29 * screenWidth,
              }}
              source={require("../assets/Images/sad.png")}
            />
            <Text
              style={{
                fontSize: 0.026 * screenHeight,
                margin: 0.015 * screenHeight,
                color: "#000",
              }}
            >
              We are sorry to see you leave
            </Text>
          </View>
        </View>

        <View style={styler.formView}>
          <Text style={styler.text}>What went wrong?</Text>
          <RadioButtonRN
            data={radio_props}
            style={{
              marginRight: 0.02 * screenWidth,
            }}
            textStyle={{
              fontSize: 0.02 * screenHeight,
            }}
            selectedBtn={(e) => {
              var v = e["value"];

              if (v === 0) {
                setOption("I've been waiting for long");
              } else if (v === 1) {
                setOption("I'm Nervous");
              } else if (v === 2) {
                setOption("Is my information confidential?");
              } else if (v === 3) {
                setOption("I'm not satisfied");
              }
            }}
            box={false}
            activeColor="#7AC141"
            deactiveColor="#7AC141"
          />
        </View>
        <View style={styler.footView}>
          <TouchableOpacity
            onPress={() => {
              if (option === "") {
                createAlert();
              } else {
                var currentUser = firebase.auth().currentUser.uid;

                firebase
                  .firestore()
                  .collection("MatchingExitFeedback")
                  .add({
                    user: currentUser,
                    reason: option,
                  })
                  .then(() => {
                    firebase
                      .firestore()
                      .collection("users")
                      .doc(currentUser)
                      .get()
                      .then((documentSnapshot) => {
                        var isListener = documentSnapshot.data()["isListener"];

                        if (isListener) {
                          navigation.navigate("ListenerDB");
                        } else {
                          navigation.navigate("Register3");
                        }
                      });
                  });
              }
            }}
          >
            <Text style={styler.done}>Done</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Leaving;
const styler = StyleSheet.create({
  sadFace: {
    alignItems: "center",
    marginTop: 0.07 * screenHeight,
  },
  imageBg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  done: {
    justifyContent: "flex-end",
    borderRadius: 0.022 * screenHeight,
    width: 0.85 * screenWidth,
    height: 0.08 * screenHeight,
    backgroundColor: "#7AC141",
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 0.03 * screenHeight,
    overflow: "hidden",
    paddingVertical: 0.02 * screenHeight,
  },
  screen: {
    flex: 1,
  },
  sadFaceView: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  formView: {
    flex: 0.6,
    padding: 0.01 * screenHeight,
    marginHorizontal: 0.01 * screenHeight,
  },
  footView: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0.015 * screenHeight,
  },
  text: {
    fontSize: 0.03 * screenHeight,
    textAlign: "left",
    margin: 0.015 * screenHeight,
    marginBottom: 0.025 * screenHeight,
  },
  declaration: {
    padding: "1%",
    marginHorizontal: 0.009 * screenHeight,
  },
});
