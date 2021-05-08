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

const screenWidth= Dimensions.get('window').width;
const screenHeight=Dimensions.get('window').height;

const Leaving = () => {
  const [value, setvalue] = useState();
  return (
    <SafeAreaView style={styler.screen}>
      <ScrollView>
      <View style={styler.sadFaceView}>
        <View style={styler.sadFace}>
          <Image
            style={{ width: 0.29*screenWidth, height: 0.29*screenWidth }}
            source={require("../assets/Images/SadFace.png")}
          />
          <Text style={{ fontSize: 0.026*screenHeight, margin: 0.015*screenHeight, color: "#828282" }}>
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
                  buttonSize={0.021*screenHeight}
                  buttonOuterSize={0.03*screenHeight}
                  buttonStyle={{ marginRight: 0.015*screenHeight, marginBottom:0.007*screenHeight }}
                  buttonWrapStyle={{ marginLeft: 0.015*screenHeight }}
                />
                <RadioButtonLabel
                  obj={obj}
                  index={i}
                  labelHorizontal={true}
                  onPress={(value) => {
                    setvalue(value);
                  }}
                  labelStyle={{ fontSize: 0.023*screenHeight, color: "rgba(18, 18, 18, 0.5)" }}
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default Leaving;
const styler = StyleSheet.create({
  sadFace: {
    alignItems: "center",
    marginTop: 0.07*screenHeight
  },
  done: {
    justifyContent: "flex-end",
    borderRadius: 0.022*screenHeight,
    width: 0.85*screenWidth,
    height: 0.08*screenHeight,
    backgroundColor: "#7AC141",
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 0.03*screenHeight,
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
    padding:0.01*screenHeight,
    marginHorizontal:0.01*screenHeight
  },
  footView: {
    flex: 0.1,
    justifyContent: "center",
    alignItems:'center',
    marginTop: 0.015*screenHeight
  },
  text: {
    fontSize: 0.03*screenHeight,
    textAlign: "left",
    margin: 0.015*screenHeight,
    marginBottom: 0.025*screenHeight,
  },
 declaration: {
     padding:'1%',
     marginHorizontal:0.009*screenHeight,
  }
});
