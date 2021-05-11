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
  Dimensions
} from "react-native";
import { TextInput } from "react-native-paper";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";

import { Icon } from "react-native-elements";

import firebase from "firebase";
require("firebase/firestore");

import uuid from "react-native-uuid";
import { min } from "react-native-reanimated";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

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
            <View style = {{flex: 1, justifyContent: "flex-start", alignContent: "flex-start"}}>
            <TouchableOpacity
                  onPress={() => {
                    navigation.goBack(null);
                  }}
                >
                  <Icon
                  style={{
                    alignSelf: "flex-start",
                    marginLeft: 0.05 * screenWidth
                    }}
                    name="arrow-back"
                    type="ionicon"
                    color="#000000"
                    size={0.04 * screenHeight}
                  />
                </TouchableOpacity>
            </View>
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
                        buttonSize={0.017*screenHeight}
                        buttonOuterSize={0.028*screenHeight}
                        buttonStyle={{ marginRight: 0.025*screenHeight, marginBottom: 0.015*screenHeight }}
                        buttonWrapStyle={{ marginLeft: 0.015*screenHeight }}
                      />
                      <RadioButtonLabel
                        obj={obj}
                        index={i}
                        labelHorizontal={true}
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
                        labelStyle={{
                          fontSize: 0.021*screenHeight,
                          color: "#000",
                          marginBottom: 0.01*screenHeight,
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
                value = {onMind}
              />
            </View>
            <View style={{justifyContent:'center',alignItems:'center' }}>
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
            </View>
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
    paddingVertical: 0.1*screenHeight,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  titleView: {
    width: screenWidth,
    alignItems: "center",
    justifyContent: "center",
    marginTop : 0.03 * screenHeight
  },
  titleText: {
    fontSize: 0.027*screenHeight,
  },
  inputText: {
    width: screenWidth,
    paddingHorizontal: 0.1*screenWidth,
    marginVertical: 0.1*screenWidth,
  },
  radioButtons: {
    width: screenWidth,
    paddingLeft: 0.07*screenWidth,
    marginVertical: 0.1*screenWidth,
  },
  gatherYT: {
    width: screenWidth,
    paddingVertical: 0.02*screenWidth,
    alignItems: "center",
    justifyContent: "center",
  },
  gatherText: {
    fontSize: 0.027*screenHeight,
  },
  getStarted: {
    borderRadius: 0.022*screenHeight,
    width: 0.85*screenWidth,
    height: 0.07*screenHeight,
    backgroundColor: "#7AC141",
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 0.027*screenHeight,
    elevation: 5,
    paddingVertical: 0.017*screenHeight,
    overflow: "hidden",
    marginVertical: 0.02*screenHeight
  },
});
