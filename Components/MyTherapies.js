import React, { useState, useEffect } from "react";
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
import { ListItem } from "react-native-elements";

import { FlatList } from "react-native-gesture-handler";

import Moment from "moment";

import { ActivityIndicator } from "react-native";

import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const MyTherapies = ({ navigation }) => {
  const [search, setsearch] = useState();
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    var currentUser = firebase.auth().currentUser.uid;

    const journal =
      firestore()
        .collection("users")
        .doc(currentUser)
        .collection("TherapyBookings")
        .onSnapshot((querySnapshot) => {
          const therapyList = [];

          querySnapshot.forEach((documentSnapshot) => {
            therapyList.push({
              ...documentSnapshot.data(),
              key: documentSnapshot.id,
              dateF: Moment(documentSnapshot.data()["date"], "DD/MM/YYYY").format(
                "MMM Do YY"
              ),
            });
          });

          setList(therapyList);
          setLoading(false);
        });

    return () => journal();
  }, []);

  if (loading) {
    return <ActivityIndicator style={{ flex: 1, alignContent: "center" }} />;
  }

  return (
    <SafeAreaView style={styler.screen}>
      <ImageBackground
        source={require("../assets/ss.png")}
        style={styler.image}
      >
        <View style={styler.head}>
          <View
            style={{
              flex: 0.3,
              alignItems: "flex-start",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Profile");
              }}
            >
              <Icon
                name="arrow-back"
                type="ionicon"
                color="#000000"
                size={0.04 * screenHeight}
                style={{ marginLeft: 0.03 * screenHeight }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 0.7 }}>
            <Text
              style={{
                fontSize: 0.032 * screenHeight,
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              My Therapies
            </Text>
          </View>
        </View>
        <View style={styler.listView}>
          <FlatList
            data={list.sort((a, b) => a.date.localeCompare(b.date)).reverse()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => { }}>
                <View
                  style={{
                    padding: 0.01 * screenHeight,
                    paddingRight: 0.01 * screenHeight,
                    paddingLeft: 0.01 * screenHeight,
                    marginLeft: 0.01 * screenWidth,
                    marginRight: 0.01 * screenWidth,
                  }}
                >
                  <ListItem
                    containerStyle={{
                      backgroundColor: "#F8F8F8",
                      height: 0.09 * screenHeight,
                      borderRadius: 5,
                      elevation: 5,
                    }}
                  >
                    <ListItem.Content>
                      <ListItem.Title>{item.therapyName}</ListItem.Title>
                      <ListItem.Subtitle style={{ marginTop: 8 }}>
                        {item.dateF}
                      </ListItem.Subtitle>
                    </ListItem.Content>
                    <ListItem.Subtitle style={{ marginRight: 15 }}>
                      ₹ {item.amountPaid}
                    </ListItem.Subtitle>
                  </ListItem>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default MyTherapies;

const styler = StyleSheet.create({
  head: {
    flex: 0.15,
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
    marginTop: 0.025 * screenHeight,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  listView: {
    flex: 0.85,
  },
  screen: {
    flex: 1,
  },
});
