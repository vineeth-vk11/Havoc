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
} from "react-native";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";
import { Rating, AirbnbRating } from "react-native-elements";
var radio_props = [
  { label: "Yes", value: 0 },
  { label: "Not Sure", value: 1 },
  { label: "NO", value: 2 },
];
const AgeOfListner = () => {
  const [value, setvalue] = useState();
  const [rating, setrating] = useState();
  const updateRating = (rating) => {
    setrating((rating += rating));
  };
  return (
    <SafeAreaView style={styler.screen}>
      <View style={styler.headView}>
        <View style={styler.head}>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>Review</Text>
        </View>
      </View>
      <View style={styler.formView}>
        <Text style={styler.better}>Are you feeling better now</Text>
        <RadioForm formHorizontal={false} animation={true}>
          {radio_props.map((obj, i) => (
            <RadioButton labelHorizontal={true} key={i}>
              <View style={{ flexDirection: "row" }}>
                <RadioButtonInput
                  obj={obj}
                  index={i}
                  isSelected={value === i}
                  onPress={(value) => {
                    setvalue(value);
                  }}
                  borderWidth={2}
                  buttonInnerColor={"#7AC141"}
                  buttonOuterColor={value === i ? "#7AC141" : "#DADADA"}
                  buttonSize={16}
                  buttonOuterSize={28}
                  buttonStyle={{ marginRight: 20, marginBottom: 10 }}
                  buttonWrapStyle={{ marginLeft: 10 }}
                />
                <RadioButtonLabel
                  obj={obj}
                  index={i}
                  labelHorizontal={true}
                  onPress={(value) => {
                    setvalue(value);
                  }}
                  labelStyle={{ fontSize: 20, color: "rgba(18, 18, 18, 0.5)" }}
                  labelWrapStyle={{}}
                />
              </View>
            </RadioButton>
          ))}
        </RadioForm>
      </View>
      <View style={styler.rateView}>
        <Text style={styler.better}>Rate the listener</Text>
        <Rating onFinishRating={updateRating} style={{ paddingVertical: 10 }} />
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
          ></TextInput>
        </View>
      </View>
      <View style={styler.footView}>
        <TouchableOpacity>
          <Text style={styler.complete}>Complete</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AgeOfListner;

const styler = StyleSheet.create({
  head: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  better: {
    fontSize: 20,
    textAlign: "left",
    margin: 10,
    marginBottom: 0,
  },
  complete: {
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
  review: {
    padding: 10,
    borderColor: "black",
    borderRadius: 0,
    width: 340,
    height: 52,
    color: "#828282",
    justifyContent: "center",
    backgroundColor: "#f5f6fa",
    margin: 15,
  },
  screen: {
    flex: 1,
  },
  headView: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
  },
  formView: {
    flex: 0.3,
    margin: 5,
  },
  rateView: {
    flex: 0.2,
  },
  reviewView: {
    flex: 0.2,
  },
  footView: {
    flex: 0.1,
    justifyContent: "flex-end",
    marginBottom: 50,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
