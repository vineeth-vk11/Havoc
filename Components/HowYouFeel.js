import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import { TextInput } from "react-native-paper";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";

import firebase from "firebase";
require("firebase/firestore");

import uuid from "react-native-uuid";
import { min } from "react-native-reanimated";

const HowYouFeel = ({ navigation, route }) => {
  const [value, setvalue] = useState(-1);
  const [feeling, setFeeling] = useState();
  const radio_props = [
    { label: "😃 Very Good", value: 0 },
    { label: "🙂 Good", value: 1 },
    { label: "😐 Ok", value: 2 },
    { label: "😔 Bad", value: 3 },
    { label: "😩 Worst", value: 4 },
  ];
  const { userName, topic, minAge, maxAge } = route.params;
  const [onMind, setOnMind] = useState("");

  sendRequest = () => {
    if (firebase.auth().currentUser) {
      var user = firebase.auth().currentUser.uid;
      var id = uuid.v4();

      console.log(id);
      firebase
        .firestore()
        .collection("Chats")
        .doc(id)
        .set({
          date: "03/05/2021",
          feeling: feeling,
          isAddedToDedicatedChats: false,
          isClosedByListener: false,
          isClosedBySeeker: false,
          listener: "waiting",
          listenerJoined: false,
          listenerName: "waiting",
          maxAge: Number(maxAge),
          minAge: Number(minAge),
          onMind: onMind,
          paymentActivated: false,
          topic: topic,
          user: user,
          userName: userName,
        })
        .then(() => {
          firebase
            .firestore()
            .collection("ChatRequests")
            .doc(id)
            .set({
              topic: topic,
              minAge: Number(minAge),
              maxAge: Number(maxAge),
              user: user,
              userName: userName,
            })
            .then(() => {
              navigation.navigate("MatchingListener", {
                chatId: id,
                feeling: feeling,
                onMind: onMind,
                topic: topic,
              });
            });
        });
    }
  };

  return (
    <ImageBackground source={require("../assets/ss.png")} style={styler.image}>
      <View style={styler.screen}>
        <ScrollView>
          <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={5}>
            <View style={styler.titleView}>
              <Text style={styler.titleText}>How are you feeling now?</Text>
            </View>
            <View style={styler.radioButtons}>
              <RadioForm formHorizontal={false} animation={true}>
                {radio_props.map((obj, i) => (
                  <RadioButton labelHorizontal={true} key={i}>
                    <View style={{ flexDirection: "row" }}>
                      <RadioButtonInput
                        obj={obj}
                        index={i}
                        isSelected={value === i}
                        onPress={(value) => {
                          if (value === 0) {
                            setFeeling("Very Good");
                          } else if (value === 1) {
                            setFeeling("Good");
                          } else if (value === 2) {
                            setFeeling("Ok");
                          } else if (value === 3) {
                            setFeeling("Bad");
                          } else if (value === 4) {
                            setFeeling("Worst");
                          }
                          setvalue(value);
                        }}
                        borderWidth={2}
                        buttonInnerColor={"#7AC141"}
                        buttonOuterColor={value === i ? "#7AC141" : "#000"}
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
                          setvalue(value);
                        }}
                        labelStyle={{
                          fontSize: 18,
                          color: "#000",
                          marginBottom: 10,
                        }}
                        labelWrapStyle={{}}
                      />
                    </View>
                  </RadioButton>
                ))}
              </RadioForm>
            </View>
            <View style={styler.gatherYT}>
              <Text style={styler.gatherText}>
                Gather your thoughts here. This will{" "}
              </Text>
              <Text style={styler.gatherText}>
                {" "}
                help the listener get going/initiate
              </Text>
            </View>
            <View style={styler.inputText}>
              <TextInput
                mode="flat"
                label="What's on your mind?"
                theme={{
                  colors: {
                    primary: "green",
                    underlineColor: "transparent",
                    background: "transparent",
                  },
                }}
                onChangeText={(value) => {
                  setOnMind(value);
                }}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                if (value === -1) {
                } else {
                  sendRequest();
                }
              }}
            >
              <Text style={styler.getStarted}>FIND LISTENER</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default HowYouFeel;

const styler = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    paddingVertical: "20%",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  titleView: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 25,
  },
  inputText: {
    width: "100%",
    paddingHorizontal: "10%",
    marginVertical: "10%",
  },
  radioButtons: {
    width: "100%",
    paddingLeft: "5%",
    marginVertical: "10%",
  },
  gatherYT: {
    width: "100%",
    paddingVertical: "5%",
    alignItems: "center",
    justifyContent: "center",
  },
  gatherText: {
    fontSize: 20,
  },
  getStarted: {
    borderRadius: 15,
    width: 310,
    height: 52,
    backgroundColor: "#7AC141",
    color: "white",
    marginHorizontal: 10,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 20,
    elevation: 5,
    paddingVertical: 10,
    overflow: "hidden",
  },
});
