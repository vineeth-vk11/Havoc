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
  KeyboardAvoidingView,
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
  { label: "No", value: 2 },
];

const AgeOfListner = ({ navigation, route }) => {
  const [value, setvalue] = useState();
  const [rating, setrating] = useState();
  const updateRating = (rating) => {
    setrating((rating += rating));
  };

  const { type, listener } = route.params;

  console.log(type);
  console.log(listener);

  return (
    <View style={styler.screen}>
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
                  buttonOuterSize={24}
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
        <View style={styler.ratingView}>
          <Rating
            onFinishRating={updateRating}
            style={{ paddingVertical: 10 }}
            imageSize={30}
            fractions={1}
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
          ></TextInput>
        </View>
      </View>
      <View style={styler.footView}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Register3");
          }}
        >
          <Text style={styler.complete}>Complete</Text>
        </TouchableOpacity>
      </View>
    </View>
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
    marginBottom: "5%",
  },
  complete: {
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
    width: 310,
    height: 52,
    color: "#828282",
    justifyContent: "center",
    backgroundColor: "#f5f6fa",
    margin: 15,
  },
  screen: {
    flex: 1,
    padding: "4%",
    justifyContent: "space-between",
  },
  headView: {
    justifyContent: "center",
    alignItems: "center",
  },
  formView: {
    margin: 5,
  },
  rateView: {},
  reviewView: {
    marginBottom: "3%",
  },
  footView: {
    justifyContent: "flex-end",
    marginBottom: 50,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  ratingView: {
    marginHorizontal: "7%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});
