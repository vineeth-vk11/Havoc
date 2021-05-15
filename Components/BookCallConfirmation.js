import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from "react-native";
import { Icon } from "react-native-elements";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const BookCallConfirmation = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styler.screen}>
      <ImageBackground
        source={require("../assets/ss.png")}
        style={styler.imageBg}
      >
        <View style={styler.headView}>
          <View style={styler.head}>
            <Text
              style={{
                fontSize: 32,
                marginTop: 0.04 * screenHeight,
                fontWeight: "bold",
              }}
            >
              Call Booking
            </Text>
          </View>
        </View>
        <View style={styler.bookingView}>
          <View style={styler.bookingSuccessfull}>
            <Icon name="check-circle" type="fontAwesome" color="#7AC141" />
            <Text style={{ fontSize: 0.035 * screenHeight, color: "#80B852" }}>
              {" "}
              Request Placed
            </Text>
          </View>
        </View>
        <View style={styler.summaryView}>
          <Text
            style={{
              fontSize: 0.025 * screenHeight,
              fontWeight: "bold",
              margin: 0.015 * screenHeight,
            }}
          >
            Summary
          </Text>
          <View style={styler.lineStyle} />
          <View style={styler.medicationView}>
            <Text
              style={{ fontSize: 0.025 * screenHeight, fontWeight: "bold" }}
            >
              To Pay Amount
            </Text>
            <Text style={{ fontSize: 0.03 * screenHeight }}>₹ 250</Text>
          </View>
          <Text
            style={{ fontSize: 16, marginHorizontal: 0.025 * screenHeight }}
          >
            Your request is placed. Our team will get in touch with you soon.
          </Text>
          <View style={styler.lineStyle} />
        </View>
        <View style={styler.footView}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("CallHistory");
            }}
          >
            <Text style={styler.finish}>FINISH</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default BookCallConfirmation;
const styler = StyleSheet.create({
  head: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0.02 * screenHeight,
    margin: 0.015 * screenHeight,
  },
  imageBg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  medicationView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 0.025 * screenHeight,
  },
  finish: {
    justifyContent: "flex-end",
    borderRadius: 15,
    width: 0.83 * screenWidth,
    height: 0.08 * screenHeight,
    backgroundColor: "#7AC141",
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 0.03 * screenHeight,
    elevation: 0.01 * screenHeight,
    overflow: "hidden",
    paddingVertical: 0.02 * screenHeight,
  },
  lineStyle: {
    borderWidth: 0.4,
    borderColor: "black",
    margin: 0.015 * screenHeight,
    borderColor: "#828282",
  },
  bookingSuccessfull: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  screen: { flex: 1 },
  headView: {
    flex: 0.15,
  },
  bookingView: {
    flex: 0.25,
    alignItems: "center",
    justifyContent: "center",
  },
  summaryView: {
    flex: 0.4,
  },
  footView: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 0.05 * screenHeight,
  },
});
