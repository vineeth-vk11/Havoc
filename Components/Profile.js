import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { ListItem, Icon } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
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
                  marginTop: 10,
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    navigation.goBack(null);
                  }}
                >
                  <Icon
                    style={{ marginTop: 10, marginLeft: 20 }}
                    name="arrow-back"
                    type="ionicon"
                    color="#000000"
                    size={30}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flex: 0.6, marginTop: 10 }}>
                <Text style={{ fontSize: 24 }}>Profile</Text>
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
              <View style={{ marginBottom: 10 }}>
                <Text style={{ fontSize: 30, margin: 2 }}></Text>
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
                  }
                }}
              >
                <View
                  key={i}
                  style={{
                    padding: 3,
                    paddingRight: 5,
                    paddingLeft: 5,
                  }}
                >
                  <ListItem
                    key={i}
                    containerStyle={{
                      backgroundColor: "#FFFFFF",
                      height: 53,
                      marginLeft: 8,
                      marginRight: 8,
                      borderRadius: 5,
                      elevation: 5,
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
    marginTop: 35,
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
    marginTop: 20,
    flex: 0.7,
    justifyContent: "flex-end",
  },
  imageView: {
    flex: 0.15,
    marginTop: 20,
  },
});
