import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

import { Icon } from "react-native-elements";

const Booking = () => {
  return (
    <SafeAreaView style={styler.screen}>
      <View style={styler.headView}>
        <View style={styler.head}>
          <TouchableOpacity>
            <Icon name="arrow-back" type="ionicon" color="#979797" />
          </TouchableOpacity>
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>Booking</Text>
          <TouchableOpacity>
            <Icon name="arrow-back" type="ionicon" color="#ffff" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styler.bookingView}>
        <View style={styler.bookingSuccessfull}>
          <Icon name="check-circle" type="fontAwesome" color="#7AC141" />
          <Text style={{ fontSize: 24, color: "#80B852" }}>
            {" "}
            Booking Successfull
          </Text>
        </View>
      </View>
      <View style={styler.summaryView}>
        <Text style={{ fontSize: 18, fontWeight: "bold", margin: 0.015 * screenHeight }}>
          Summary
        </Text>
        <View style={styler.lineStyle} />
        <View style={styler.medicationView}>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>Paid Amount</Text>
          <Text style={{ fontSize: 20 }}>₹ 250</Text>
        </View>
        <Text style={{ margin: 0.015 * screenHeight, width: 0.4 * screenWidth }}>
          Your booking is confirmed on 5PM, 5th Match. You will receive a call
          on +918978117894.
        </Text>
        <View style={styler.lineStyle} />
      </View>
      <View style={styler.footView}>
        <TouchableOpacity>
          <Text style={styler.finish}>FINISH</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Booking;
const styler = StyleSheet.create({
  head: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 0.07 * screenHeight,
    margin: 0.015 * screenHeight,
  },
  medicationView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 0.015 * screenHeight,
  },
  finish: {
    justifyContent: "flex-end",
    borderRadius: 0.021 * screenHeight,
    width: 0.85 * screenWidth,
    height: 0.07 * screenHeight,
    backgroundColor: "#7AC141",
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 0.03 * screenHeight,
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
    marginTop: 0.1 * screenHeight,
    marginBottom: 0.1 * screenHeight,
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
    flex: 0.3,
  },
  footView: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 0.09 * screenHeight,
  },
});
