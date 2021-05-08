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
  ImageBackground,
} from "react-native";
import { Icon } from "react-native-elements";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";

import firebase from "firebase";
require("firebase/firestore");

var radio_props = [
  { label: "18 - 24 Years", value: 0 },
  { label: "25 - 34 Years", value: 1 },
  { label: "35 - 50 Years", value: 2 },
  { label: "51 years or more", value: 3 },
];

const AgeOfListner = ({ navigation, route }) => {
  const [value, setvalue] = useState(-1);
  const { userName, topic } = route.params;
  const [minimumAge, setMinimumAge] = useState();
  const [maximumAge, setMaximumAge] = useState();
  return (
    <SafeAreaView style={styler.screen}>
      <ImageBackground
        source={require("../assets/ss.png")}
        style={styler.image}
      >
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
                      if (value === 0) {
                        setMinimumAge("18");
                        setMaximumAge("24");
                      } else if (value === 1) {
                        setMinimumAge("25");
                        setMaximumAge("34");
                      } else if (value === 2) {
                        setMinimumAge("35");
                        setMinimumAge("50");
                      } else if (value === 3) {
                        setMinimumAge("51");
                        setMaximumAge("100");
                      }
                      setvalue(value);
                    }}
                    borderWidth={2}
                    buttonInnerColor={"#7AC141"}
                    buttonOuterColor={value === i ? "#7AC141" : "#000"}
                    buttonSize={12}
                    buttonOuterSize={24}
                    buttonStyle={{ marginRight: 20, marginBottom: 10 }}
                    buttonWrapStyle={{ marginLeft: 10 }}
                  />
                  <RadioButtonLabel
                    obj={obj}
                    index={i}
                    labelHorizontal={true}
                    labelStyle={{
                      fontSize: 18,
                      color: "#000",
                      marginBottom: 5,
                    }}
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
              console.log(value);
              if (value === -1) {
              } else {
                console.log(minimumAge);
                console.log(maximumAge);

                if (firebase.auth().currentUser) {
                  var user = firebase.auth().currentUser.uid;

                  firebase
                    .firestore()
                    .collection("users")
                    .doc(user)
                    .set(
                      {
                        minAge: minimumAge,
                        maxAge: maximumAge,
                      },
                      { merge: true }
                    )
                    .then(() => {
                      navigation.navigate("HowYouFeel", {
                        userName: userName,
                        topic: topic,
                        minAge: maximumAge,
                        maxAge: minimumAge,
                      });
                    });
                }
              }
            }}
          >
            <Text style={styler.continue}>CONTINUE</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
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
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
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
