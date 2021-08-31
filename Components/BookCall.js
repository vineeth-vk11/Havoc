import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";
import { Icon } from "react-native-elements";

import RazorpayCheckout from "react-native-razorpay";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const BookCall = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../assets/ss.png")}
      style={styler.imageBg}
    >
      <SafeAreaView style={styler.screen}>
        <View style={styler.headView}>
          <View style={styler.head}>
            <View style={{ flex: 0.2, alignContent: "flex-start" }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("CallHistory");
                }}
              >
                <Icon name="arrow-back" type="ionicon" color="#000" size={30} />
              </TouchableOpacity>
            </View>

            <View
              style={{
                flex: 0.8,
                alignContent: "flex-start",
                marginLeft: 0.15 * screenWidth,
              }}
            >
              <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                Book a Call
              </Text>
            </View>
          </View>
        </View>
        <View style={styler.meditationView}>
          <View style={styler.callView}>
            <Text style={{ fontSize: 22, marginLeft: 16 }}>Call</Text>
            <Text style={{ fontSize: 22, marginRight: 16 }}>₹ 500</Text>
          </View>
          <View style={{ margin: 16, textAlign: "center" }}>
            <Text style={{ fontSize: 20, textAlign: "center" }}>
              Quick help. Any Device, where ever you are in the world
            </Text>
            <Text
              style={{
                fontSize: 20,
                textAlign: "center",
                marginTop: 0.015 * screenHeight,
                fontWeight: "bold",
              }}
            >
              Communicate your way
            </Text>
            <Text
              style={{
                fontSize: 20,
                textAlign: "center",
                marginTop: 0.015 * screenHeight,
              }}
            >
              Video | Call | Chat | Messaging
            </Text>
          </View>
        </View>
        <View style={styler.footView}>
          <TouchableOpacity
            onPress={() => {
              var options = {
                description: "Call Booking",
                image: require("../assets/logoTB.png"),
                currency: "INR",
                key: "rzp_live_qn0G40omXlC5v1",
                amount: "50000",
                name: "Havoc Therapy",
                theme: { color: "#7AC141" },
              };
              RazorpayCheckout.open(options)
                .then((data) => {
                  alert(`Success`);
                  navigation.navigate("BookCallDateTime");
                })
                .catch((error) => {
                  alert(`Error ${error.description}`);
                });
            }}
          >
            <Text style={styler.bookNow}>BOOK NOW</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default BookCall;

const styler = StyleSheet.create({
  head: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 0.02 * screenHeight,
    margin: 0.015 * screenHeight,
  },
  imageBg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  medication: {
    width: 0.65 * screenWidth,
    height: 0.2 * screenHeight,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 0.015 * screenHeight,
  },

  callView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 0.015 * screenHeight,
  },
  applyCoupon: {
    padding: 0.015 * screenHeight,
    borderColor: "#7AC141",
    borderRadius: 5,
    borderWidth: 1,
    width: 0.5 * screenWidth,
    height: 0.04 * screenHeight,
    color: "#828282",
    justifyContent: "center",
  },
  promo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 0.025 * screenHeight,
    margin: 0.015 * screenHeight,
  },
  bookNow: {
    justifyContent: "flex-end",
    borderRadius: 0.022 * screenHeight,
    width: 0.85 * screenWidth,
    height: 0.08 * screenHeight,
    backgroundColor: "#7AC141",
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 0.025 * screenHeight,
    overflow: "hidden",
    paddingVertical: 0.025 * screenHeight,
  },
  screen: { flex: 1 },
  headView: {
    flex: 0.15,
    marginTop: 0.025 * screenHeight,
  },
  meditationView: {
    flex: 0.55,
  },
  promoView: { flex: 0.1, justifyContent: "center" },
  footView: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 0.07 * screenHeight,
  },
});
