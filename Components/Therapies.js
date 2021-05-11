import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
  ImageBackground,
} from "react-native";
import { Icon } from "react-native-elements";
import { SearchBar } from "react-native-elements";
import { ListItem } from "react-native-elements";
import firebase from "firebase";
import { FlatList } from "react-native-gesture-handler";
require("firebase/firestore");

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const Therapies = ({ navigation }) => {
  const [search, setsearch] = useState();

  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  const db = firebase.firestore();

  useEffect(() => {
    const therapies = db.collection("Therapies").onSnapshot((querySnapshot) => {
      const therapiesList = [];

      querySnapshot.forEach((documentSnapshot) => {
        therapiesList.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.id,
        });
      });

      setList(therapiesList);
      setLoading(false);
    });

    return () => therapies();
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <SafeAreaView style={styler.screen}>
      <ImageBackground
        source={require("../assets/ss.png")}
        style={styler.image}
      >
        <View style={styler.head}>
          <View style={{ flex: 0.2, alignContent: "center" }}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack(null);
              }}
            >
              <Icon
                style={{ marginLeft: 32 }}
                name="arrow-back"
                type="ionicon"
                color="#000"
                size={30}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flex: 0.8,
              alignContent: "center",
              alignItems: "center",
              marginRight: "15%",
            }}
          >
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>
              Therapies
            </Text>
          </View>
        </View>
        <View style={{ padding: 10 }}>
          <SearchBar
            containerStyle={{
              backgroundColor: "white",
              borderWidth: 1,
              borderRadius: 15,
              borderColor: "#7AC141",
              borderTopWidth: 1,
              borderTopColor: "#7AC141",
              borderBottomColor: "#7AC141",
              height: 48,
            }}
            inputContainerStyle={{ backgroundColor: "white", height: 32 }}
            placeholder="Search therapy name"
            onChangeText={(value) => setsearch(value)}
            value={search}
          />
        </View>
        <View style={styler.listView}>
          <FlatList
            data={list}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("TherapyProduct", {
                    name: item.name,
                    description: item.description,
                    cost: item.cost,
                    image: item.images,
                  });
                }}
              >
                <View
                  style={{
                    padding: 3,
                    paddingRight: 5,
                    paddingLeft: 5,
                    marginLeft: 8,
                    marginRight: 8,
                  }}
                >
                  <ListItem
                    containerStyle={{
                      backgroundColor: "#F8F8F8",
                      height: 55,
                      borderRadius: 5,
                      elevation: 5,
                    }}
                  >
                    <ListItem.Content>
                      <ListItem.Title>{item.name}</ListItem.Title>
                      <ListItem.Subtitle>{"₹ " + item.cost}</ListItem.Subtitle>
                    </ListItem.Content>
                    <ListItem.Chevron size={35} />
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

export default Therapies;

const styler = StyleSheet.create({
  head: {
    flex: 0.1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 0.01 * screenHeight,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  screen: {
    flex: 1,
  },
  listView: {
    flex: 0.85,
  },
});
