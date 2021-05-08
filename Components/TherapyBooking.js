import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { Icon } from "react-native-elements";

const screenWidth= Dimensions.get('window').width;
const screenHeight=Dimensions.get('window').height;

const TherapyBooking = () => {
  return (
    <SafeAreaView style={styler.screen}>
      <View style={styler.headView}>
        <View style={styler.head}>
          <TouchableOpacity>
            <Icon name="arrow-back" type="ionicon" color="#979797" />
          </TouchableOpacity>
          <Text style={{ fontSize: 0.035*screenHeight, fontWeight: "bold" }}>
            Therapy Booking
          </Text>
          <TouchableOpacity>
            <Icon name="arrow-back" type="ionicon" color="#ffff" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styler.bookingView}>
        <View style={styler.bookingSuccessfull}>
          <Icon name="check-circle" type="fontAwesome" color="#7AC141" />
          <Text style={{ fontSize: 0.035*screenHeight, color: "#80B852" }}>
            {" "}
            Booking Successfull
          </Text>
        </View>
      </View>
      <View style={styler.summaryView}>
        <Text style={{ fontSize: 0.025*screenHeight, fontWeight: "bold", margin: 0.015*screenHeight }}>
          Summary
        </Text>
        <View style={styler.lineStyle} />
        <View style={styler.medicationView}>
          <Text style={{ fontSize: 0.025*screenHeight, fontWeight: "bold" }}>Paid Amount</Text>
          <Text style={{ fontSize: 0.030*screenHeight }}>₹ 250</Text>
        </View>
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

export default TherapyBooking;
const styler = StyleSheet.create({
  head: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 0.08*screenHeight,
    margin: 0.025*screenHeight,
  },
  medicationView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 0.025*screenHeight,
  },
  finish: {
    justifyContent: "flex-end",
    borderRadius: 15,
    width: 0.83*screenWidth,
    height: 0.08*screenHeight,
    backgroundColor: "#7AC141",
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 0.03*screenHeight,
    elevation: 0.010*screenHeight
  },
  lineStyle: {
    borderWidth: 0.4,
    borderColor: "black",
    margin: 0.015*screenHeight,
    borderColor: "#828282",
  },
  bookingSuccessfull: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0.1*screenHeight,
    marginBottom: 0.1*screenHeight,
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
    marginBottom: 0.05*screenHeight,
  },
});
