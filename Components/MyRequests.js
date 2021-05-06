import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import { ListItem, Avatar, Icon } from "react-native-elements";

import firebase from "firebase";
import { FlatList } from "react-native-gesture-handler";
require("firebase/firestore");

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
              console.log(list);
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
            <Icon
              style={{ margin: 5 }}
              name="arrow-back"
              type="ionicon"
              color="#979797"
              size={30}
            />
          </View>
          <View style={{ flex: 0.7, alignItems: "flex-start" }}>
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>
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
                    height: 80,
                    borderRadius: 5,
                    elevation: 5,
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
                              console.log("done");
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
