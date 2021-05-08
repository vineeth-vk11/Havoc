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
} from "react-native";
import { Icon } from "react-native-elements";
import { Button } from "react-native-elements";

import firebase from "firebase";
require("firebase/firestore");

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
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              Request Accepted By{" "}
            </Text>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
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
            <Text style={{ fontSize: 22 }}>About </Text>
            <Text style={{ fontSize: 22 }}>{listenerName}</Text>
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
    marginTop: 60,
    margin: 10,
  },
  imageBg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  medication: {
    width: 258,
    height: 172,
  },
  tinyLogo: {
    width: 114,
    height: 114,
    borderRadius: 100,
  },
  about: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    margin: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  bookNow: {
    justifyContent: "flex-end",
    borderRadius: 15,
    width: 310,
    height: 52,
    backgroundColor: "#7AC141",
    color: "white",
    margin: 20,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 20,
    paddingVertical: 10,
    overflow: "hidden",
    alignSelf: "center",
  },
  dp: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  topics: {
    flexDirection: "row",
  },
  topicInner: {
    backgroundColor: "#7AC141",
    padding: 10,
    borderRadius: 84,
    margin: 10,
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
