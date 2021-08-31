import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  ImageBackground,
  Alert,
} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

import { SafeAreaView } from "react-native-safe-area-context";

import { Icon } from "react-native-elements";

import RadioButtonRN from "radio-buttons-react-native";

import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const Quiz4 = ({ navigation, route }) => {
  const {
    firstName,
    lastName,
    email,
    city,
    country,
    bio,
    list,
    answer1,
    answer2,
    answer3,
  } = route.params;

  const [isPlaying, setisPlaying] = useState(false);
  const playingVideo = useCallback(() => {
    setisPlaying((prev) => !prev);
  }, [isPlaying]);
  const videoEnded = useCallback(
    (state) => {
      if (state === "ended") {
        setisPlaying(false);
      }
    },
    [isPlaying]
  );
  const [value, setvalue] = useState();
  const radio_props = [
    { label: "Do not advice or try to solve their \n problems", value: 0 },
    { label: "Do not share too much personal \n information", value: 1 },
    { label: "Share personal experiences only when\n required", value: 2 },
    {
      label: "Safe and comfortable environment, \ntrust and confidentiality",
      value: 3,
    },
  ];

  const [answersList, setAnswersList] = useState([]);

  function getOccurrence(array, value) {
    var count = 0;
    array.forEach((v) => v === value && count++);
    return count;
  }

  const [answer4, setAnswer4] = useState("");

  const createAlert = () =>
    Alert.alert(
      "No Option Selected",
      "Please select an option continue",
      [{ text: "OK", onPress: () => { } }],
      {
        cancelable: false,
      }
    );

  return (
    <ImageBackground source={require("../assets/ss.png")} style={styler.image}>
      <SafeAreaView style={styler.screen}>
        <ScrollView>
          <View style={styler.titleView}>
            <View style={styler.head}>
              <View
                style={{
                  flex: 0.4,
                  alignItems: "flex-start",
                }}
              >
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
                    style={{ marginLeft: 0.03 * screenHeight }}
                  />
                </TouchableOpacity>
              </View>
              <View style={{ flex: 0.6 }}>
                <Text
                  style={{
                    fontSize: 0.032 * screenHeight,
                    fontWeight: "bold",
                    textAlign: "left",
                  }}
                >
                  Question 4
                </Text>
              </View>
            </View>
            <Text
              style={{
                fontSize: 0.02 * screenHeight,
                color: "grey",
                marginHorizontal: 0.02 * screenHeight,
                marginVertical: 0.014 * screenHeight,
              }}
            >
              Please watch the video and answer the question
            </Text>
          </View>
          <View style={{ height: 0.3 * screenHeight, width: screenWidth }}>
            <YoutubePlayer
              videoId={"-mlRqtbZ4sg"}
              play={false}
              height="100%"
              onChangeState={videoEnded}
            />
          </View>
          <View>
            <Text
              style={{
                color: "black",
                marginHorizontal: 0.025 * screenHeight,
                fontSize: 0.023 * screenHeight,
                marginTop: 20,
              }}
            >
              What are the boundaries you set in your chat?
            </Text>
          </View>
          <View style={styler.radioButtons}>
            <RadioButtonRN
              data={radio_props}
              style={{
                marginRight: 0.02 * screenWidth,
              }}
              textStyle={{
                fontSize: 0.018 * screenHeight,
              }}
              selectedBtn={(e) => {
                var v = e["value"];

                if (v !== 3) {
                  setAnswer4(true);
                } else {
                  setAnswer4(false);
                }
              }}
              box={false}
              activeColor="#7AC141"
              deactiveColor="#7AC141"
            />
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 0.02 * screenHeight,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                if (answer4 === "") {
                  createAlert();
                } else {
                  answersList.push(answer1);
                  answersList.push(answer2);
                  answersList.push(answer3);
                  answersList.push(answer4);

                  if (getOccurrence(answersList, true) > 2) {
                    var currentUser = firebase.auth().currentUser.uid;

                    firestore()
                      .collection("users")
                      .doc(currentUser)
                      .get()
                      .then((documentSnapshot) => {
                        var age = documentSnapshot.data()["age"];
                        var gender = documentSnapshot.data()["gender"];

                        firestore()
                          .collection("Listeners")
                          .doc(currentUser)
                          .set({
                            age: age.toString(),
                            gender: gender,
                            name: firstName,
                            lastName: lastName,
                            email: email,
                            city: city,
                            country: country,
                            bio: bio,
                            topics: list,
                            sessions: 0,
                          })
                          .then(() => {
                            firestore()
                              .collection("users")
                              .doc(currentUser)
                              .update({
                                isListener: true,
                              })
                              .then(() => {
                                navigation.navigate("BecomeListenerResult", {
                                  result: true,
                                });
                              });
                          });
                      });
                  } else {
                    navigation.navigate("BecomeListenerResult", {
                      result: false,
                    });
                  }
                }
              }}
            >
              <Text style={styler.getStarted}>CONTINUE</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Quiz4;

const styler = StyleSheet.create({
  screen: {
    flex: 1,
    paddingVertical: 0.03 * screenHeight,
    justifyContent: "space-between",
  },
  head: {
    flex: 0.15,
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  radioButtons: {
    width: screenWidth,
    paddingLeft: 0.015 * screenHeight,
    marginVertical: 0.018 * screenHeight,
  },
  getStarted: {
    borderRadius: 15,
    width: 0.85 * screenWidth,
    height: 0.08 * screenHeight,
    backgroundColor: "#7AC141",
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 0.03 * screenHeight,
    elevation: 5,
    overflow: "hidden",
    paddingVertical: 0.02 * screenHeight,
  },
});
