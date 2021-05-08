import React, { useState, useEffect } from "react";
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

const MyJournal = ({ navigation }) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  var currentUser;

  if (firebase.auth().currentUser) {
    currentUser = firebase.auth().currentUser.uid;
    console.log(currentUser);
  }
  const db = firebase.firestore();

  useEffect(() => {
    const journal = db
      .collection("users")
      .doc(currentUser)
      .collection("Journal")
      .onSnapshot((querySnapshot) => {
        const journalList = [];

        querySnapshot.forEach((documentSnapshot) => {
          journalList.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setList(journalList);
        setLoading(false);
      });

    return () => journal();
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
              flex: 0.4,
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
                style={{ marginLeft: 32 }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 0.6 }}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              My Journal
            </Text>
          </View>
        </View>
        <View style={styler.listView}>
          <FlatList
            data={list}
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
                      height: 79,
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
                      <ListItem.Subtitle>{item.date}</ListItem.Subtitle>
                    </ListItem.Content>
                    <ListItem.Chevron size={35} />
                  </ListItem>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
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
