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
import { Icon } from "react-native-elements";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";
var radio_props = [
  { label: "18 - 24 Years", value: 0 },
  { label: "25 - 34 Years", value: 1 },
  { label: "35 - 50 Years", value: 2 },
  { label: "51 years or more", value: 3 },
];
const AgeOfListner = ({ navigation }) => {
  const [value, setvalue] = useState();
  return (
    <SafeAreaView style={styler.screen}>
      <View style={styler.headView}>
        <View style={styler.head}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack(null);
            }}
          >
            <Icon
              name="arrow-back"
              type="ionicon"
              color="#000000"
              size={30}
              style={{ marginLeft: 32, marginTop: 20 }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styler.textView}>
        <Text style={styler.age}>Age of listener</Text>
        <Text style={styler.set}>(Set Your Preference)</Text>
      </View>
      <View style={styler.formView}>
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
      <View style={styler.footView}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("MatchingListener");
          }}
        >
          <Text style={styler.continue}>CONTINUE</Text>
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
    justifyContent: "flex-start",
    marginTop: 35,
  },
  age: {
    fontSize: 20,
    textAlign: "left",
    fontWeight: "bold",
    marginTop: 50,
    marginLeft: 24,
    marginBottom: 0,
  },
  set: {
    fontSize: 15,
    textAlign: "left",
    marginLeft: 24,
  },
  continue: {
    justifyContent: "flex-end",
    borderRadius: 15,
    width: 310,
    height: 52,
    backgroundColor: "#7AC141",
    color: "white",
    margin: 20,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 20,
  },
  screen: {
    flex: 1,
    flexDirection: "column",
  },
  headView: {
    flex: 0.1,
  },
  textView: {
    flex: 0.1,
    marginLeft: 10,
  },
  formView: {
    flex: 0.3,
    marginTop: 50,
    marginLeft: 24,
  },
  footView: {
    flex: 0.5,
    justifyContent: "flex-end",
    marginBottom: 50,
  },
});
