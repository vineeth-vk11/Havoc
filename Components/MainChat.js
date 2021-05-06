import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Modal,
  TouchableOpacity,
} from "react-native";

import { ListItem, Avatar, Icon } from "react-native-elements";

import firebase from "firebase";
require("firebase/database");
require("firebase/firestore");

import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";

import uuid from "react-native-uuid";

import { BottomSheet } from "react-native-btr";

function MainChat({ navigation, route }) {
  const [messages, setMessages] = useState([]);
  const { chatId, listenerId, type, listenerName, topic } = route.params;
  const [loading, setLoading] = useState(true);

  console.log(type);

  var currentUser = firebase.auth().currentUser.uid;

  const [visible, setVisible] = useState(false);

  const toggleBottomNavigationView = () => {
    //Toggling the visibility state of the bottom sheet
    console.log("called");
    setVisible(!visible);
  };

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

  function renderHeader() {
    if (type === "listener") {
      return (
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
              backgroundColor: "#fff",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                console.log("called");
                setVisible(!visible);
              }}
            >
              <Icon
                name="ellipsis-vertical-outline"
                type="ionicon"
                color="#000000"
                size={30}
                style={{ marginLeft: 32 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      );
    } else {
      return (
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
              backgroundColor: "#fff",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                toggleBottomNavigationView;
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
      );
    }
  }

  return (
    <View style={{ flex: 1 }}>
      {renderHeader()}
      <GiftedChat
        style={{ flex: 0.5 }}
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: currentUser,
        }}
      />
      <BottomSheet
        visible={visible}
        //setting the visibility state of the bottom shee
        onBackButtonPress={toggleBottomNavigationView}
        //Toggling the visibility state on the click of the back botton
        onBackdropPress={toggleBottomNavigationView}
      >
        <View style={styler.bottomNavigationView}>
          <TouchableOpacity
            onPress={() => {
              var currentUser = firebase.auth().currentUser.uid;

              firebase
                .firestore()
                .collection("users")
                .doc(currentUser)
                .collection("Journal")
                .add({
                  listenerName: listenerName,
                  listener: listenerId,
                  topic: topic,
                  date: "06/05/2021",
                  chatId: chatId,
                })
                .then(() => {
                  firebase
                    .firestore()
                    .collection("Chats")
                    .doc(chatId)
                    .update({
                      paymentActivated: true,
                    })
                    .then(() => {
                      navigation.navigate("ListenerDB");
                    });
                });
            }}
          >
            <Text style={styler.getStarted}>Activate payment</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              var currentUser = firebase.auth().currentUser.uid;

              firebase
                .firestore()
                .collection("users")
                .doc(currentUser)
                .collection("DedicatedChats")
                .doc(listenerId)
                .set({
                  listenerName: listenerName,
                  listener: listenerId,
                  topic: topic,
                  date: "06/05/2021",
                  type: type,
                  isClosedBySeeker: false,
                  isClosedByListener: false,
                })
                .then(() => {
                  firebase
                    .firestore()
                    .collection("users")
                    .doc(currentUser)
                    .collection("Journal")
                    .add({
                      listenerName: listenerName,
                      listener: listenerId,
                      topic: topic,
                      date: "06/05/2021",
                      chatId: chatId,
                    })
                    .then(() => {
                      firebase
                        .firestore()
                        .collection("Chats")
                        .doc(chatId)
                        .update({
                          isAddedToDedicatedChats: true,
                        })
                        .then(() => {
                          navigation.navigate("ListenerDB");
                        });
                    });
                });
            }}
          >
            <Text style={styler.getStarted}>Add to dedicated chats</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              var currentUser = firebase.auth().currentUser.uid;

              firebase
                .firestore()
                .collection("users")
                .doc(currentUser)
                .collection("Journal")
                .add({
                  listenerName: listenerName,
                  listener: listenerId,
                  topic: topic,
                  date: "06/05/2021",
                  chatId: chatId,
                })
                .then(() => {
                  firebase
                    .firestore()
                    .collection("Chats")
                    .doc(chatId)
                    .update({
                      isClosedByListener: true,
                    })
                    .then(() => {
                      navigation.navigate("ListenerDB");
                    });
                });
            }}
          >
            <Text style={styler.getStarted}>Close chat</Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </View>
  );
}

export default MainChat;

const styler = StyleSheet.create({
  head: {
    flex: 0.15,
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
    marginTop: 32,
  },
  bottomNavigationView: {
    backgroundColor: "#fff",
    width: "100%",
    height: 250,
    justifyContent: "center",
    alignItems: "center",
    borderTopEndRadius: 10,
    borderTopLeftRadius: 10,
  },
  getStarted: {
    borderRadius: 7,
    width: 310,
    height: 45,
    backgroundColor: "#7AC141",
    color: "white",
    marginVertical: 10,
    marginHorizontal: 20,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 15,
    elevation: 5,
    padding: 10,
    overflow: "hidden",
  },
});
