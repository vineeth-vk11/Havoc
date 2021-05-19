import React, { useEffect, useState } from "react";
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
} from "react-native";
import { Icon } from "react-native-elements";

import RadioButtonRN from "radio-buttons-react-native";

import firebase from "firebase";
import { min } from "moment";
import { ActivityIndicator } from "react-native-paper";
require("firebase/firestore");

import AnimatedLoader from "react-native-animated-loader";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

var radio_props = [
  { label: "18 - 24 Years", value: 0 },
  { label: "25 - 34 Years", value: 1 },
  { label: "35 - 50 Years", value: 2 },
  { label: "51 years or more", value: 3 },
];

const SetListenerAge = ({ navigation }) => {
  const [value, setvalue] = useState(-1);
  /*const { userName, topic } = route.params;*/
  const [minimumAge, setMinimumAge] = useState();
  const [maximumAge, setMaximumAge] = useState();

  const [loading, setLoading] = useState(true);

  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (loading) {
      var currentUser = firebase.auth().currentUser.uid;
      firebase
        .firestore()
        .collection("users")
        .doc(currentUser)
        .get()
        .then((documentSnapshot) => {
          if (documentSnapshot.data()["minAge"] !== null) {
            var minAge = documentSnapshot.data()["minAge"];

            if (minAge === "18") {
              setvalue(1);
            } else if (minAge === "25") {
              setvalue(2);
            } else if (minAge === "35") {
              setvalue(3);
            } else if (minAge === "51") {
              setvalue(4);
            }
            setLoading(false);
          }
        });
    }
  });

  if (loading) {
    return <ActivityIndicator />;
  }

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
            initial={value}
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
        <AnimatedLoader
          visible={disabled}
          overlayColor="rgba(255,255,255,0.75)"
          source={require("../assets/requesting.json")}
          animationStyle={styler.lottie}
          speed={1}
        >
          <Text>Saving</Text>
        </AnimatedLoader>
        <View style={styler.footView}>
          <TouchableOpacity
            disabled={disabled}
            onPress={() => {
              if (value === -1) {
              } else {
                if (firebase.auth().currentUser) {
                  setDisabled(true);

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
                      setDisabled(false);
                      navigation.navigate("Profile");
                    });
                }
              }
            }}
          >
            <Text style={styler.continue}>Save</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SetListenerAge;

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
  lottie: {
    width: 100,
    height: 100,
  },
});
