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
  Dimensions
} from "react-native";
import { Icon } from "react-native-elements";
import { Button } from "react-native-elements";

import firebase from "firebase";
require("firebase/firestore");

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const JoinTheChat = ({ navigation, route }) => {
 const { chatId, feeling, onMind, listenerId, topic } = route.params;
  const [listenerName, setListenerName] = useState();
  const [listenerBio, setListenerBio] = useState();

 useEffect(() => {
    let listener = firebase
      .firestore()
      .collection("Listeners")
      .doc(listenerId)
      .get()
      .then((documentSnapshot) => {
        setListenerName(documentSnapshot.data()["name"]);
        setListenerBio(documentSnapshot.data()["bio"]);
      });
  });

  return (
    <ImageBackground
      source={require("../assets/ss.png")}
      style={styler.imageBg}
    >
      <SafeAreaView style={styler.screen}>
        <View style={styler.headView}>
          <View style={styler.head}>
            <Text
              style={{
                fontSize: 0.025*screenHeight,
                fontWeight: "bold",
              }}
            >
              Request Accepted By{" "}
            </Text>
            <Text style={{ fontSize: 0.025*screenHeight, fontWeight: "bold" }}>
              Vineeth Kumar{" "}
            </Text>
          </View>
        </View>

        <View style={styler.imageView}>
          <Image
            style={styler.dp}
            source={require("../assets/profilepic.png")}
          />
        </View>
        <View style={styler.aboutView}>
          <View style={styler.about}>
            <Text style={{ fontSize: 0.027*screenHeight }}>About </Text>
            <Text style={{ fontSize: 0.027*screenHeight }}>{listenerName}</Text>
          </View>
          <View style={styler.about}>
            <Text>{listenerBio}</Text>
          </View>
        </View>

        <View style={styler.footView}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("MainChat", {
                chatId: chatId,
                feeling: feeling,
                onMind: onMind,
                listenerId: listenerId,
                listenerName: listenerName,
                topic: topic,
                type: "seeker",
              });
            }}
          >
            <Text style={styler.bookNow}>JOIN THE CHAT</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default JoinTheChat;

const styler = StyleSheet.create({
  head: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0.09*screenHeight,
    margin: 0.015*screenHeight,
  },
  imageBg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  medication: {
    width: 0.5*screenWidth,
    height: 0.2*screenHeight,
  },
 
  about: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    margin: 0.015*screenHeight,
    marginLeft: 0.025*screenHeight,
    marginRight: 0.025*screenHeight,
  },
  bookNow: {
    justifyContent: "flex-end",
    borderRadius: 15,
    width: 0.85*screenWidth,
    height: 0.07*screenHeight,
    backgroundColor: "#7AC141",
    color: "white",
    margin: 0.027*screenHeight,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 0.025*screenHeight,
    paddingVertical: 0.015*screenHeight,
    overflow: "hidden",
    alignSelf: "center",
  },
  dp: {
    width: 0.45*screenWidth,
    height: 0.45*screenWidth,
    borderRadius: 100,
  },
  topics: {
    flexDirection: "row",
  },
  topicInner: {
    backgroundColor: "#7AC141",
    padding: 0.025*screenHeight,
    borderRadius: 84,
    margin: 0.015*screenHeight,
  },
  screen: {
    flex: 1,
  },
  headView: {
    flex: 0.2,
    alignItems: "center",
  },
  imageView: {
    flex: 0.35,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  aboutView: {
    flex: 0.2,
  },
  footView: {
    flex: 0.35,
    justifyContent: "flex-end",
  },
});
