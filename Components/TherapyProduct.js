import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ImageBackground,
} from "react-native";
import { Icon } from "react-native-elements";
import { Button } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const TherapyProduct = ({ navigation, route }) => {
  const { name, description, cost, image } = route.params;

  return (
    <SafeAreaView style={styler.screen}>
      <ImageBackground
        source={require("../assets/ss.png")}
        style={styler.imageBg}
      >
        <ScrollView>
          <View style={styler.headView}>
            <View style={styler.head}>
              <View
                style={{
                  flex: 0.3,
                  flexDirection: "row",
                  alignContent: "flex-start",
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    navigation.goBack(null);
                  }}
                >
                  <Icon
                    name="arrow-back"
                    type="ionicon"
                    color="#000"
                    style={{ marginTop: 10, marginLeft: 20 }}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flex: 0.7, alignContent: "flex-end" }}>
                <Text style={{ fontSize: 24, marginTop: 10 }}>
                  Therapy Product
                </Text>
              </View>
            </View>
          </View>
          <View style={styler.imageView}>
            <Image style={styler.meditation} source={{ uri: image[0] }} />
          </View>
          <View style={styler.meditationView}>
            <View style={styler.meditationTexts}>
              <Text style={{ fontSize: 22, marginLeft: 16 }}>{name}</Text>
              <Text style={{ fontSize: 22, marginRight: 16 }}>
                {"₹ " + cost}
              </Text>
            </View>
            <View style={{ marginLeft: 16, marginRight: 16 }}>
              <Text>{description}</Text>
            </View>
          </View>
          <View style={styler.footView}>
            <TouchableOpacity>
              <Text style={styler.bookNow}>BOOK NOW</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default TherapyProduct;

const styler = StyleSheet.create({
  head: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 35,
    margin: 10,
  },
  imageBg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  meditation: {
    width: windowWidth / 1.3,
    height: windowHeight / 4,
    borderRadius: 5,
  },
  tinyLogo: {
    width: 114,
    height: 114,
    borderRadius: 100,
  },
  meditationTexts: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 10,
  },
  applyCoupon: {
    padding: 10,
    borderColor: "#7AC141",
    borderRadius: 5,
    borderWidth: 1,
    width: 198,
    height: 35,
    color: "#828282",
    justifyContent: "center",
  },
  promo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 20,
    margin: 10,
  },
  bookNow: {
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
  headView: {
    flex: 0.15,
    marginTop: 10,
  },
  imageView: {
    flex: 0.25,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 24,
  },
  meditationView: {
    flex: 0.25,
    paddingTop: 10,
  },
  footView: {
    height: windowHeight / 3.5,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
