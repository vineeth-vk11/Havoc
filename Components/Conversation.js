import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";

const Conversation = ({ navigation, route }) => {
  const { name, topic, date } = route.params;

  return (
    <SafeAreaView style={styler.screen}>
      <View style={styler.headView}>
        <View style={styler.head}>
          <TouchableOpacity>
            <Icon
              style={{ marginTop: 10, marginLeft: 32 }}
              name="arrow-back"
              type="ionicon"
              color="#979797"
              size={30}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              marginTop: 10,
              alignContent: "center",
            }}
          >
            Conversation
          </Text>
          <Icon
            style={{ margin: 5 }}
            name="arrow-back"
            type="ionicon"
            color="#ffffff"
          />
        </View>
      </View>
      <View style={styler.profileView}>
        <View style={styler.container}>
          <View style={styler.texts}>
            <Text style={{ fontSize: 24 }}>{name}</Text>
            <Text style={{ color: "#828282", fontSize: 16, marginTop: 5 }}>
              {topic}
            </Text>
            <Text style={{ color: "#828282", fontSize: 16, marginTop: 5 }}>
              {date}
            </Text>
          </View>
          <View style={styler.image}>
            <Image
              style={styler.tinyLogo}
              source={require("../assets/profilepic.png")}
            />
          </View>
        </View>
      </View>
      <View style={styler.footView}>
        <TouchableOpacity>
          <Text style={styler.viewTheChat}>VIEW THE CHAT</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Conversation;

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
  tinyLogo: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  viewTheChat: {
    justifyContent: "flex-end",
    borderRadius: 15,
    width: 310,
    height: 52,
    backgroundColor: "#7AC141",
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 20,
  },
  screen: { flex: 1 },
  headView: { flex: 0.15 },
  profileView: { flex: 0.25, justifyContent: "center" },
  footView: {
    flex: 0.6,
    marginBottom: 50,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
