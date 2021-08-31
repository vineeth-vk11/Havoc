import React from "react";
import { ImageBackground } from "react-native";
import { SafeAreaView, StyleSheet, Text } from "react-native";

import { Icon } from "react-native-elements";

const BecomeListenerResult = ({ navigation, route }) => {
  const { result } = route.params;

  setTimeout(function () {
    if (result) {
      navigation.navigate("ListenerDB");
    } else {
      navigation.navigate("Register3");
    }
  }, 4000);

  const renderResult = () => {
    if (result) {
      return (
        <SafeAreaView style={styler.screen}>
          <Icon
            reverse
            name="checkmark-circle-outline"
            type="ionicon"
            color="#7AC141"
            size={24}
          />
          <Text style={{ color: "#7AC141", fontSize: 24, fontWeight: "bold" }}>
            Congratulations
          </Text>
          <Text
            style={{ fontSize: 16, textAlign: "center", marginHorizontal: 32 }}
          >
            You are a listener now! We are redirecting you to your listener
            dashboard
          </Text>
        </SafeAreaView>
      );
    } else {
      return (
        <SafeAreaView style={styler.screen}>
          <Icon
            reverse
            name="close-outline"
            type="ionicon"
            color="#FF0000"
            size={24}
          />
          <Text style={{ color: "#FF0000", fontSize: 24, fontWeight: "bold" }}>
            Failed
          </Text>
          <Text
            style={{ fontSize: 16, textAlign: "center", marginHorizontal: 32 }}
          >
            You have failed the test! We are redirecting you to your dashboard
          </Text>
        </SafeAreaView>
      );
    }
  };
  return (
    <ImageBackground
      source={require("../assets/ss.png")}
      style={styler.imageBg}
    >
      {renderResult()}
    </ImageBackground>
  );
};

export default BecomeListenerResult;

const styler = StyleSheet.create({
  screen: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  imageBg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
