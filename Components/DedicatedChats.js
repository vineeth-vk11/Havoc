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
  Dimensions
} from "react-native";
import { ListItem, Avatar, Icon } from "react-native-elements";
import firebase from "firebase";
import { FlatList } from "react-native-gesture-handler";
require("firebase/firestore");

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

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
            marginLeft: 0.04*screenHeight,
            marginRight: 0.04*screenHeight,
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
                    padding: 0.009*screenHeight,
                    paddingRight: 0.01*screenHeight,
                    paddingLeft: 0.01*screenHeight,
                    marginLeft: 0.012*screenHeight,
                    marginRight: 0.012*screenHeight,
                  }}
                >
                  <ListItem
                    containerStyle={{
                      backgroundColor: "#F8F8F8",
                      height: 0.08*screenHeight,
                      borderRadius: 0.01*screenHeight,
                      elevation: 0.01*screenHeight,
                    }}
                  >
                    <Avatar
                      source={require("../assets/profilepic.png")}
                      size={0.04*screenHeight}
                    />
                    <ListItem.Content>
                      <ListItem.Title>{item.listenerName}</ListItem.Title>
                      <ListItem.Subtitle>{item.topic}</ListItem.Subtitle>
                    </ListItem.Content>
                    <ListItem.Chevron size={0.04*screenHeight} />
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
                style={{ marginTop: 0.015*screenHeight, marginLeft: 0.04*screenHeight }}
                name="arrow-back"
                type="ionicon"
                color="#000000"
                size={0.04*screenHeight}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 0.7,
              alignItems: "flex-start",
            }}
          >
            <Text style={{ fontSize: 0.032*screenHeight, fontWeight: "bold", marginTop: 0.015*screenHeight }}>
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
    marginTop: 0.025*screenHeight,
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
