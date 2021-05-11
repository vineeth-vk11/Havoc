import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import { ListItem, Avatar, Icon } from "react-native-elements";

import firebase from "firebase";
import { FlatList } from "react-native-gesture-handler";
require("firebase/firestore");

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const MyRequests = ({ navigation }) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  const [age, setAge] = useState();
  const [topics, setTopics] = useState([]);
  const [listenerName, setListenerName] = useState();

  useEffect(() => {
    if (firebase.auth().currentUser) {
      var currentUser = firebase.auth().currentUser.uid;
      const db = firebase.firestore();

      db.collection("Listeners")
        .doc(currentUser)
        .get()
        .then((documentSnapshot) => {
          if (documentSnapshot.exists) {
            var data = documentSnapshot.data();

            setAge(data["age"]);
            setTopics(data["topics"]);
            setListenerName(data["name"]);

            db.collection("ChatRequests").onSnapshot((querySnapshot) => {
              const requestsList = [];

              querySnapshot.forEach((documentSnapshot) => {
                requestsList.push({
                  ...documentSnapshot.data(),
                  key: documentSnapshot.id,
                });
              });

              setList(requestsList);
              setLoading(false);
            });
          }
        });
    }
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

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
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.goBack(null);
              }}
            >
              <Icon
                style={{ margin: 0.01 * screenHeight }}
                name="arrow-back"
                type="ionicon"
                color="#000"
                size={0.04 * screenHeight}
              />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 0.7, alignItems: "flex-start" }}>
            <Text
              style={{ fontSize: 0.034 * screenHeight, fontWeight: "bold" }}
            >
              My Requests
            </Text>
          </View>
        </View>
        <View style={styler.listView}>
          <FlatList
            data={list}
            renderItem={({ item }) => (
              <View
                style={{
                  padding: 0.009 * screenHeight,
                  paddingRight: 0.01 * screenHeight,
                  paddingLeft: 0.01 * screenHeight,
                  marginLeft: 0.012 * screenHeight,
                  marginRight: 0.012 * screenHeight,
                }}
              >
                <ListItem
                  containerStyle={{
                    backgroundColor: "#F8F8F8",
                    height: 0.09 * screenHeight,
                    borderRadius: 0.01 * screenHeight,
                    elevation: 0.01 * screenHeight,
                  }}
                >
                  <Avatar source={require("../assets/profilepic.png")} />
                  <ListItem.Content>
                    <ListItem.Title>{item.userName}</ListItem.Title>
                    <ListItem.Subtitle>{item.topic}</ListItem.Subtitle>
                  </ListItem.Content>
                  <TouchableOpacity>
                    <Icon name={"close"} color="red" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      var currentUser = firebase.auth().currentUser.uid;
                      const db = firebase.firestore();

                      var chatId = item.key;

                      db.collection("Chats")
                        .doc(chatId)
                        .update({
                          listener: currentUser,
                          listenerName: listenerName,
                        })
                        .then(() => {
                          db.collection("ChatRequests")
                            .doc(chatId)
                            .delete()
                            .then(() => {
                              navigation.navigate("MainChat", {
                                chatId: chatId,
                                listenerId: item.user,
                                type: "listener",
                                listenerName: listenerName,
                                topic: item.topic,
                              });
                            });
                        });
                    }}
                  >
                    <Icon name={"checkmark"} type="ionicon" color="green" />
                  </TouchableOpacity>
                </ListItem>
              </View>
            )}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default MyRequests;

const styler = StyleSheet.create({
  head: {
    flex: 0.15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 0.025 * screenHeight,
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
