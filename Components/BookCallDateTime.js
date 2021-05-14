import React, { useState } from "react";
import { ImageBackground, Keyboard } from "react-native";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions,
  Alert,
  TouchableWithoutFeedback,
} from "react-native";

import { Button, Icon } from "react-native-elements";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import Moment from "moment";

import firebase from "firebase";
require("firebase/firestore");

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const BookCallDateTime = ({ navigation }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const [date, setDate] = useState("Date");
  const [time, setTime] = useState("Time");
  const [number, setNumber] = useState("");

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  var mDate = Moment(tomorrow).format("DD/MM/YYYY");
  var minDate = mDate.split("/");

  var minimumMonth = minDate[1] - 1;

  const createAlert = (message) =>
    Alert.alert("Missong Data", message, [{ text: "OK", onPress: () => {} }], {
      cancelable: false,
    });

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = (date) => {
    var formattedDate = Moment(date).format("DD/MM/YYYY");
    setDate(formattedDate);
    hideDatePicker();
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTimeConfirm = (time) => {
    var formattedTime = Moment(time).format("hh:mm a");
    setTime(formattedTime);
    hideTimePicker();
  };

  return (
    <ImageBackground
      source={require("../assets/ss.png")}
      style={styler.imageBg}
    >
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
        accessible={false}
      >
        <SafeAreaView style={styler.screen}>
          <View style={{ flex: 1 }}>
            <View style={styler.headView}>
              <View style={styler.head}>
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      fontSize: 0.032 * screenHeight,
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    Book Call
                  </Text>
                </View>
              </View>
            </View>
            <View style={styler.dateTimeView}>
              <View>
                <Button
                  raised
                  containerStyle={{
                    width: 0.5 * screenWidth,
                    height: 0.07 * screenHeight,
                    margin: 0.015 * screenHeight,
                    smarginBottom: 0.025 * screenHeight,
                  }}
                  buttonStyle={{
                    padding: 0.01 * screenHeight,
                    height: 0.07 * screenHeight,
                    borderColor: "#7AC141",
                    borderWidth: 0,
                    borderRadius: 0.05 * screenHeight,
                  }}
                  icon={
                    <Icon
                      name="calendar"
                      size={0.025 * screenHeight}
                      color="#7AC141"
                      type="ionicon"
                    />
                  }
                  title={date}
                  type="outline"
                  titleStyle={{ color: "#7AC141" }}
                  onPress={showDatePicker}
                />
                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode="date"
                  minimumDate={new Date(minDate[2], minimumMonth, minDate[0])}
                  onConfirm={handleDateConfirm}
                  onCancel={hideDatePicker}
                />
              </View>
              <View>
                <Button
                  raised
                  containerStyle={{
                    width: 0.5 * screenWidth,
                    height: 0.07 * screenHeight,
                    margin: 10,
                    marginBottom: 20,
                    color: "green",
                  }}
                  buttonStyle={{
                    padding: 0.01 * screenHeight,
                    height: 0.07 * screenHeight,
                    borderColor: "#7AC141",
                    borderWidth: 0,
                    borderRadius: 0.01 * screenHeight,
                  }}
                  icon={
                    <Icon
                      name="time"
                      size={0.03 * screenHeight}
                      color="#7ACA41"
                      type="ionicon"
                    />
                  }
                  title={time}
                  type="outline"
                  titleStyle={{ color: "#7AC141" }}
                  onPress={showTimePicker}
                />
                <DateTimePickerModal
                  isVisible={isTimePickerVisible}
                  mode="time"
                  onConfirm={handleTimeConfirm}
                  onCancel={hideTimePicker}
                />
              </View>
              <TextInput
                style={styler.phoneNumber}
                placeholder={"Phone Number"}
                onChangeText={(text) => {
                  setNumber(text);
                }}
                keyboardType="number-pad"
                value={number}
              ></TextInput>
            </View>
            <View style={styler.footView}>
              <TouchableOpacity
                onPress={() => {
                  if (date === "Date") {
                    createAlert("Please select a date");
                  } else if (time === "Time") {
                    createAlert("Please select a time");
                  } else if (number === "") {
                    createAlert("Please enter a mobile numer");
                  } else {
                    var currentUser = firebase.auth().currentUser.uid;

                    firebase
                      .firestore()
                      .collection("users")
                      .doc(currentUser)
                      .collection("callBookings")
                      .add({
                        date: date,
                        time: time,
                        number: number,
                        user: currentUser,
                      })
                      .then(() => {
                        firebase
                          .firestore()
                          .collection("callBookings")
                          .add({
                            date: date,
                            time: time,
                            number: number,
                            user: currentUser,
                          })
                          .then(() => {
                            navigation.navigate("CallHistory");
                          });
                      });
                  }
                }}
              >
                <Text style={styler.bookNow}>BOOK NOW</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};
const styler = StyleSheet.create({
  head: {
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
    marginTop: 0.05 * screenHeight,
  },
  imageBg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  medicationView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 0.015 * screenHeight,
  },
  bookNow: {
    justifyContent: "flex-end",
    borderRadius: 0.022 * screenHeight,
    width: 0.85 * screenWidth,
    height: 0.08 * screenHeight,
    backgroundColor: "#7AC141",
    color: "white",
    margin: 0.035 * screenHeight,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 0.03 * screenHeight,
    overflow: "hidden",
    paddingVertical: 0.02 * screenHeight,
  },
  phoneNumber: {
    padding: 0.015 * screenHeight,
    borderColor: "#7AC141",
    borderRadius: 0.022 * screenHeight,
    borderWidth: 1,
    margin: 0.015 * screenHeight,
    width: 0.85 * screenWidth,
    height: 0.07 * screenHeight,
    color: "#000",
    justifyContent: "center",
    fontSize: 22,
  },
  screen: { flex: 1, padding: 0.015 * screenHeight },
  headView: {
    flex: 0.15,
  },
  dateTimeView: {
    flex: 0.65,
    marginLeft: 0.05 * screenWidth,
  },
  footView: {
    flex: 0.2,
  },
});

export default BookCallDateTime;
