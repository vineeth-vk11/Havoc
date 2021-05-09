import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";
import { ListItem, Icon } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

import firebase from "firebase";
require("firebase/auth");

const list = [
  {
    title: "Call History",
    icon: "list",
  },
  {
    title: "Listener Age Range",
    icon: "funnel-outline",
  },
  {
    title: "Therapies",
    icon: "clipboard",
  },
  {
    title: "My Therapies",
    icon: "medkit",
  },
  {
    title: "Refer a friend",
    icon: "share-social",
  },
  {
    title: "Privacy Policy",
    icon: "lock-closed-outline",
  },
  {
    title: "Terms & Conditions",
    icon: "document-outline",
  },
  {
    title: "Feedback",
    icon: "create-outline",
  },
  {
    title: "Logout",
    icon: "log-out",
  },
];

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const Profile = ({ navigation }) => {
  return (
    <ScrollView>
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
                  marginTop: 0.015 * screenHeight,
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    navigation.goBack(null);
                  }}
                >
                  <Icon
                    style={{
                      marginTop: 0.015 * screenHeight,
                      marginLeft: 0.025 * screenHeight,
                    }}
                    name="arrow-back"
                    type="ionicon"
                    color="#000000"
                    size={0.05 * screenHeight}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flex: 0.6, marginTop: 0.015 * screenHeight }}>
                <Text style={{ fontSize: 0.035 * screenHeight }}>Profile</Text>
              </View>
            </View>
          </View>
          <View style={styler.imageView}>
            <View style={styler.container}>
              <View style={styler.image}>
                <Image
                  style={styler.dp}
                  source={require("../assets/profilepic.png")}
                />
              </View>
              <View style={{ marginBottom: 0.015 * screenHeight }}>
                <Text
                  style={{
                    fontSize: 0.03 * screenHeight,
                    margin: 0.01 * screenHeight,
                  }}
                ></Text>
              </View>
            </View>
          </View>
          <View style={styler.listView}>
            {list.map((item, i) => (
              <TouchableOpacity
                key={item.title}
                onPress={() => {
                  if (item.title === "Call History") {
                    navigation.navigate("CallHistory");
                  } else if (item.title === "Listener Age Range") {
                  } else if (item.title === "Therapies") {
                    navigation.navigate("Therapies");
                  } else if (item.title === "My Therapies") {
                    // navigation.navigate("MyTherapies");
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
                  key={i}
                  style={{
                    padding: 0.01 * screenHeight,
                    paddingRight: 0.012 * screenHeight,
                    paddingLeft: 0.012 * screenHeight,
                  }}
                >
                  <ListItem
                    key={i}
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
            ))}
          </View>
        </SafeAreaView>
      </ImageBackground>
    </ScrollView>
  );
};

export default Profile;

const styler = StyleSheet.create({
  head: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 0.06 * screenHeight,
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
    flex: 0.7,
    justifyContent: "flex-end",
  },
  imageView: {
    flex: 0.15,
    marginTop: 0.025 * screenWidth,
  },
});
