import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-paper";

import { Icon } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";

import firebase from '@react-native-firebase/app';

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const GiveFeedback = ({ navigation }) => {
  const [feedback, setFeedback] = useState("");

  return (
    <ImageBackground source={require("../assets/ss.png")} style={styler.image}>
      <SafeAreaView style={styler.screen}>
        <ScrollView>
          <KeyboardAvoidingView behavior="padding">
            <View style={styler.head}>
              <View
                style={{
                  flex: 0.25,
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
                    size={30}
                    style={{ marginLeft: 0.03 * screenHeight }}
                  />
                </TouchableOpacity>
              </View>
              <View style={{ flex: 0.75 }}>
                <Text
                  style={{
                    fontSize: 0.032 * screenHeight,
                    fontWeight: "bold",
                    textAlign: "left",
                  }}
                >
                  App Feedback
                </Text>
              </View>
            </View>
            <View style={styler.feedbackView}>
              <Text style={styler.feedbackText}>
                Let us know what you think of we hear you
              </Text>
              <TextInput
                mode="flat"
                label="Feedback"
                value={feedback}
                onChangeTextTe={(text) => {
                  setFeedback(text);
                }}
                theme={{
                  colors: { primary: "#7AC141", background: "transparent" },
                }}
              />
            </View>

            <TouchableOpacity
              onPress={() => {
                var currentUser = firebase.auth().currentUser.uid;

                firestore()
                  .collection("AppFeedbacks")
                  .add({
                    feedback: feedback,
                    user: currentUser,
                  })
                  .then(() => {
                    navigation.goBack(null);
                  });
              }}
            >
              <View style={styler.footView}>
                <Text style={styler.complete}>SUBMIT</Text>
              </View>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default GiveFeedback;

const styler = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  head: {
    flex: 0.15,
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
    marginTop: 0.025 * screenHeight,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  titleView: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0.1 * screenHeight,
  },
  titleText: {
    fontSize: 0.08 * screenWidth,
    fontWeight: "bold",
  },
  feedbackView: {
    justifyContent: "space-around",
    padding: 0.1 * screenWidth,
  },
  feedbackText: {
    fontSize: 0.02 * screenHeight,
    marginBottom: 0.02 * screenHeight,
  },
  complete: {
    borderRadius: 15,
    width: 0.8 * screenWidth,
    height: 0.08 * screenHeight,
    backgroundColor: "#7AC141",
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 20,
    elevation: 5,
    marginBottom: 10,
    shadowColor: "black",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    overflow: "hidden",
    paddingVertical: 0.025 * screenHeight,
  },
  footView: {
    width: 0.81 * screenWidth,
    height: 0.09 * screenHeight,
    marginTop: 0.5 * screenHeight,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 0.07 * screenWidth,
    borderRadius: 20,
  },
});
