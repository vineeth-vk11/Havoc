import React, { Component, useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Linking,
  ActivityIndicator,
} from "react-native";
import { ListItem, Icon } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { FlatList } from "react-native-gesture-handler";

import firebase from "firebase";
import { set } from "react-native-reanimated";
require("firebase/auth");

const list = [
  {
    title: "Call History",
    icon: "list",
    key: "0",
  },
  {
    title: "Listener Age Range",
    icon: "funnel-outline",
    key: "1",
  },
  {
    title: "Therapies",
    icon: "clipboard",
    key: "2",
  },
  {
    title: "My Therapies",
    icon: "medkit",
    key: "3",
  },
  {
    title: "Privacy Policy",
    icon: "lock-closed-outline",
    key: "4",
  },
  {
    title: "Terms & Conditions",
    icon: "document-outline",
    key: "5",
  },
  {
    title: "Feedback",
    icon: "create-outline",
    key: "6",
  },
  {
    title: "Logout",
    icon: "log-out",
    key: "7",
  },
];

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const Profile = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [type, setType] = useState();

  useEffect(() => {
    if (loading) {
      var currentUser = firebase.auth().currentUser.uid;
      firebase
        .firestore()
        .collection("users")
        .doc(currentUser)
        .get()
        .then((documentSnapshot) => {
          setName(documentSnapshot.data()["name"]);
          var isListener = documentSnapshot.data()["isListener"];
          if (isListener) {
            setType("Listener");
          } else {
            setType("Seeker");
          }
          setLoading(false);
        });
    }
  });

  const listHeader = () => {
    return (
      <View style={styler.imageView}>
        <View style={styler.container}>
          <View
            style={{
              flex: 0.4,
              alignContent: "flex-start",
              marginLeft: 0.05 * screenWidth,
            }}
          >
            <Image
              style={styler.dp}
              source={require("../assets/profilepic.png")}
            />
          </View>
          <View
            style={{
              flex: 0.6,
              marginBottom: 0.015 * screenHeight,
            }}
          >
            <Text
              style={{
                fontSize: 0.025 * screenHeight,
              }}
            >
              {name}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  if (loading) {
    return <ActivityIndicator style={{ flex: 1, alignContent: "center" }} />;
  }

  return (
    <ImageBackground
      source={require("../assets/ss.png")}
      style={styler.imageBg}
    >
      <SafeAreaView style={styler.screen}>
        <View style={styler.headView}>
          <View style={styler.head}>
            <View
              style={{
                flex: 0.4,
                alignItems: "flex-start",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  if (type === "Listener") {
                    navigation.navigate("ListenerDB");
                  } else {
                    navigation.navigate("Register3");
                  }
                }}
              >
                <Icon
                  style={{
                    marginLeft: 0.025 * screenHeight,
                  }}
                  name="arrow-back"
                  type="ionicon"
                  color="#000000"
                  size={30}
                />
              </TouchableOpacity>
            </View>

            <View style={{ flex: 0.6 }}>
              <Text style={{ fontSize: 0.035 * screenHeight }}>Profile</Text>
            </View>
          </View>
        </View>

        <View style={styler.listView}>
          <FlatList
            data={list}
            ListHeaderComponent={listHeader}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  if (item.title === "Call History") {
                    navigation.navigate("CallHistory");
                  } else if (item.title === "Listener Age Range") {
                    navigation.navigate("SetListenerAge");
                  } else if (item.title === "Therapies") {
                    navigation.navigate("Therapies");
                  } else if (item.title === "My Therapies") {
                    navigation.navigate("MyTherapies");
                  } else if (item.title === "Privacy Policy") {
                    Linking.openURL(
                      "https://www.havoctherapy.com/privacy-statement"
                    );
                  } else if (item.title === "Terms & Conditions") {
                    Linking.openURL(
                      "https://www.havoctherapy.com/terms-of-service"
                    );
                  } else if (item.title === "Feedback") {
                    navigation.navigate("GiveFeedback");
                  } else if (item.title === "Logout") {
                    firebase
                      .auth()
                      .signOut()
                      .then(() => {
                        navigation.navigate("Register1");
                      });
                  }
                }}
              >
                <View
                  style={{
                    padding: 0.01 * screenHeight,
                    paddingRight: 0.012 * screenHeight,
                    paddingLeft: 0.012 * screenHeight,
                  }}
                >
                  <ListItem
                    containerStyle={{
                      backgroundColor: "#FFFFFF",
                      height: 0.07 * screenHeight,
                      marginLeft: 0.01 * screenHeight,
                      marginRight: 0.012 * screenHeight,
                      borderRadius: 0.01 * screenHeight,
                      elevation: 0.01 * screenHeight,
                    }}
                  >
                    <Icon name={item.icon} type="ionicon" />
                    <ListItem.Content>
                      <ListItem.Title>{item.title}</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                  </ListItem>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Profile;

const styler = StyleSheet.create({
  head: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 0.03 * screenHeight,
  },
  imageBg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  dp: {
    width: 0.3 * screenWidth,
    height: 0.3 * screenWidth,
    borderRadius: 0.3 * screenWidth,
  },
  screen: { flex: 1 },
  headView: { flex: 0.15 },
  profileView: {
    flex: 0.3,
  },
  listView: {
    marginTop: 0.025 * screenWidth,
    flex: 0.85,
    justifyContent: "flex-end",
  },
  imageView: {
    flex: 0.15,
  },
});
