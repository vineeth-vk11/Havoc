import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";
import { Icon } from "react-native-elements";
import LottieView from "lottie-react-native";

import firebase from "firebase";
require("firebase/firestore");

import { BottomSheet } from "react-native-btr";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const MatchingListener = ({ navigation, route }) => {
  const { chatId, feeling, onMind, topic } = route.params;
  const [listenerId, setListenerId] = useState("waiting");
  const [listenerJoined, setListenerJoined] = useState(false);

  const [visible1, setVisible1] = useState(false);

  const toggleBottomNavigationView1 = () => {
    //Toggling the visibility state of the bottom sheet
    setVisible1(!visible1);
  };

  var alreadyEntered = false;

  useEffect(() => {
    const chatStatus = firebase
      .firestore()
      .collection("Chats")
      .doc(chatId)
      .onSnapshot((documentSnapshot) => {
        var data = documentSnapshot.data();
        var ListenerId = data["listener"];

        if (ListenerId !== "waiting" && alreadyEntered === false) {
          setListenerId(ListenerId);

          navigation.navigate("JoinTheChat", {
            chatId: chatId,
            feeling: feeling,
            onMind: onMind,
            listenerId: ListenerId,
            type: "seeker",
            topic: topic,
          });

          alreadyEntered = true;
        }
      });

    return () => chatStatus();
  }, []);

  return (
    <ImageBackground source={require("../assets/ss.png")} style={styler.image}>
      <SafeAreaView style={styler.screen}>
        <View style={styler.headView}>
          <View style={styler.head}>
            <TouchableOpacity
              onPress={() => {
                setVisible1(!visible1);
              }}
            >
              <Icon
                style={{ margin: 5 }}
                name="close"
                type="ionicon"
                color="#000"
                size={0.04 * screenHeight}
                style={{
                  marginRight: 0.041 * screenHeight,
                  marginTop: 0.025 * screenHeight,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styler.textView}>
          <Text style={styler.textHeading}>Matching you with a Listener</Text>
          <View style={styler.loaderView}>
            <LottieView
              style={{ width: 0.5 * screenWidth, height: 0.5 * screenWidth }}
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

        <BottomSheet
          visible={visible1}
          //setting the visibility state of the bottom shee
          onBackButtonPress={toggleBottomNavigationView1}
          //Toggling the visibility state on the click of the back botton
          onBackdropPress={toggleBottomNavigationView1}
        >
          <View style={styler.bottomNavigationView1}>
            <View>
              <Text style={{ fontSize: 16, marginTop: 16 }}>
                Are you sure you want to eixt ?
              </Text>
            </View>

            <View style={styler.buttonsView}>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    setVisible1(!visible1);

                    var currentUser = firebase.auth().currentUser.uid;

                    firebase
                      .firestore()
                      .collection("ChatRequests")
                      .doc(chatId)
                      .delete()
                      .then(() => {
                        navigation.navigate("Leaving");
                      });
                  }}
                >
                  <Text style={styler.exitButtons}>Yes</Text>
                </TouchableOpacity>
              </View>

              <View>
                <TouchableOpacity
                  onPress={() => {
                    setVisible1(!visible1);
                  }}
                >
                  <Text style={styler.exitButtons}>No</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </BottomSheet>
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
    marginTop: 0.042 * screenHeight,
  },
  bottomNavigationView1: {
    backgroundColor: "#fff",
    width: "100%",
    height: 150,
    justifyContent: "space-around",
    alignItems: "center",
    borderTopEndRadius: 10,
    borderTopLeftRadius: 10,
  },
  buttonsView: {
    flexDirection: "row",
    backgroundColor: "#fff",
    width: "100%",
    height: 100,
    justifyContent: "space-around",
    alignItems: "center",
  },
  exitButtons: {
    borderRadius: 5,
    backgroundColor: "#7AC141",
    color: "white",
    fontSize: 15,
    overflow: "hidden",
    padding: 10,
    width: 100,
    textAlign: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  textHeading: {
    fontSize: 0.031 * screenHeight,
    textAlign: "center",
    fontWeight: "bold",
    margin: 0.01 * screenHeight,
  },
  text: {
    fontSize: 0.025 * screenHeight,
    textAlign: "center",
    margin: 0.025 * screenHeight,
  },
  screen: {
    flex: 1,
  },
  headView: {
    flex: 0.2,
  },
  textView: {
    flex: 0.2,
    marginLeft: 0.015 * screenHeight,
  },
  loaderView: {
    flex: 0.1,
    margin: 0.01 * screenHeight,
    alignItems: "center",
  },
  footView: {
    flex: 0.3,
    justifyContent: "flex-end",
    marginBottom: 0.07 * screenHeight,
  },
});
