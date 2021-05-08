import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Dimensions
} from "react-native";
import { Icon } from "react-native-elements";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const Conversation = ({ navigation, route }) => {
  const { name, topic, date, chatId, listenerId } = route.params;

  return (
    <SafeAreaView style={styler.screen}>
      <ImageBackground
        source={require("../assets/ss.png")}
        style={styler.imageBg}
      >
        <View style={styler.headView}>
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
                  style={{ marginTop: 0.025*screenHeight, marginLeft: 32 }}
                  name="arrow-back"
                  type="ionicon"
                  color="#000000"
                  size={30}
                />
              </TouchableOpacity>
            </View>

            <View style={{ flex: 0.7 }}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                  marginTop: 20,
                  alignContent: "center",
                }}
              >
                Conversation
              </Text>
            </View>
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
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("JournalChat", {
                chatId: chatId,
              });
            }}
          >
            <Text style={styler.viewTheChat}>VIEW THE CHAT</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Conversation;

const styler = StyleSheet.create({
  head: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 0.048*screenHeight,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  tinyLogo: {
    width: 0.3*screenWidth,
    height: 0.3*screenWidth,
    borderRadius: 0.3*screenWidth,
  },
  viewTheChat: {
    justifyContent: "flex-end",
    borderRadius: 0.02*screenHeight,
    width: 0.85*screenWidth,
    height: 0.07*screenHeight,
    backgroundColor: "#7AC141",
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 0.029*screenHeight,
  },
  screen: { flex: 1 },
  headView: { flex: 0.15 },
  profileView: { flex: 0.25, justifyContent: "center" },
  footView: {
    flex: 0.6,
    marginBottom: 0.07*screenHeight,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  imageBg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
