import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Alert,
} from "react-native";
import { Icon } from "react-native-elements";

import RazorpayCheckout from "react-native-razorpay";

import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';

import Moment from "moment";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const TherapyProduct = ({ navigation, route }) => {
  const { name, description, cost, image } = route.params;

  const createAlert = () =>
    Alert.alert(
      "Therapy Booking",
      "Are you sure you want to proceed ?",
      [
        {
          text: "OK",
          onPress: () => {
            var options = {
              description: "Therapy Booking",
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
                var currentUser = firebase.auth().currentUser.uid;
                var date = Moment(new Date()).format("DD/MM/YYYY");
                firestore()
                  .collection("users")
                  .doc(currentUser)
                  .collection("TherapyBookings")
                  .add({
                    therapyName: name,
                    amountPaid: cost,
                    date: date,
                  })
                  .then(() => {
                    navigation.navigate("TherapyBooking", {
                      cost: cost,
                    });
                  });
              })
              .catch((error) => {
                alert(`Error ${error.description}`);
              });
          },
        },
        {
          text: "Cancel",
          onPress: () => { },
        },
      ],
      { cancelable: false }
    );

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
                    size={30}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flex: 0.7, alignContent: "flex-end" }}>
                <Text
                  style={{ fontSize: 24, marginTop: 10, fontWeight: "bold" }}
                >
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
            <TouchableOpacity
              onPress={() => {
                createAlert();
              }}
            >
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
    marginTop: 0.02 * screenHeight,
    margin: 0.015 * screenHeight,
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
    margin: 0.02 * screenHeight,
  },
  applyCoupon: {
    padding: 0.015 * screenHeight,
    borderColor: "#7AC141",
    borderRadius: 5,
    borderWidth: 1,
    width: 0.55 * screenWidth,
    height: 0.054 * screenHeight,
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
    borderRadius: 15,
    width: 0.85 * screenWidth,
    height: 0.08 * screenHeight,
    backgroundColor: "#7AC141",
    color: "white",
    fontSize: 0.025 * screenHeight,
    overflow: "hidden",
    textAlign: "center",
    paddingVertical: 0.025 * screenHeight,
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
    marginTop: 0.03 * screenHeight,
  },
  meditationView: {
    flex: 0.25,
    paddingTop: 0.015 * screenHeight,
  },
  footView: {
    height: windowHeight / 3.5,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
