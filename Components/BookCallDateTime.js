import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions
} from "react-native";

import { Button, Icon } from "react-native-elements";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const BookCallDateTime = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTimeConfirm = (time) => {
    console.warn("A Time has been picked: ", time);
    hideTimePicker();
  };

  return (
    <SafeAreaView style={styler.screen}>
      <View style={styler.headView}>
        <View style={styler.head}>
          <TouchableOpacity>
            <Icon name="arrow-back" type="ionicon" color="#979797" size={0.04*screenHeight} />
          </TouchableOpacity>
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>Booking</Text>
          <TouchableOpacity>
            <Icon name="arrow-back" type="ionicon" color="#ffff" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styler.dateTimeView}>
        <View>
          <Button
            raised
            containerStyle={{
              width: 0.25*screenWidth,
              height: 0.07*screenHeight,
              margin: 0.015*screenHeight,
              smarginBottom: 0.025*screenHeight,
            }}
            buttonStyle={{
              padding: 0.01*screenHeight,
              height: 0.07*screenHeight,
              borderColor: "#7AC141",
              borderWidth: 1,
              borderRadius: 0.01*screenHeight,
            }}
            icon={
              <Icon name="calendar" size={0.025*screenHeight} color="#7AC141" type="ionicon" />
            }
            title="  Date"
            type="outline"
            titleStyle={{ color: "#7AC141" }}
            onPress={showDatePicker}
          />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleDateConfirm}
            onCancel={hideDatePicker}
          />
        </View>
        <View>
          <Button
            raised
            containerStyle={{
              width: 0.25*screenWidth,
              height: 0.07*screenHeight,
              margin: 10,
              marginBottom: 20,
              color: "green",
            }}
            buttonStyle={{
              padding: 0.01*screenHeight,
              height: 0.07*screenHeight,
              borderColor: "#7AC141",
              borderWidth: 1,
              borderRadius: 0.01*screenHeight,
            }}
            icon={<Icon name="time" size={0.03*screenHeight} color="#7ACA41" type="ionicon" />}
            title=" Time"
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
          placeholder={"+91  Phone Number"}
        ></TextInput>
      </View>
      <View style={styler.footView}>
        <TouchableOpacity>
          <Text style={styler.bookNow}>BOOK NOW</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styler = StyleSheet.create({
  head: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 0.07*screenHeight,
    margin: 0.015*screenHeight,
  },
  medicationView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 0.015*screenHeight,
  },
  bookNow: {
    justifyContent: "flex-end",
    borderRadius: 0.022*screenHeight,
    width: 0.85*screenWidth,
    height: 0.07*screenHeight,
    backgroundColor: "#7AC141",
    color: "white",
    margin: 0.035*screenHeight,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 0.03*screenHeight,
  },
  phoneNumber: {
    padding: 0.015*screenHeight,
    borderColor: "#7AC141",
    borderRadius: 0.022*screenHeight,
    borderWidth: 1,
    margin: 0.015*screenHeight,
    width: 0.85*screenWidth,
    height: 0.07*screenHeight,
    color: "#828282",
    justifyContent: "center",
  },
  screen: { flex: 1, padding: 0.015*screenHeight},
  headView: {
    flex: 0.2,
  },
  dateTimeView: {
    flex: 0.6,
  },
  footView: {
    flex: 0.2,
  },
});

export default BookCallDateTime;
