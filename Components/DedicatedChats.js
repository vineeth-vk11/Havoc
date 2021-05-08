import React, { Component, useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ActivityIndicator,
  ImageBackground,
} from "react-native";
import { ListItem, Avatar, Icon } from "react-native-elements";
import firebase from "firebase";
import { FlatList } from "react-native-gesture-handler";
require("firebase/firestore");

const DedicatedChats = ({ navigation }) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  var currentUser;

  if (firebase.auth().currentUser) {
    currentUser = firebase.auth().currentUser.uid;
    console.log(currentUser);
  }
  const db = firebase.firestore();

  useEffect(() => {
    const dedicatedChats = db
      .collection("users")
      .doc(currentUser)
      .collection("DedicatedChats")
      .onSnapshot((querySnapshot) => {
        const dedicatedChatList = [];

        querySnapshot.forEach((documentSnapshot) => {
          dedicatedChatList.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setList(dedicatedChatList);
        setLoading(false);
      });

    return () => dedicatedChats();
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  const renderList = () => {
    if (list.length === 0) {
      return (
        <View
          style={{
            flex: 0.85,
            marginLeft: 32,
            marginRight: 32,
          }}
        >
          <Text style={{ fontSize: 16, marginTop: "50%", textAlign: "center" }}>
            It's one dedicated corridor, you can request your listener to
            carry/flag your chat as dedicated and you can chat with the listener
            whenever-whereever.
          </Text>
        </View>
      );
    } else {
      return (
        <View style={styler.listView}>
          <FlatList
            data={list}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("DedicatedChatting", {
                    chatId: item.chatId,
                    listenerId: item.listener,
                    listenerName: item.listenerName,
                    type: item.type,
                    topic: item.topic,
                  });
                }}
              >
                <View
                  style={{
                    padding: 3,
                    paddingRight: 5,
                    paddingLeft: 5,
                    marginLeft: 8,
                    marginRight: 8,
                  }}
                >
                  <ListItem
                    containerStyle={{
                      backgroundColor: "#F8F8F8",
                      height: 60,
                      borderRadius: 5,
                      elevation: 5,
                    }}
                  >
                    <Avatar
                      source={require("../assets/profilepic.png")}
                      size={30}
                    />
                    <ListItem.Content>
                      <ListItem.Title>{item.listenerName}</ListItem.Title>
                      <ListItem.Subtitle>{item.topic}</ListItem.Subtitle>
                    </ListItem.Content>
                    <ListItem.Chevron size={35} />
                  </ListItem>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      );
    }
  };

  return (
    <SafeAreaView style={styler.screen}>
      <ImageBackground
        source={require("../assets/ss.png")}
        style={styler.image}
      >
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
                style={{ marginTop: 10, marginLeft: 32 }}
                name="arrow-back"
                type="ionicon"
                color="#000000"
                size={30}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 0.7,
              alignItems: "flex-start",
            }}
          >
            <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 10 }}>
              Dedicated chats
            </Text>
          </View>
        </View>

        {renderList()}
      </ImageBackground>
    </SafeAreaView>
  );
};

export default DedicatedChats;

const styler = StyleSheet.create({
  head: {
    flex: 0.15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  listView: {
    flex: 0.85,
  },
  screen: {
    flex: 1,
  },
});
