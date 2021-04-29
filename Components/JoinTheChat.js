import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { Icon } from "react-native-elements";
import { Button } from "react-native-elements";
const JoinTheChat = () => {
  return (
    <SafeAreaView style={styler.screen}>
      <View style={styler.headView}>
        <View style={styler.head}>
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>
            Request Accepted By{" "}
          </Text>
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>Mahesh </Text>
        </View>
      </View>

      <View style={styler.imageView}>
        <Image
          style={styler.dp}
          source={require("../assets/Images/Conversation.png")}
        />
      </View>
      <View style={styler.aboutView}>
        <View style={styler.about}>
          <Text style={{ fontSize: 22 }}>About </Text>
          <Text style={{ fontSize: 22 }}>Mahesh</Text>
        </View>
        <View style={styler.about}>
          <Text>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.
          </Text>
        </View>
      </View>

      <View style={styler.topicsView}>
        <Text style={{ fontSize: 22, fontWeight: "bold", margin: 10 }}>
          Topics{" "}
        </Text>
        <View style={styler.topics}>
          <View style={styler.topicInner}>
            <Text style={{ color: "#fff" }}>Relationships</Text>
          </View>
          <View style={styler.topicInner}>
            <Text style={{ color: "#fff" }}>Career</Text>
          </View>
        </View>
      </View>
      <View style={styler.footView}>
        <TouchableOpacity>
          <Text style={styler.bookNow}>JOIN THE CHAT</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default JoinTheChat;

const styler = StyleSheet.create({
  head: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 45,
    margin: 10,
  },
  medication: {
    width: 258,
    height: 172,
  },
  tinyLogo: {
    width: 114,
    height: 114,
    borderRadius: 100,
  },
  about: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    margin: 10,
  },
  bookNow: {
    justifyContent: "flex-end",
    borderRadius: 15,
    width: 310,
    height: 52,
    backgroundColor: "#7AC141",
    color: "white",
    margin: 20,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 20,
  },
  dp: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  topics: {
    flexDirection: "row",
  },
  topicInner: {
    backgroundColor: "#7AC141",
    padding: 10,
    borderRadius: 84,
    margin: 10,
  },
  screen: {
    flex: 1,
  },
  headView: {
    flex: 0.1,
  },
  imageView: {
    flex: 0.35,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  aboutView: {
    flex: 0.2,
  },
  topicsView: {
    flex: 0.25,
  },
  footView: {
    flex: 0.1,
    justifyContent: "flex-end",
    marginBottom: 50,
  },
});
