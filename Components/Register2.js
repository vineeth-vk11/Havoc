import React, { useState } from "react";
import { ScrollView } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-paper";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";
const Register2 = ({navigation}) => {
  var radio_props = [
    { label: "Male", value: 0 },
    { label: "Female", value: 1 },
  ];
  const [value, setvalue] = useState();
  return (
   
    <SafeAreaView style={styler.screen}>
      <View style={styler.addtionalInfoView}>
        <Text style={styler.text}>Additional Information</Text>
      </View>
      <View style={styler.inputsView}>
        <TextInput
          mode="flat"
          label="What do we call you/ Enter your Name"
          style={styler.name}
          theme={{ colors: { primary: "#7AC141" } }}
        ></TextInput>

        <TextInput
          mode="flat"
          label="Age"
          style={styler.name}
          theme={{ colors: { primary: "#7AC141" } }}
          keyboardType="number-pad"
        ></TextInput>
        </View>
        <View style={styler.genderView}>
          <Text style={styler.genderText}>Select Your Gender</Text>
        </View>
        <RadioForm formHorizontal={false} animation={true}>
          {radio_props.map((obj, i) => (
            <RadioButton labelHorizontal={true} key={i}>
              <View style={{width:'100%', height:'100%',paddingHorizontal: 10}}>
              <View style={styler.radioButtons}>
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
                  labelStyle={{ fontSize: 20, color: "black" }}
                  labelWrapStyle={{}}
                />
              </View>
              </View>
            </RadioButton>
          ))}
        </RadioForm>
      <View style={styler.getStartedView}>
        <TouchableOpacity onPress={()=>navigation.navigate('Register3')}>
          <Text style={styler.getStarted}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Register2;

const styler = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems:'center',
    marginTop: 20,
  },
  text: {
    fontSize: 24,
  },
  getStarted: {
    borderRadius: 15,
    width: 310,
    height: 52,
    backgroundColor: "#7AC141",
    color: "white",
    marginHorizontal: 10,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 20,
    elevation: 5,
  },
  name: {
    padding: 10,
    borderColor: "black",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(122, 193, 65, 0.4);",
    borderRadius: 0,
    width: 310,
    height: 52,
    color: "#828282",
    justifyContent: "center",
    backgroundColor: "#F9FCF6",
    margin: 5,
    fontSize: 16,
  },
  addtionalInfoView: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "center",
  },
  inputsView: {
    flex: 0.2,
    marginBottom: 60
  },
  getStartedView: {
    flex:0.2,
    justifyContent: "center",
  },
  genderView: {
    flex:0.1,
    width: '100%',
    marginHorizontal: 10,
    marginVertical: 30,
    justifyContent:'center',
    alignItems:'flex-start',
    paddingHorizontal: 12,
  },
  genderText: {
    fontSize: 25,
  },
   radioButtons:{
     flexDirection: "row",
     alignItems:'flex-end',
   }
});
