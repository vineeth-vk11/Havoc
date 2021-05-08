import React from "react";
import { ImageBackground } from "react-native";
import { SafeAreaView, Image, StyleSheet } from "react-native";

import firebase from "firebase";
require("firebase/firestore");

const Splash = ({ navigation }) => {
  setTimeout(function () {
    if (firebase.auth().currentUser !== null) {
      console.log("enteres1");

      var user = firebase.auth().currentUser.uid;
      firebase
        .firestore()
        .collection("users")
        .doc(user)
        .get()
        .then((documentSnapshot) => {
          if (!documentSnapshot.exists) {
            navigation.navigate("Register2");
          } else {
            if (documentSnapshot.data()["isListener"]) {
              navigation.navigate("ListenerDB");
            } else {
              navigation.navigate("Register3");
            }
          }
        });
    } else {
      console.log("enteres2");
      navigation.navigate("Register1");
    }
  }, 4000);

  return (
    <ImageBackground
      source={require("../assets/ss.png")}
      style={styler.imageBg}
    >
      <SafeAreaView style={styler.screen}>
        <Image source={require("../assets/logoTB.png")} />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Splash;
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
