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
import { Icon } from "react-native-elements";
const Register3 = ({ navigation }) => {
  return (
    <ImageBackground source={require("../assets/ss.png")} style={styler.image}>
      <SafeAreaView style={styler.screen}>
        <View style={styler.headerView}>
          <View style={styler.head}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Profile");
              }}
            >
              <Icon
                reverse
                name="person-circle"
                type="ionicon"
                color="#7AC141"
                size={24}
              />
            </TouchableOpacity>
          </View>
          <View style={styler.imageView}>
            <Image
              style={{ width: 80, height: 80, alignSelf: "center" }}
              source={require("../assets/logoTB.png")}
            />
          </View>
        </View>
        <View style={styler.textView}>
          <Text style={styler.text}>ARE YOU READY?</Text>
          <Text style={styler.textSmall}>
            Connect with a trained listener to {"\n"} talk about anything
          </Text>
        </View>
        <View style={styler.findMyListnerView}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("PickTopic");
            }}
          >
            <View style={styler.find}>
              <Text
                style={{ color: "white", textAlign: "center", fontSize: 20 }}
              >
                FIND MY{"\n"}LISTENER
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styler.talkingNow}>
          <Text style={styler.tnText}>Talking Now : 033</Text>
        </View>
        <View style={styler.footerView}>
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("NewListenerInfo");
              }}
            >
              <Icon
                reverse
                name="user-friends"
                type="font-awesome-5"
                color="#7AC141"
                size={24}
                reverseColor="white"
              />
            </TouchableOpacity>
            <Text>Become</Text>
            <Text>Listener</Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("MyJournal");
              }}
            >
              <Icon
                reverse
                name="journal"
                type="ionicon"
                color="#7AC141"
                size={24}
              />
            </TouchableOpacity>
            <Text>Journal</Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("DedicatedChats");
              }}
            >
              <Icon
                reverse
                name="chat"
                type="material-icons"
                color="#7AC141"
                size={24}
              />
            </TouchableOpacity>
            <Text>Dedicated</Text>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Register3;

const styler = StyleSheet.create({
  screen: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  head: {
    width: "35%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 35,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  textSmall: {
    fontSize: 16,
    margin: 10,
    textAlign: "center",
  },
  find: {
    backgroundColor: "#7AC141",
    width: 135,
    height: 135,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  headerView: {
    flex: 0.3,
    flexDirection: "row",
    padding: 10,
  },
  textView: {
    flex: 0.1,
  },
  findMyListnerView: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center",
  },
  footerView: {
    flexDirection: "row",
    flex: 0.2,
    marginTop: 80,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: "space-around",
    alignItems: "center",
  },
  imageView: {
    marginTop: 35,
  },
  talkingNow: {
    justifyContent: "center",
    alignItems: "center",
  },
  tnText: {
    fontSize: 25,
  },
});
