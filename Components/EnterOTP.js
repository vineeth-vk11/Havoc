import React from "react";
import { TextInput } from "react-native-paper";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

const EnterOTP = ({navigation}) => {
  return (
    <View style={styler.screen}>
      <View style={styler.havoc}>
        <Image source={require("../assets/Images/HavocTherapy.png")} />
      </View>
      <View>
        <TextInput
          mode="outlined"
          label="Enter OTP"
          theme={{
            colors: { primary: "#7AC141", underlineColor: "transparent" },
          }}
          keyboardType="number-pad"
          style={styler.name}
        />
      </View>
      <View style={styler.getStartedView}>
        <TouchableOpacity onPress={()=>navigation.navigate('Register2')}>
          <Text style={styler.getStarted}>VERIFY</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EnterOTP;

const styler = StyleSheet.create({
  getStarted: {
    borderRadius: 7,
    width: 100,
    height: 40,
    backgroundColor: "#7AC141",
    color: "white",
    marginVertical: 10,
    marginHorizontal: 20,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 15,
    elevation: 5,
  },
  getStartedView: {
    alignItems: "center",
    marginVertical: 10,
  },
  screen: {
    flex: 1,
    justifyContent: "center",
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
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginVertical: 10,
    fontSize: 16,
  },
  havoc: {
    justifyContent: "center",
    margin: 50,
  },
});
