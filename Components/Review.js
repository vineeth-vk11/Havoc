import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions
} from "react-native";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";
import { Rating} from "react-native-elements";
var radio_props = [
  { label: "Yes", value: 0 },
  { label: "Not Sure", value: 1 },
  { label: "No", value: 2 },
];

const screenWidth= Dimensions.get('window').width;
const screenHeight=Dimensions.get('window').height;

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
          <Text style={{ fontSize: 0.04*screenHeight, fontWeight: "bold" }}>Review</Text>
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
                  buttonStyle={{ marginRight: 0.025*screenHeight, marginBottom: 0.015*screenHeight }}
                  buttonWrapStyle={{ marginLeft: 0.015*screenHeight }}
                />
                <RadioButtonLabel
                  obj={obj}
                  index={i}
                  labelHorizontal={true}
                  onPress={(value) => {
                    setvalue(value);
                  }}
                  labelStyle={{ fontSize: 17, color: "rgba(18, 18, 18, 0.5)" }}
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
          <Text style={styler.complete}>COMPLETE</Text>
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
    marginTop: 0.06*screenHeight,
  },
  better: {
    fontSize: 0.035*screenHeight,
    textAlign: "left",
    marginBottom: "5%",
  },
  complete: {
    borderRadius: 15,
    width: 0.8*screenWidth,
    height: 0.08*screenHeight,
    backgroundColor: "#7AC141",
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 0.035*screenHeight,
    elevation: 5
  },
  review: {
    padding: 10,
    borderColor: "black",
    width: 0.8*screenWidth,
    height: 0.08*screenHeight,
    color: "#828282",
    justifyContent: "center",
    backgroundColor: "#f5f6fa",
    margin: 0.02*screenHeight,
  },
  screen: {
    flex: 1,
    padding: 0.02*screenHeight,
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
    marginBottom: 0.02*screenHeight,
  },
  footView: {
    justifyContent: "flex-end",
    marginBottom: 0.08*screenHeight,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  ratingView: {
    marginHorizontal: 0.04*screenHeight,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});
