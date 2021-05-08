import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { TextInput } from "react-native-paper";

import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const NewListenerInfo = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [bio, setBio] = useState("");

  const createAlert = (message) =>
    Alert.alert("Data Missing", message, [{ text: "OK", onPress: () => {} }], {
      cancelable: false,
    });

  return (
    <ImageBackground source={require("../assets/ss.png")} style={styler.image}>
      <ScrollView>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <View style={styler.screen}>
            <ScrollView>
              <KeyboardAvoidingView>
                <ScrollView>
                  <View style={styler.Title}>
                    <Text style={{fontSize: 0.03*screenHeight}}>Personal Info</Text>
                  </View>
                  <Text style={styler.declaration}>
                    Users will see only your first name
                  </Text>
                  <View style={styler.nameView}>
                    <View
                      style={{
                        width: windowWidth - 48,
                        alignSelf: "center",
                      }}
                    >
                      <TextInput
                        mode="flat"
                        label="First Name"
                        theme={{
                          colors: {
                            primary: "#7AC141",
                            background: "transparent",
                          },
                        }}
                        onChangeText={(text) => setFirstName(text)}
                        value={firstName}
                      />
                    </View>
                    <View
                      style={{
                        width: windowWidth - 48,
                        alignSelf: "center",
                      }}
                    >
                      <TextInput
                        mode="flat"
                        label="Last Name"
                        theme={{
                          colors: {
                            primary: "#7AC141",
                            background: "transparent",
                          },
                        }}
                        onChangeText={(text) => setLastName(text)}
                        value={lastName}
                      />
                    </View>
                  </View>
                  <Text style={styler.declaration}>
                    We will never share your email without asking you first
                  </Text>
                  <View
                    style={{
                      width: windowWidth - 48,
                      alignSelf: "center",
                    }}
                  >
                    <TextInput
                      mode="flat"
                      label="Email"
                      theme={{
                        colors: {
                          primary: "#7AC141",
                          background: "transparent",
                        },
                      }}
                      onChangeText={(text) => setEmail(text)}
                      value={email}
                    />
                  </View>
                  <Text style={styler.declaration}>
                    Where do you live? This will be shown in your profile
                  </Text>
                  <View
                    style={{
                      marginVertical: "2%",
                      width: windowWidth - 48,
                      alignSelf: "center",
                    }}
                  >
                    <TextInput
                      mode="flat"
                      label="City"
                      theme={{
                        colors: {
                          primary: "#7AC141",
                          background: "transparent",
                        },
                      }}
                      onChangeText={(text) => setCity(text)}
                      value={city}
                    />
                    <TextInput
                      mode="flat"
                      label="Country"
                      theme={{
                        colors: {
                          primary: "#7AC141",
                          background: "transparent",
                        },
                      }}
                      onChangeText={(text) => setCountry(text)}
                      value={country}
                    />
                  </View>
                  <Text style={styler.declaration}>
                    Write a bit about who you are and why you are a listener
                  </Text>
                  <View
                    style={{
                      marginVertical: "2%",
                      width: windowWidth - 48,
                      alignSelf: "center",
                    }}
                  >
                    <TextInput
                      mode="flat"
                      label="Enter your bio"
                      theme={{
                        colors: {
                          primary: "#7AC141",
                          background: "transparent",
                        },
                      }}
                      onChangeText={(text) => setBio(text)}
                      value={bio}
                    />
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      if (firstName === "") {
                        createAlert("Enter first name");
                      } else if (lastName === "") {
                        createAlert("Enter last name");
                      } else if (email === "") {
                        createAlert("Enter email");
                      } else if (city === "") {
                        createAlert("Enter city");
                      } else if (country === "") {
                        createAlert("Enter country");
                      } else if (bio === "") {
                        createAlert("Enter bio");
                      } else {
                        navigation.navigate("NewListenerTopic");
                      }
                    }}
                  >
                    <Text style={styler.getStarted}>FIND LISTENER</Text>
                  </TouchableOpacity>
                </ScrollView>
              </KeyboardAvoidingView>
            </ScrollView>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </ImageBackground>
  );
};

export default NewListenerInfo;

const styler = StyleSheet.create({
  screen:{
    flex:1,
    justifyContent:"space-between",
    marginVertical:0.07*screenHeight,
    padding:0.02*screenHeight
},
getStarted: {
 borderRadius: 15,
 width: 0.85*screenWidth,
 height: 0.08*screenHeight,
 backgroundColor: "#7AC141",
 color: "white",
 marginHorizontal: 0.02*screenHeight,
 textAlign: "center",
 textAlignVertical: "center",
 fontSize: 0.028*screenHeight,
 elevation: 5,
 marginVertical: 0.03*screenHeight
},
Title:{
   height:0.05*screenHeight,
   marginVertical:0.02*screenHeight,
   alignItems:'center',
   justifyContent:'center',
},
declaration:{
   color:'grey',
   marginVertical:0.01*screenHeight
},
nameView:{
   marginVertical:0.01*screenHeight
},
 image: {
  flex: 1,
  resizeMode: "cover",
  justifyContent: "center",
},
});
