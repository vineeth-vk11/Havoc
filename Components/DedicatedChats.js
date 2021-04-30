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
} from "react-native";
import { ListItem, Avatar, Icon } from "react-native-elements";
import firebase from "firebase";
import { FlatList } from "react-native-gesture-handler";
require("firebase/firestore");

const DedicatedChats = () => {
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

  return (
    <SafeAreaView style={styler.screen}>
      <View style={styler.head}>
        <Icon
          style={{ marginTop: 10, marginLeft: 32 }}
          name="arrow-back"
          type="ionicon"
          color="#979797"
          size={30}
        />
        <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 10 }}>
          Dedicated chats
        </Text>
        <Icon
          style={{ marginTop: 10, marginLeft: 32 }}
          name="arrow-back"
          type="ionicon"
          color="#fff"
          size={30}
        />
      </View>
      <View style={styler.listView}>
        <FlatList
          data={list}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <View style={{ padding: 3, paddingRight: 5, paddingLeft: 5 }}>
                <ListItem
                  containerStyle={{ backgroundColor: "#F8F8F8", height: 57 }}
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
  listView: {
    flex: 0.85,
  },
  screen: {
    flex: 1,
  },
});
