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
      <View style={styler.head}>
        <Icon
          style={{ marginLeft: 32, marginTop: 10 }}
          name="arrow-back"
          type="ionicon"
          color="#979797"
          size={30}
        />
        <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 10 }}>
          My Journal
        </Text>
        <Icon reverse name="person" type="ionicon" color="#ffff" />
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
                });
              }}
            >
              <View style={{ padding: 3, paddingRight: 5, paddingLeft: 5 }}>
                <ListItem
                  containerStyle={{ backgroundColor: "#F8F8F8", height: 79 }}
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
    </SafeAreaView>
  );
};

export default MyJournal;

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
