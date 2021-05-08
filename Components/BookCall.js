import React from "react";
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

import firebase from "firebase";
require("firebase/firestore");

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
                  var currentUser = firebase.auth().currentUser.uid;

                  firebase
                    .firestore()
                    .collection("users")
                    .doc(currentUser)
                    .get()
                    .then((documentSnapshot) => {
                      var isListener = documentSnapshot.data()["isListener"];

                      if (isListener) {
                        navigation.navigate("ListenerDB");
                      } else {
                        navigation.navigate("Register3");
                      }
                    });
                }}
              >
                <Icon name="arrow-back" type="ionicon" color="#000" />
              </TouchableOpacity>
            </View>

            <View
              style={{
                flex: 0.8,
                alignContent: "flex-start",
                marginLeft: "15%",
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
            <Text style={{ fontSize: 22, marginRight: 16 }}>₹ 250</Text>
          </View>
          <View style={{ margin: 16, textAlign: "center" }}>
            <Text style={{ fontSize: 20, textAlign: "center" }}>
              Quick help. Any Device, where ever you are in the world
            </Text>
            <Text
              style={{
                fontSize: 20,
                textAlign: "center",
                marginTop: 10,
                fontWeight: "bold",
              }}
            >
              Communicate your way
            </Text>
            <Text style={{ fontSize: 20, textAlign: "center", marginTop: 10 }}>
              Video | Call | Chat | Messaging
            </Text>
          </View>
        </View>
        <View style={styler.footView}>
          <TouchableOpacity>
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
    marginTop: 35,
    margin: 10,
  },
  imageBg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  medication: {
    width: 258,
    height: 172,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  tinyLogo: {
    width: 114,
    height: 114,
    borderRadius: 100,
  },
  callView: {
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
    marginTop: 20,
  },
  meditationView: {
    flex: 0.55,
  },
  promoView: { flex: 0.1, justifyContent: "center" },
  footView: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 50,
  },
});
