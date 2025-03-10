import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { ListItem, Icon } from "react-native-elements";

import { ActivityIndicator } from "react-native-paper";
import { FlatList } from "react-native-gesture-handler";

import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';

import { Dimensions } from "react-native";
import { ScreenHeight } from "react-native-elements/dist/helpers";

import Moment from "moment";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const CallHistory = ({ navigation }) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    var currentUser = firebase.auth().currentUser.uid;

    const callHistory =
      firestore()
        .collection("users")
        .doc(currentUser)
        .collection("callBookings")
        .onSnapshot((querySnapshot) => {
          const newList = [];

          querySnapshot.forEach((documentSnapshot) => {
            newList.push({
              ...documentSnapshot.data(),
              key: documentSnapshot.id,
              dateF: Moment(documentSnapshot.data()["date"], "DD/MM/YYYY").format(
                "MMM Do YY"
              ),
            });
          });

          setList(newList);
          setLoading(false);
        });

    return () => callHistory();
  }, []);

  if (loading) {
    return <ActivityIndicator style={{ flex: 1, alignContent: "center" }} />;
  }

  return (
    <ImageBackground source={require("../assets/ss.png")} style={styler.image}>
      <SafeAreaView style={styler.screen}>
        <View style={styler.head}>
          <View style={{ flex: 0.3, alignContent: "center" }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Profile");
              }}
            >
              <Icon
                style={{ margin: 0.01 * windowHeight }}
                name="arrow-back"
                type="ionicon"
                color="#000"
                size={0.04 * windowHeight}
              />
            </TouchableOpacity>
          </View>

          <View style={{ flex: 0.7, alignContent: "center" }}>
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>
              Call History
            </Text>
          </View>
        </View>
        <View style={styler.listView}>
          <FlatList
            data={list.sort((a, b) => a.date.localeCompare(b.date)).reverse()}
            renderItem={({ item }) => (
              <View
                style={{
                  padding: 0.009 * windowHeight,
                  paddingRight: 0.01 * windowHeight,
                  paddingLeft: 0.01 * windowHeight,
                  marginLeft: 0.012 * windowHeight,
                  marginRight: 0.012 * windowHeight,
                }}
              >
                <ListItem
                  containerStyle={{
                    backgroundColor: "#F8F8F8",
                    height: 0.09 * windowHeight,
                    borderRadius: 5,
                    elevation: 5,
                  }}
                >
                  <ListItem.Content>
                    <ListItem.Subtitle>{item.dateF}</ListItem.Subtitle>
                    <ListItem.Subtitle style={{ marginTop: 8 }}>
                      {item.time}
                    </ListItem.Subtitle>
                  </ListItem.Content>
                  <ListItem.Subtitle style={{ marginRight: 15 }}>
                    ₹ 250
                  </ListItem.Subtitle>
                </ListItem>
              </View>
            )}
          />
        </View>
        <TouchableOpacity
          style={{ alignSelf: "flex-end" }}
          onPress={() => {
            navigation.navigate("BookCall");
          }}
        >
          <Text style={styler.callBooking}>Book Call</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default CallHistory;

const styler = StyleSheet.create({
  head: {
    flex: 0.15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 0.025 * windowHeight,
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
  callBooking: {
    width: windowWidth,
    height: 0.08 * windowHeight,
    backgroundColor: "#7AC141",
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 18,
    elevation: 5,
    padding: 0.015 * windowHeight,
    overflow: "hidden",
    paddingVertical: 0.025 * ScreenHeight,
  },
});
