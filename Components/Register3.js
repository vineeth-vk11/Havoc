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

const screenWidth= Dimensions.get('window').width;
const screenHeight=Dimensions.get('window').height;

const Register3 = ({ navigation }) => {
  return (
    <SafeAreaView style={styler.screen}>
      <ImageBackground
        source={require("../assets/ss.png")}
        style={styler.image}
      >
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
              style={{ width: 0.11*screenHeight, height: 0.11*screenHeight, alignSelf: "center" }}
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
                style={{ color: "white", textAlign: "center", fontSize: 0.03*screenHeight }}
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
            <TouchableOpacity>
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
      </ImageBackground>
    </SafeAreaView>
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
    width: 0.31*screenWidth,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 0.06*screenHeight,
  },
  text: {
    fontSize: 0.03*screenHeight,
    fontWeight: "bold",
    textAlign: "center",
  },
  textSmall: {
    fontSize: 0.025*screenHeight,
    margin: 0.02*screenHeight,
    textAlign: "center",
  },
  find: {
    backgroundColor: "#7AC141",
    width: 0.2*screenHeight,
    height: 0.2*screenHeight,
    borderRadius: 0.1*screenHeight,
    alignItems: "center",
    justifyContent: "center",
  },
  headerView: {
    flex: 0.3,
    flexDirection: "row",
    padding: 0.05*screenHeight,
  },
  textView: {
    flex: 0.1,
    marginBottom: 0.05*screenHeight
  },
  findMyListnerView: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center",
  },
  footerView: {
    flexDirection: "row",
    flex: 0.2,
    marginTop: 0.13*screenHeight,
    marginBottom: 0.04*screenHeight,
    marginLeft: 0.04*screenHeight,
    marginRight: 0.04*screenHeight,
    justifyContent: "space-around",
    alignItems: "center",
  },
  imageView: {
    marginTop: 0.05*screenHeight,
  },
  talkingNow: {
    justifyContent: "center",
    alignItems: "center",
  },
  tnText: {
    fontSize: 0.035*screenHeight,
  },
});
