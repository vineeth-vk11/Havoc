import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { ListItem, Icon } from "react-native-elements";
const list = [
  {
    title: "Call history",
    icon: "list",
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
    title: "Become a listner",
    icon: "briefcase",
  },
  {
    title: "Refer a friend",
    icon: "share-social",
  },
  {
    title: "Logout",
    icon: "log-out",
  },
];
const Profile = () => {
  return (
    <SafeAreaView style={styler.screen}>
      <View style={styler.headView}>
        <View style={styler.head}>
          <TouchableOpacity>
            <Icon
              style={{ marginTop: 10, marginLeft: 20 }}
              name="arrow-back"
              type="ionicon"
              color="#979797"
              size={30}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 24 }}>Profile</Text>
        </View>
      </View>
      <View style={styler.headView}>
        <View style={styler.container}>
          <View style={styler.image}>
            <Image
              style={styler.dp}
              source={require("../assets/Images/Conversation.png")}
            />
          </View>
          <View style={{ marginBottom: 10 }}>
            <Text style={{ fontSize: 30, margin: 2 }}>Mahesh</Text>
            <Text style={{ color: "#828282", margin: 2 }}>9981756898</Text>
            <Text style={{ color: "#828282", margin: 2 }}>
              mahesh@dclabs.co.in
            </Text>
            <Text style={{ color: "#828282", margin: 2 }}>
              Member since,14 March Sunday
            </Text>
          </View>
        </View>
      </View>
      <View style={styler.listView}>
        {list.map((item, i) => (
          <View key={i} style={{ padding: 3, paddingRight: 5, paddingLeft: 5 }}>
            <ListItem
              key={i}
              containerStyle={{ backgroundColor: "#F8F8F8", height: 53 }}
            >
              <Icon name={item.icon} type="ionicon" />
              <ListItem.Content>
                <ListItem.Title>{item.title}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styler = StyleSheet.create({
  head: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 35,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  dp: {
    width: 109,
    height: 109,
    borderRadius: 100,
  },
  screen: { flex: 1 },
  headView: { flex: 0.15 },
  profileView: {
    flex: 0.3,
  },
  listView: {
    flex: 0.55,
    justifyContent: "flex-end",
  },
});
