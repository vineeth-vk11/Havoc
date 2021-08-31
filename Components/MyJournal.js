import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  ImageBackground,
  Dimensions,
} from "react-native";

import { ListItem, Avatar, Icon } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";

import Moment from "moment";

import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const MyJournal = ({ navigation }) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  var currentUser;

  if (firebase.auth().currentUser) {
    currentUser = firebase.auth().currentUser.uid;
  }

  useEffect(() => {
    const journal =
      firestore()
        .collection("users")
        .doc(currentUser)
        .collection("Journal")
        .onSnapshot((querySnapshot) => {
          const journalList = [];

          querySnapshot.forEach((documentSnapshot) => {
            journalList.push({
              ...documentSnapshot.data(),
              key: documentSnapshot.id,
              dateF: Moment(documentSnapshot.data()["date"], "DD/MM/YYYY").format(
                "MMM Do YY"
              ),
            });
          });

          setList(journalList);
          setLoading(false);
        });

    return () => journal();
  }, []);

  if (loading) {
    return <ActivityIndicator style={{ flex: 1, alignContent: "center" }} />;
  }

  const renderList = () => {
    if (list.length === 0) {
      return (
        <View
          style={{
            flex: 0.85,
            marginLeft: 0.04 * screenHeight,
            marginRight: 0.04 * screenHeight,
          }}
        >
          <Text style={{ fontSize: 16, marginTop: "50%", textAlign: "center" }}>
            Need to go strengthen yourself by the golden words said by your
            listener ? You'll find it here. The journal will hold all your
            previous chats and you can access them whenever you feel like
            recollecting.
          </Text>
        </View>
      );
    } else {
      return (
        <View style={styler.listView}>
          <FlatList
            data={list.sort((a, b) => a.date.localeCompare(b.date)).reverse()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Conversation", {
                    name: item.listenerName,
                    topic: item.topic,
                    date: item.date,
                    chatId: item.chatId,
                    listenerId: item.listenerId,
                  });
                }}
              >
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
                      height: 0.12 * screenHeight,
                      borderRadius: 0.01 * screenHeight,
                      elevation: 0.01 * screenHeight,
                    }}
                  >
                    <Avatar
                      source={require("../assets/profilepic.png")}
                      size={0.045 * screenHeight}
                    />
                    <ListItem.Content>
                      <ListItem.Title>{item.listenerName}</ListItem.Title>
                      <ListItem.Subtitle style={{ marginTop: 5 }}>
                        {item.topic}
                      </ListItem.Subtitle>
                      <ListItem.Subtitle style={{ marginTop: 5 }}>
                        {item.dateF}
                      </ListItem.Subtitle>
                    </ListItem.Content>
                    <ListItem.Chevron size={0.045 * screenHeight} />
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
                name="arrow-back"
                type="ionicon"
                color="#000000"
                size={30}
                style={{ marginLeft: 0.03 * screenHeight }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 0.7 }}>
            <Text
              style={{
                fontSize: 0.032 * screenHeight,
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              My Journal
            </Text>
          </View>
        </View>

        {renderList()}
      </ImageBackground>
    </SafeAreaView>
  );
};

export default MyJournal;

const styler = StyleSheet.create({
  head: {
    flex: 0.15,
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
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
