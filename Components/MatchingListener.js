import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Dimensions
} from "react-native";
import { Icon } from "react-native-elements";
import LottieView from "lottie-react-native";

import firebase from "firebase";
require("firebase/firestore");

import { useFocusEffect } from "@react-navigation/native";

const screenWidth= Dimensions.get('window').width;
const screenHeight=Dimensions.get('window').height;

const MatchingListener = ({ navigation, route }) => {
  const { chatId, feeling, onMind, topic } = route.params;
  const [listenerId, setListenerId] = useState("waiting");
  const [listenerJoined, setListenerJoined] = useState(false);

  var alreadyEntered = false;

  useEffect(() => {
    firebase
      .firestore()
      .collection("Chats")
      .doc(chatId)
      .onSnapshot((documentSnapshot) => {
        setListenerId(documentSnapshot.data()["listener"]);
        setListenerJoined(documentSnapshot.data()["listenerJoined"]);

        if (listenerId !== "waiting" && alreadyEntered === false) {
          navigation.navigate("JoinTheChat", {
            chatId: chatId,
            feeling: feeling,
            onMind: onMind,
            listenerId: listenerId,
            type: "seeker",
            topic: topic,
          });

          alreadyEntered = true;
        }
      });
  });

  return (
    <ImageBackground source={require("../assets/ss.png")} style={styler.image}>
      <SafeAreaView style={styler.screen}>
        <View style={styler.headView}>
          <View style={styler.head}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack(null);
              }}
            >
              <Icon
                style={{ margin: 5 }}
                name="close"
                type="ionicon"
                color="#979797"
                size={0.04*screenHeight}
                style={{ marginRight: 0.041*screenHeight, marginTop: 0.025*screenHeight }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styler.textView}>
          <Text style={styler.textHeading}>Matching you with a Listener</Text>
          <View style={styler.loaderView}>
            <LottieView
              style={{ width: 0.5*screenWidth, height: 0.5*screenWidth }}
              source={require("../assets/loading.json")}
              autoPlay
              loop
            />
          </View>
        </View>
        <View style={styler.footView}>
          <Text style={styler.text}>
            Our algorithm is finding you the perfect Listener. Our listener will
            connect with you soon!
          </Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default MatchingListener;
const styler = StyleSheet.create({
  head: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: 0.042*screenHeight,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  textHeading: {
    fontSize: 0.031*screenHeight,
    textAlign: "center",
    fontWeight: "bold",
    margin: 0.01*screenHeight,
  },
  text: {
    fontSize: 0.025*screenHeight,
    textAlign: "center",
    margin: 0.025*screenHeight,
  },
  screen: {
    flex: 1,
  },
  headView: {
    flex: 0.2,
  },
  textView: {
    flex: 0.2,
    marginLeft: 0.015*screenHeight,
  },
  loaderView: {
    flex: 0.1,
    margin: 0.01*screenHeight,
    alignItems: "center",
  },
  footView: {
    flex: 0.3,
    justifyContent: "flex-end",
    marginBottom: 0.07*screenHeight,
  },
});
