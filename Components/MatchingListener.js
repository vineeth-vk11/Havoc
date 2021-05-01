import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";
import LottieView from "lottie-react-native";

const MatchingListener = ({ navigation }) => {
  return (
    <SafeAreaView style={styler.screen}>
      <View style={styler.headView}>
        <View style={styler.head}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack(null);
            }}
          >
            <Icon
              style={{ margin: 5 }}
              name="close"
              type="ionicon"
              color="#979797"
              size={30}
              style={{ marginRight: 32, marginTop: 20 }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styler.textView}>
        <Text style={styler.textHeading}>Matching you with a Listener</Text>
        <View style={styler.loaderView}>
          <LottieView
            style={{ width: 150, height: 150 }}
            source={require("../assets/loading.json")}
            autoPlay
            loop
          />
        </View>
      </View>
      <View style={styler.footView}>
        <Text style={styler.text}>
          Our algorithm is finding you the perfect Listener. Our listener will
          connect with you soon!
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default MatchingListener;
const styler = StyleSheet.create({
  head: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: 35,
  },
  textHeading: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    margin: 5,
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    margin: 20,
  },
  screen: {
    flex: 1,
  },
  headView: {
    flex: 0.2,
  },
  textView: {
    flex: 0.2,
    marginLeft: 10,
  },
  loaderView: {
    flex: 0.1,
    margin: 5,
    alignItems: "center",
  },
  footView: {
    flex: 0.3,
    justifyContent: "flex-end",
    marginBottom: 50,
  },
});
