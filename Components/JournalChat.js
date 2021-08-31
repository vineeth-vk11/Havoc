import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";

import { Icon } from "react-native-elements";

import firebase from '@react-native-firebase/app';
import database from '@react-native-firebase/database';

import React, { useState, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";

import uuid from "react-native-uuid";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

function JournalChat({ navigation, route }) {
  const [messages, setMessages] = useState([]);
  const { chatId } = route.params;
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
    }
  }, []);

  return (
    <ImageBackground source={require("../assets/ss.png")} style={styler.image}>
      <View style={{ flex: 1 }}>
        <View style={styler.head}>
          <View
            style={{
              flex: 0.3,
              alignItems: "flex-start",
            }}
          >
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
                style={{ marginLeft: 32 }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{ flex: 0.8, alignItems: "flex-start", marginRight: "15%" }}
          >
            <Text
              style={{
                fontSize: 0.032 * screenHeight,
                fontWeight: "bold",
                textAlign: "left",
                marginLeft: "30%",
              }}
            >
              Chat
            </Text>
          </View>
        </View>
        <GiftedChat
          style={{ flex: 0.85 }}
          messages={messages}
          renderAvatar={() => null}
          onSend={(messages) => onSend(messages)}
          user={{
            _id: currentUser,
          }}
          minComposerHeight={0}
          maxComposerHeight={0}
          minInputToolbarHeight={0}
          renderInputToolbar={() => null}
        />
      </View>
    </ImageBackground>
  );
}

export default JournalChat;

const styler = StyleSheet.create({
  head: {
    flex: 0.15,
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
    marginTop: 0.042 * screenHeight,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
