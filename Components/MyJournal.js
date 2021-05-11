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
  Dimensions,
} from "react-native";
import { ListItem, Avatar, Icon } from "react-native-elements";
import firebase from "firebase";
import { FlatList } from "react-native-gesture-handler";
require("firebase/firestore");

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

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
                    <Avatar
                      source={require("../assets/profilepic.png")}
                      size={0.045 * screenHeight}
                    />
                    <ListItem.Content>
                      <ListItem.Title>{item.listenerName}</ListItem.Title>
                      <ListItem.Subtitle>{item.topic}</ListItem.Subtitle>
                      <ListItem.Subtitle>{item.date}</ListItem.Subtitle>
                    </ListItem.Content>
                    <ListItem.Chevron size={0.045 * screenHeight} />
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
