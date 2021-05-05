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
  { label: "I’ve been waiting for long", value: 0, txt:"We're sorry we couldn't find you a listener in time.\n It gets tough with many requests. More listeners\n sign up every day, rest assured we will find you a \n perfect person if you stay a bit longer"},
  { label: "I’m Nervous", value: 1, txt: "Its okay. It is quite stressful to interact with a\n stranger. But we are here to help and make you\n feel the best comfort. You will sail through it!"},
  {label:"Is my information confidential?", value: 2, txt:"Fear is genuine. And we understand. But your\n conversations are totally secure. We don't share\n anything with any third-partners. Your expression\nS is valued and protected"},
  {label:"I'm not satisfied", value: 3, txt: "We are sorry you feel this way but maybe second \n time's the charm"}
];

const Leaving = () => {
  const [value, setvalue] = useState();
  return (
    <SafeAreaView style={styler.screen}>
      <View style={styler.sadFaceView}>
        <View style={styler.sadFace}>
          <Image
            style={{ width: 100, height: 100 }}
            source={require("../assets/Images/SadFace.png")}
          />
          <Text style={{ fontSize: 18, margin: 5, color: "#828282" }}>
            We are sorry to see you leave
          </Text>
        </View>
      </View>

      <View style={styler.formView}>
        <Text style={styler.text}>What went wrong?</Text>
        <RadioForm formHorizontal={false} animation={true}>
          {radio_props.map((obj, i) =>(
            <View>
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
                  buttonOuterSize={22}
                  buttonStyle={{ marginRight: 10, marginBottom: 0 }}
                  buttonWrapStyle={{ marginLeft: 10 }}
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
            <View style={styler.declaration}>
                  <Text>{obj.txt}</Text>
                </View>
            </View>
          ))}
        </RadioForm>
      </View>
      <View style={styler.footView}>
        <TouchableOpacity>
          <Text style={styler.done}>Done</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Leaving;
const styler = StyleSheet.create({
  sadFace: {
    alignItems: "center",
  },
  done: {
    justifyContent: "flex-end",
    borderRadius: 15,
    width: 310,
    height: 52,
    backgroundColor: "#7AC141",
    color: "white",
    marginVertical:0,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 20,
  },
  screen: {
    flex: 1,
  },
  sadFaceView: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  formView: {
    flex: 0.6,
    padding:10,
    marginHorizontal:5
  },
  footView: {
    flex: 0.1,
    justifyContent: "center",
    alignItems:'center',
  },
  text: {
    fontSize: 20,
    textAlign: "left",
    margin: 5,
    marginBottom: 15,
  },
 declaration: {
     padding:'1%',
     marginHorizontal:2,
  }
});
