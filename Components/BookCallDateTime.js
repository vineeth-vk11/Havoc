import React, { useEffect, useState } from "react";
import { ImageBackground, Keyboard } from "react-native";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Alert,
  TouchableWithoutFeedback,
} from "react-native";

import { Button, Icon } from "react-native-elements";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import Moment from "moment";

import firebase from '@react-native-firebase/app';

import { ActivityIndicator } from "react-native-paper";

import PhoneInput from "react-native-phone-number-input";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const BookCallDateTime = ({ navigation }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const [date, setDate] = useState("Date");
  const [time, setTime] = useState("Time");
  const [number, setNumber] = useState("");

  const [minimumDate, setMinimumDate] = useState();
  const [minimumMonth, setMinimumMonth] = useState();
  const [minimumYear, setMinimumYear] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate());
    var mDate = Moment(tomorrow).format("DD/MM/YYYY");
    var minDate = mDate.split("/");

    var minMonth = minDate[1] - 1;

    setMinimumDate(minDate[0]);
    setMinimumMonth(minMonth);
    setMinimumYear(minDate[2]);

    setLoading(false);
  }, [minimumDate, minimumMonth, minimumYear, loading]);

  const createAlert = (message) =>
    Alert.alert("Missong Data", message, [{ text: "OK", onPress: () => { } }], {
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

  const [value, setValue] = useState("");
  const phoneInput = React.useRef(null);

  if (loading) {
    return <ActivityIndicator style={{ flex: 1, alignContent: "center" }} />;
  }

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
                <View style={{ flex: 0.3, alignContent: "flex-start" }}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.goBack(null);
                    }}
                  >
                    <Icon
                      name="arrow-back"
                      type="ionicon"
                      color="#000"
                      size={30}
                    />
                  </TouchableOpacity>
                </View>

                <View
                  style={{
                    flex: 0.7,
                    alignContent: "flex-start",
                    marginLeft: 0.1 * screenWidth,
                  }}
                >
                  <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                    Book a Call
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
                  minimumDate={new Date(minimumYear, minimumMonth, minimumDate)}
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
              <PhoneInput
                ref={phoneInput}
                defaultValue={value}
                defaultCode="IN"
                onChangeFormattedText={(text) => {
                  setValue(text);
                }}
                withDarkTheme
                withShadow
                autoFocus
                layout="second"
              />
            </View>
            <View style={styler.footView}>
              <TouchableOpacity
                onPress={() => {
                  if (date === "Date") {
                    createAlert("Please select a date");
                  } else if (time === "Time") {
                    createAlert("Please select a time");
                  } else if (value === "") {
                    createAlert("Please enter a mobile numer");
                  } else {
                    var currentUser = firebase.auth().currentUser.uid;

                    firestore()
                      .collection("users")
                      .doc(currentUser)
                      .collection("callBookings")
                      .add({
                        date: date,
                        time: time,
                        number: value,
                        user: currentUser,
                      })
                      .then(() => {
                        firestore()
                          .collection("callBookings")
                          .add({
                            date: date,
                            time: time,
                            number: value,
                            user: currentUser,
                          })
                          .then(() => {
                            navigation.navigate("BookCallConfirmation");
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
