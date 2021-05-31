import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Modal,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import { ListItem, Avatar, Icon } from "react-native-elements";

import firebase from "firebase";
require("firebase/database");
require("firebase/firestore");

import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { Bubble } from "react-native-gifted-chat";

import uuid from "react-native-uuid";

import Moment from "moment";

import { BottomSheet } from "react-native-btr";

function MainChat({ navigation, route }) {
  const [messages, setMessages] = useState([]);
  const { chatId, listenerId, type, listenerName, topic } = route.params;
  const [loading, setLoading] = useState(true);
  const [initialMessage, setInititalMessage] = useState(false);

  var feeling, onMind;

  if (type === "seeker") {
    feeling = route.params.feeling;
    onMind = route.params.onMind;
  }
  var currentUser = firebase.auth().currentUser.uid;

  var date = Moment(new Date()).format("DD/MM/YYYY");

  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);

  const toggleBottomNavigationView = () => {
    //Toggling the visibility state of the bottom sheet
    setVisible(!visible);
  };

  const toggleBottomNavigationView1 = () => {
    //Toggling the visibility state of the bottom sheet
    setVisible1(!visible1);
  };

  useEffect(() => {
    if (firebase.auth().currentUser) {
      var currentUser = firebase.auth().currentUser.uid;

      var message = "I am feeling " + feeling + ". " + onMind;

      if (!initialMessage && type === "seeker") {
        firebase.database().ref(`/Chats/${currentUser}/${chatId}`).push({
          message: message,
          receivedUser: listenerId,
          sentUser: currentUser,
        });

        firebase.database().ref(`/Chats/${listenerId}/${chatId}`).push({
          message: message,
          receivedUser: listenerId,
          sentUser: currentUser,
        });

        setInititalMessage(true);
      }

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
          });

          setMessages(messageList.reverse());
        });

      firebase
        .firestore()
        .collection("Chats")
        .doc(chatId)
        .onSnapshot((documentSnapshot) => {
          var data = documentSnapshot.data();

          var paymentActivated = data["paymentActivated"];
          var isClosedBySeeker = data["isClosedBySeeker"];
          var isClosedByListener = data["isClosedByListener"];
          var isAddedToDedicatedChats = data["isAddedToDedicatedChats"];

          if (paymentActivated && type === "seeker") {
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
                date: date,
                chatId: chatId,
              })
              .then(() => {
                navigation.navigate("Review", {
                  type: "payment",
                  listener: listenerId,
                });
              });
          }

          if (isClosedByListener && type === "seeker") {
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
                date: date,
                chatId: chatId,
              })
              .then(() => {
                navigation.navigate("Review", {
                  type: "normal",
                  listener: listenerId,
                });
              });
          }

          if (isAddedToDedicatedChats && type === "seeker") {
            var currentUser = firebase.auth().currentUser.uid;

            firebase
              .firestore()
              .collection("users")
              .doc(currentUser)
              .collection("DedicatedChats")
              .doc(listenerId)
              .set({
                chatId: chatId,
                listenerName: listenerName,
                listener: listenerId,
                topic: topic,
                date: date,
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
                    date: date,
                    chatId: chatId,
                  })
                  .then(() => {
                    navigation.navigate("Register3");
                  });
              });
          }

          if (isClosedBySeeker && type === "listener") {
            firebase
              .firestore()
              .collection("users")
              .doc(currentUser)
              .collection("Journal")
              .add({
                listenerName: listenerName,
                listener: listenerId,
                topic: topic,
                date: date,
                chatId: chatId,
              })
              .then(() => {
                navigation.navigate("MyRequests");
              });
          }
        });
    }
  }, []);

  const onSend = useCallback((messages = []) => {
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
            }}
          >
            <TouchableOpacity
              onPress={() => {
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
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setVisible1(!visible1);
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
    <ImageBackground source={require("../assets/ss.png")} style={styler.image}>
      <View style={{ flex: 1 }}>
        {renderHeader()}
        <GiftedChat
          style={{ flex: 0.85 }}
          messages={messages}
          renderAvatar={() => null}
          onSend={(messages) => onSend(messages)}
          user={{
            _id: currentUser,
          }}
        />
        <BottomSheet
          visible={visible}
          onBackButtonPress={toggleBottomNavigationView}
          onBackdropPress={toggleBottomNavigationView}
        >
          <View style={styler.bottomNavigationView}>
            <TouchableOpacity
              onPress={() => {
                setVisible(!visible);

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
                    date: date,
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
                setVisible(!visible);

                var currentUser = firebase.auth().currentUser.uid;

                firebase
                  .firestore()
                  .collection("users")
                  .doc(currentUser)
                  .collection("DedicatedChats")
                  .doc(listenerId)
                  .set({
                    chatId: chatId,
                    listenerName: listenerName,
                    listener: listenerId,
                    topic: topic,
                    date: date,
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
                        date: date,
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
                setVisible(!visible);

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
                    date: date,
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

            <TouchableOpacity
              onPress={() => {
                setVisible(!visible);

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
                    date: date,
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
                        navigation.navigate("ReportSeeker", {
                          listenerId: listenerId,
                        });
                      });
                  });
              }}
            >
              <Text style={styler.getStarted}>Report Seeker</Text>
            </TouchableOpacity>
          </View>
        </BottomSheet>

        <BottomSheet
          visible={visible1}
          onBackButtonPress={toggleBottomNavigationView1}
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
                        date: date,
                        chatId: chatId,
                      })
                      .then(() => {
                        firebase
                          .firestore()
                          .collection("Chats")
                          .doc(chatId)
                          .update({
                            isClosedBySeeker: true,
                          })
                          .then(() => {
                            navigation.navigate("Register3");
                          });
                      });
                  }}
                >
                  <Text style={styler.exitButtons}>Yes</Text>
                </TouchableOpacity>
              </View>

              <View>
                <TouchableOpacity>
                  <Text style={styler.exitButtons}>No</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </BottomSheet>
      </View>
    </ImageBackground>
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
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  bottomNavigationView: {
    backgroundColor: "#fff",
    width: "100%",
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    borderTopEndRadius: 10,
    borderTopLeftRadius: 10,
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
    paddingVertical: 12.5,
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
});
