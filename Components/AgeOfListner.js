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
  ImageBackground,
  Dimensions,
  Alert,
} from "react-native";
import { Icon } from "react-native-elements";

import firebase from "firebase";
require("firebase/firestore");

import RadioButtonRN from "radio-buttons-react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

var radio_props = [
  { label: "18 - 24 Years", value: 0 },
  { label: "25 - 34 Years", value: 1 },
  { label: "35 - 50 Years", value: 2 },
  { label: "51 years or more", value: 3 },
];

const AgeOfListner = ({ navigation, route }) => {
  const [value, setvalue] = useState(-1);
  /*const { userName, topic } = route.params;*/
  const [minimumAge, setMinimumAge] = useState("");
  const [maximumAge, setMaximumAge] = useState("");

  const { userName, topic } = route.params;

  const createAlert = () =>
    Alert.alert(
      "No Option Selected",
      "Please select an age group to continue",
      [{ text: "OK", onPress: () => {} }],
      {
        cancelable: false,
      }
    );

  return (
    <SafeAreaView style={styler.screen}>
      <ImageBackground
        source={require("../assets/ss.png")}
        style={styler.image}
      >
        <View style={styler.headView}>
          <View style={styler.head}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack(null);
              }}
            >
              <Icon
                name="arrow-back"
                type="ionicon"
                color="#000000"
                size={0.04 * screenHeight}
                style={{ marginLeft: 0.039 * screenHeight }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styler.textView}>
          <Text style={styler.age}>Age of listener</Text>
          <Text style={styler.set}>(Set Your Preference)</Text>
        </View>
        <View style={styler.formView}>
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
                setMinimumAge("18");
                setMaximumAge("24");
              } else if (v === 1) {
                setMinimumAge("25");
                setMaximumAge("34");
              } else if (v === 2) {
                setMinimumAge("35");
                setMaximumAge("50");
              } else if (v === 3) {
                setMinimumAge("51");
                setMaximumAge("100");
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
              if (minimumAge === "") {
                createAlert();
              } else {
                if (firebase.auth().currentUser) {
                  var user = firebase.auth().currentUser.uid;

                  firebase
                    .firestore()
                    .collection("users")
                    .doc(user)
                    .set(
                      {
                        minAge: minimumAge,
                        maxAge: maximumAge,
                      },
                      { merge: true }
                    )
                    .then(() => {
                      navigation.navigate("HowYouFeel", {
                        userName: userName,
                        topic: topic,
                        minAge: maximumAge,
                        maxAge: minimumAge,
                      });
                    });
                }
              }
            }}
          >
            <Text style={styler.continue}>CONTINUE</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default AgeOfListner;

const styler = StyleSheet.create({
  head: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 0.06 * screenHeight,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  age: {
    fontSize: 20,
    textAlign: "left",
    fontWeight: "bold",
    marginTop: 0.05 * screenHeight,
    marginLeft: 0.028 * screenHeight,
  },
  set: {
    fontSize: 15,
    textAlign: "left",
    marginLeft: 0.028 * screenHeight,
  },
  continue: {
    justifyContent: "flex-end",
    borderRadius: 0.022 * screenHeight,
    width: 0.85 * screenWidth,
    height: 0.08 * screenHeight,
    backgroundColor: "#7AC141",
    color: "white",
    margin: 0.04 * screenHeight,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 20,
    overflow: "hidden",
    paddingVertical: 0.025 * screenHeight,
  },
  screen: {
    flex: 1,
    flexDirection: "column",
  },
  headView: {
    flex: 0.15,
  },
  textView: {
    flex: 0.15,
    marginLeft: 0.015 * screenHeight,
  },
  formView: {
    flex: 0.3,
    marginTop: 0.01 * screenHeight,
    marginLeft: 0.028 * screenHeight,
  },
  footView: {
    flex: 0.4,
    justifyContent: "flex-end",
    marginBottom: 0.07 * screenHeight,
  },
});
