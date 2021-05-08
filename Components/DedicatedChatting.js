import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Modal,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from "react-native";

import { ListItem, Avatar, Icon } from "react-native-elements";

import firebase from "firebase";
require("firebase/database");
require("firebase/firestore");

import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { Bubble } from "react-native-gifted-chat";

import uuid from "react-native-uuid";

import { BottomSheet } from "react-native-btr";

function DedicatedChatting({ navigation, route }) {
  const [messages, setMessages] = useState([]);
  const { chatId, listenerId, listenerName, type, topic } = route.params;
  const [loading, setLoading] = useState(true);

  var currentUser = firebase.auth().currentUser.uid;

  useEffect(() => {
    if (firebase.auth().currentUser) {
      var currentUser = firebase.auth().currentUser.uid;
      firebase
        .database()
        .ref(`/Chats/${currentUser}/${chatId}`)
        .on(`value`, (snapShot) => {
          const messageList = [];

          snapShot.forEach((documentSnapshot) => {
            messageList.push({
              _id: uuid.v4(),
              text: documentSnapshot.val()["message"],
              user: {
                _id: documentSnapshot.val()["sentUser"],
                avatar:
                  "https://firebasestorage.googleapis.com/v0/b/wehearyou-c9eb8.appspot.com/o/profilepic.png?alt=media&token=57e06b2b-343b-489a-bdeb-de00d5e42e70",
              },
            });
            console.log(documentSnapshot.val());
          });

          setMessages(messageList.reverse());
        });

      firebase
        .firestore()
        .collection("users")
        .doc(currentUser)
        .collection("DedicatedChats")
        .doc(listenerId)
        .onSnapshot((documentSnapshot) => {
          if (!documentSnapshot.exists) {
            if (type === "seeker") {
              navigation.navigate("ReportNEnd", {
                user: currentUser,
                listener: listenerId,
              });
            } else {
              navigation.navigate("ReportNEnd");
            }
          }
        });
    }
  }, []);

  const onSend = useCallback((messages = []) => {
    console.log(messages);

    var currentUser = firebase.auth().currentUser.uid;

    firebase.database().ref(`/Chats/${currentUser}/${chatId}`).push({
      message: messages[0]["text"],
      receivedUser: listenerId,
      sentUser: currentUser,
    });

    firebase.database().ref(`/Chats/${listenerId}/${chatId}`).push({
      message: messages[0]["text"],
      receivedUser: listenerId,
      sentUser: currentUser,
    });
  }, []);

  const createAlert = () =>
    Alert.alert(
      "Close Chat",
      "Are you sure you want to close this chat ?",
      [
        { text: "No", onPress: () => {} },
        {
          text: "Yes",
          onPress: () => {
            var currentUser = firebase.auth().currentUser.uid;
            firebase
              .firestore()
              .collection("users")
              .doc(currentUser)
              .collection("DedicatedChats")
              .doc(listenerId)
              .delete()
              .then(() => {
                firebase
                  .firestore()
                  .collection("users")
                  .doc(listenerId)
                  .collection("DedicatedChats")
                  .doc(currentUser)
                  .delete()
                  .then(() => {
                    if (type === "seeker") {
                      navigation.navigate("ReportNEnd", {
                        user: currentUser,
                        listener: listenerId,
                      });
                    } else {
                      navigation.goBack(null);
                    }
                  });
              });
          },
        },
      ],
      { cancelable: false }
    );

  return (
    <ImageBackground source={require("../assets/ss.png")} style={styler.image}>
      <View style={{ flex: 1 }}>
        <View style={styler.head}>
          <View style={{ flex: 0.8, alignItems: "center" }}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                textAlign: "left",
                marginLeft: "30%",
              }}
            >
              Chat
            </Text>
          </View>
          <View
            style={{
              flex: 0.3,
              alignItems: "flex-start",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                createAlert();
              }}
            >
              <Icon
                name="close-outline"
                type="ionicon"
                color="#000000"
                size={30}
                style={{ marginLeft: 32 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <GiftedChat
          style={{ flex: 0.85 }}
          messages={messages}
          onSend={(messages) => onSend(messages)}
          user={{
            _id: currentUser,
          }}
        />
      </View>
    </ImageBackground>
  );
}

export default DedicatedChatting;

const styler = StyleSheet.create({
  head: {
    flex: 0.15,
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
    marginTop: 32,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
