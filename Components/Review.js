import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  ImageBackground,
  Alert,
  Dimensions,
} from "react-native";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";
import { Rating, AirbnbRating } from "react-native-elements";
import Stars from "react-native-stars";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import RadioButtonRN from "radio-buttons-react-native";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import firebase from "firebase";
require("firebase/firestore");

var radio_props = [
  { label: "Yes", value: 0 },
  { label: "Not Sure", value: 1 },
  { label: "No", value: 2 },
];

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const Review = ({ navigation, route }) => {
  const [value, setvalue] = useState(-1);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [feeling, setFeeling] = useState("");

  const { type, listener } = route.params;

  console.log(type);
  console.log(listener);

  const createAlert = (message) =>
    Alert.alert("Enter Data", message, [{ text: "OK", onPress: () => {} }], {
      cancelable: false,
    });

  const saveData = (type) => {
    console.log("Entered");
    if (feeling === "") {
      createAlert("Please select your current feeling");
    } else if (rating === 0) {
      createAlert("Please rate the listener");
    } else {
      var currentUser = firebase.auth().currentUser.uid;

      firebase
        .firestore()
        .collection("SeekerFeedback")
        .add({
          experience: review,
          feeling: feeling,
          listener: listener,
          rating: rating,
          seeker: currentUser,
        })
        .then(() => {
          if (type === "payment") {
            navigation.navigate("BookCall");
          } else {
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
          }
        });
    }
  };

  const renderButton = () => {
    if (type === "payment") {
      return (
        <View style={styler.footView}>
          <TouchableOpacity
            onPress={() => {
              saveData("payment");
            }}
          >
            <Text style={styler.complete}>Make Payment</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View style={styler.footView}>
          <TouchableOpacity
            onPress={() => {
              saveData("normal");
            }}
          >
            <Text style={styler.complete}>Complete</Text>
          </TouchableOpacity>
        </View>
      );
    }
  };

  return (
    <ImageBackground source={require("../assets/ss.png")} style={styler.image}>
      <View style={styler.screen}>
        <KeyboardAwareScrollView>
          <View style={styler.headView}>
            <View style={styler.head}>
              <Text style={{ fontSize: 30, fontWeight: "bold", marginTop: 20 }}>
                Review
              </Text>
            </View>
          </View>

          <View style={styler.formView}>
            <Text style={styler.better}>Are you feeling better now</Text>
            <RadioButtonRN
              data={radio_props}
              style={{
                marginRight: 0.02 * screenWidth,
              }}
              textStyle={{
                fontSize: 0.018 * screenHeight,
              }}
              selectedBtn={(e) => {
                var v = e["value"];
                if (v === 0) {
                  setFeeling("Yes");
                } else if (v === 1) {
                  setFeeling("Not Sure");
                } else {
                  setFeeling("No");
                }
              }}
              box={false}
              activeColor="#7AC141"
              deactiveColor="#7AC141"
            />
          </View>

          <View style={styler.rateView}>
            <Text style={styler.better}>Rate the listener</Text>
            <View style={styler.ratingView}>
              <Stars
                update={(val) => {
                  setRating(val);
                }}
                spacing={4}
                starSize={40}
                count={5}
                starSize={24}
                emptyStar={
                  <Icon
                    name={"star-outline"}
                    size={40}
                    style={{ color: "#000" }}
                  />
                }
                fullStar={
                  <Icon name={"star"} size={40} style={{ color: "#7AC141" }} />
                }
                halfStar={
                  <Icon
                    name={"star-half"}
                    size={40}
                    style={{ color: "#7AC141" }}
                  />
                }
              />
            </View>
          </View>
          <View style={styler.reviewView}>
            <Text style={styler.better}>Review</Text>
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <TextInput
                placeholder="Let us know about your experience"
                placeholderTextColor="rgba(122, 193, 65, 1);"
                style={styler.review}
                onChangeText={(text) => {
                  setReview(text);
                }}
                value={review}
              ></TextInput>
            </View>
          </View>
          {renderButton()}
        </KeyboardAwareScrollView>
      </View>
    </ImageBackground>
  );
};

export default Review;

const styler = StyleSheet.create({
  head: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0.06 * screenHeight,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  better: {
    fontSize: 0.035 * screenHeight,
    textAlign: "left",
    marginBottom: "5%",
  },
  complete: {
    borderRadius: 15,
    width: 0.8 * screenWidth,
    height: 0.08 * screenHeight,
    backgroundColor: "#7AC141",
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 0.035 * screenHeight,
    elevation: 5,
    overflow: "hidden",
    paddingVertical: 0.02 * screenHeight,
  },
  review: {
    padding: 10,
    borderColor: "black",
    width: 310,
    height: 52,
    color: "#000",
    justifyContent: "center",
    backgroundColor: "#f5f6fa",
    margin: 0.02 * screenHeight,
  },
  screen: {
    flex: 1,
    padding: 0.02 * screenHeight,
  },
  headView: {
    flex: 0.15,
    justifyContent: "center",
    alignItems: "center",
  },
  formView: {
    flex: 0.3,
    margin: 5,
    marginTop: 0.04 * screenHeight,
  },
  rateView: {
    flex: 0.2,
    marginTop: 0.02 * screenHeight,
  },
  reviewView: {
    marginTop: 0.02 * screenHeight,
  },
  footView: {
    flex: 0.15,
    marginTop: 0.02 * screenHeight,
    justifyContent: "flex-end",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  ratingView: {
    flex: 0.2,
    marginHorizontal: 0.04 * screenHeight,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});
