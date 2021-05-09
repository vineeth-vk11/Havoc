import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";
import { Icon } from "react-native-elements";

import firebase from "firebase";
require("firebase/firestore");

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const Register3 = ({ navigation }) => {
  const [age, setAge] = useState();
  const [topics, setTopics] = useState([]);
  const [listenerName, setListenerName] = useState();

  const [number, setNumber] = useState(0);

  useEffect(() => {
    if (firebase.auth().currentUser) {
      var currentUser = firebase.auth().currentUser.uid;
      const db = firebase.firestore();

      db.collection("Listeners")
        .doc(currentUser)
        .get()
        .then((documentSnapshot) => {
          if (documentSnapshot.exists) {
            var data = documentSnapshot.data();

            setAge(data["age"]);
            setTopics(data["topics"]);
            setListenerName(data["name"]);

            console.log(age);

            db.collection("ChatRequests").onSnapshot((querySnapshot) => {
              const requestsList = [];

              querySnapshot.forEach((documentSnapshot) => {
                var minAge = documentSnapshot.data()["minAge"];
                var maxAge = documentSnapshot.data()["maxAge"];
                var topic = documentSnapshot.data()["topic"];

                console.log(minAge);
                console.log(maxAge);
                console.log("Done");

                if (minAge < Number(age) < maxAge) {
                  console.log("entered");
                  if (topics.includes(topic)) {
                    requestsList.push({
                      ...documentSnapshot.data(),
                      key: documentSnapshot.id,
                    });
                  }
                }
              });

              setNumber(requestsList.length);
              console.log(number);
            });
          }
        });
    }
  }, []);

  return (
    <SafeAreaView style={styler.screen}>
      <ImageBackground
        source={require("../assets/ss.png")}
        style={styler.image}
      >
        <View style={styler.headerView}>
          <View style={styler.head}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Profile");
              }}
            >
              <Icon
                reverse
                name="person-circle"
                type="ionicon"
                color="#7AC141"
                size={24}
              />
            </TouchableOpacity>
          </View>
          <View style={styler.imageView}>
            <Image
              style={{ width: 0.1 * screenHeight, height: 0.1 * screenHeight }}
              source={require("../assets/logoTB.png")}
            />
          </View>
        </View>
        <View style={styler.textView}>
          <Text style={styler.text}>ARE YOU READY?</Text>
          <Text style={styler.textSmall}>
            Connect with a seeker to {"\n"} talk about anything
          </Text>
        </View>
        <View style={styler.findMyListnerView}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("MyRequests");
            }}
          >
            <View style={styler.find}>
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: 0.03 * screenHeight,
                }}
              >
                FIND MY{"\n"}SEEKER
              </Text>
            </View>
          </TouchableOpacity>
          <View style={styler.activeUser}>
            <Text style={{ color: "#ffffff" }}>{number}</Text>
          </View>
        </View>
        <View style={styler.talkingNow}>
          <Text style={styler.tnText}>Talking Now : 180</Text>
        </View>
        <View style={styler.footerView}>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              marginBottom: 0.025 * screenHeight,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("DedicatedChats");
              }}
            >
              <Icon
                reverse
                name="chat"
                type="material-icons"
                color="#7AC141"
                size={24}
              />
            </TouchableOpacity>
            <Text>Dedicated</Text>
          </View>

          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              marginBottom: 0.025 * screenHeight,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("MyJournal");
              }}
            >
              <Icon
                reverse
                name="journal"
                type="ionicon"
                color="#7AC141"
                size={24}
              />
            </TouchableOpacity>
            <Text>Journal</Text>
          </View>

          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              marginBottom: 0.025 * screenHeight,
            }}
          >
            <TouchableOpacity>
              <Icon
                reverse
                name="gift"
                type="font-awesome-5"
                color="#7AC141"
                size={24}
                reverseColor="white"
              />
            </TouchableOpacity>
            <Text>Rewards</Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Register3;

const styler = StyleSheet.create({
  screen: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  head: {
    width: 0.35 * screenWidth,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 0.045 * screenHeight,
  },
  text: {
    fontSize: 0.033 * screenHeight,
    fontWeight: "bold",
    textAlign: "center",
  },
  textSmall: {
    fontSize: 0.026 * screenHeight,
    margin: 0.015 * screenHeight,
    textAlign: "center",
  },
  find: {
    backgroundColor: "#7AC141",
    width: 0.42 * screenWidth,
    height: 0.42 * screenWidth,
    borderRadius: 0.13 * screenHeight,
    alignItems: "center",
    justifyContent: "center",
  },
  headerView: {
    flex: 0.3,
    flexDirection: "row",
    padding: 0.015 * screenHeight,
  },
  textView: {
    flex: 0.1,
  },
  findMyListnerView: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 0.025 * screenHeight,
    flexDirection: "row",
  },
  footerView: {
    flexDirection: "row",
    flex: 0.2,
    marginTop: 0.1 * screenHeight,
    marginLeft: 0.04 * screenHeight,
    marginRight: 0.04 * screenHeight,
    justifyContent: "space-around",
    alignItems: "center",
  },
  imageView: {
    marginTop: 0.055 * screenHeight,
  },
  talkingNow: {
    justifyContent: "center",
    alignItems: "center",
  },
  tnText: {
    fontSize: 0.036 * screenHeight,
  },
  activeUser: {
    width: 0.1 * screenWidth,
    height: 0.1 * screenWidth,
    borderRadius: 0.05 * screenWidth,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -0.025 * screenHeight,
  },
});
