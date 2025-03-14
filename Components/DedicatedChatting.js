import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Alert,
  Dimensions,
} from "react-native";

import { Icon } from "react-native-elements";

import database from '@react-native-firebase/database';
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';

import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";

import uuid from "react-native-uuid";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

function DedicatedChatting({ navigation, route }) {
  const [messages, setMessages] = useState([]);
  const { chatId, listenerId, listenerName, type, topic } = route.params;
  const [loading, setLoading] = useState(true);

  var currentUser = firebase.auth().currentUser.uid;

  useEffect(() => {
    if (firebase.auth().currentUser) {
      var currentUser = firebase.auth().currentUser.uid;

      database()
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
          });

          setMessages(messageList.reverse());
        });

      firestore()
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
    var currentUser = firebase.auth().currentUser.uid;

    database().ref(`/Chats/${currentUser}/${chatId}`).push({
      message: messages[0]["text"],
      receivedUser: listenerId,
      sentUser: currentUser,
    });

    database().ref(`/Chats/${listenerId}/${chatId}`).push({
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
        { text: "No", onPress: () => { } },
        {
          text: "Yes",
          onPress: () => {
            var currentUser = firebase.auth().currentUser.uid;

            firestore()
              .collection("users")
              .doc(currentUser)
              .collection("DedicatedChats")
              .doc(listenerId)
              .delete()
              .then(() => {

                firestore()
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
            />
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 0.035 * screenHeight,
              fontWeight: "bold",
              textAlign: "left",
            }}
          >
            Chat
          </Text>

          <TouchableOpacity
            onPress={() => {
              createAlert();
            }}
          >
            <Icon
              name="close-outline"
              type="ionicon"
              color="#000000"
              size={0.04 * screenHeight}
            />
          </TouchableOpacity>
        </View>
        <GiftedChat
          style={{ flex: 0.85 }}
          messages={messages}
          renderAvatar={() => null}
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
    justifyContent: "space-around",
    marginTop: 0.042 * screenHeight,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
