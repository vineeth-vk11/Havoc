import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { BackgroundImage } from "react-native-elements/dist/config";
import { TextInput } from "react-native-paper";

import firebase from "firebase";
require("firebase/firestore");

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const GiveFeedback = ({ navigation, route }) => {
  /*const { listener, user } = route.params;*/
  const [feedback, setFeedback] = useState("");

  const { user, listener } = route.params;

  return (
    <BackgroundImage
      source={require("../assets/ss.png")}
      style={styler.imageBg}
    >
      <View style={styler.screen}>
        <ScrollView>
          <KeyboardAvoidingView behavior="padding">
            <View style={styler.titleView}>
              <Text style={styler.titleText}>Report and End Chat</Text>
            </View>
            <View style={styler.feedbackView}>
              <Text style={styler.feedbackText}>Submit a report</Text>
              <Text style={styler.feedbackText}>
                Something went wrong? Let us know
              </Text>
              <TextInput
                mode="flat"
                label="Feedback"
                theme={{
                  colors: { primary: "#7AC141", background: "transparent" },
                }}
                onChangeText={(text) => {
                  setFeedback(text);
                }}
                value={feedback}
              />
            </View>
            <View style={styler.footView}>
              <TouchableOpacity
                onPress={() => {
                  firebase
                    .firestore()
                    .collection("DedicatedChatExitFeedbacks")
                    .add({
                      feedback: feedback,
                      user: user,
                      listener: listener,
                    })
                    .then(() => {
                      navigation.navigate("Register3");
                    });
                }}
              >
                <Text style={styler.complete}>SUBMIT</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </BackgroundImage>
  );
};

export default GiveFeedback;

const styler = StyleSheet.create({
  screen: {
    flex: 1,
  },
  imageBg: {
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
    overflow: "hidden",
    paddingVertical: 0.025 * screenHeight,
  },
  footView: {
    justifyContent: "flex-end",
    marginTop: 0.4 * screenHeight,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 0.1 * screenHeight,
  },
});
