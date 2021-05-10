import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  ImageBackground,
  Alert
} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";
import { SafeAreaView } from "react-native-safe-area-context";

import { Icon } from "react-native-elements";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const Quiz1 = ({ navigation, route }) => {
 const { firstName, lastName, email, city, country, bio, list } = route.params;

  const [isPlaying, setisPlaying] = useState(false);
  const playingVideo = useCallback(() => {
    setisPlaying((prev) => !prev);
  }, [isPlaying]);
  const videoEnded = useCallback(
    (state) => {
      if (state === "ended") {
        setisPlaying(false);
      }
    },
    [isPlaying]
  );
  const [value, setvalue] = useState();
  const radio_props = [
    {
      label:
        "Listening with attention, while withholding \n judgements and advice",
      value: 0,
    },
    {
      label: "Accepting and validating what the other \n person is sharing",
      value: 1,
    },
    {
      label:
        "Priciple of confidentiality is about privacy \n and respecting someone's willingness \n to open up",
      value: 2,
    },
    {
      label:
        "Keeping the information shared to yourself,\n makes the seeker believe that the listener \n is actively listening to them without any \njudgement",
      value: 3,
    },
  ];

  const [answer1, setAnswer1] = useState("");

  const createAlert = () =>
    Alert.alert(
      "No Option Selected",
      "Please select an option continue",
      [{ text: "OK", onPress: () => {} }],
      {
        cancelable: false,
      }
    );

  return (
    <ImageBackground source={require("../assets/ss.png")} style={styler.image}>
      <SafeAreaView style={styler.screen}>
        <ScrollView>
          <View style={styler.titleView}>
          <View style={styler.head}>
          <View
            style={{
              flex: 0.4,
              alignItems: "flex-start",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.goBack(null);
              }}
            >
              <Icon
                name="arrow-back"
                type="ionicon"
                color="#000000"
                size={0.04*screenHeight}
                style={{ marginLeft: 0.03*screenHeight }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 0.6 }}>
            <Text
              style={{
                fontSize: 0.032*screenHeight,
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              Question 1
            </Text>
          </View>
        </View>

            <Text
              style={{
                fontSize: 0.02 * screenHeight,
                color: "grey",
                marginHorizontal: 0.02 * screenHeight,
                marginVertical: 0.014 * screenHeight,
              }}
            >
              Please watch the video and answer the question
            </Text>
          </View>
          <View style={{ height: 0.3 * screenHeight, width: screenWidth }}>
            <YoutubePlayer
              videoId={"EyfzGEAwH9c"}
              play={false}
              height="100%"
              onChangeState={videoEnded}
            />
          </View>
          <View>
            <Text
              style={{
                color: "black",
                marginHorizontal: 0.025 * screenHeight,
                fontSize: 0.023 * screenHeight,
                marginTop: 20,
              }}
            >
              What is active listening and how does confidentiality work?
            </Text>
          </View>
          <View style={styler.radioButtons}>
            <RadioForm formHorizontal={false} animation={true}>
              {radio_props.map((obj, i) => (
                <RadioButton labelHorizontal={true} key={i}>
                  <View style={{ flexDirection: "row" }}>
                    <RadioButtonInput
                      obj={obj}
                      index={i}
                      isSelected={value === i}
                      onPress={(value) => {
                        if (value === 3) {
                          setAnswer1(false);
                        } else {
                          setAnswer1(true);
                        }
                        setvalue(value);
                      }}
                      borderWidth={2}
                      buttonInnerColor={"#7AC141"}
                      buttonOuterColor={value === i ? "#7AC141" : "#000"}
                      buttonSize={12}
                      buttonOuterSize={22}
                      buttonStyle={{
                        marginRight: 0.006 * screenHeight,
                        marginBottom: 0.015 * screenHeight,
                      }}
                      buttonWrapStyle={{ marginLeft: 0.01 * screenHeight }}
                    />
                    <RadioButtonLabel
                      obj={obj}
                      index={i}
                      labelHorizontal={true}
                      onPress={(value) => {
                        if (value === 3) {
                          setAnswer1(false);
                        } else {
                          setAnswer1(true);
                        }
                        setvalue(value);
                      }}
                      labelStyle={{
                        fontSize: 0.02 * screenHeight,
                        color: "#000",
                      }}
                      labelWrapStyle={{marginRight: 0.012*screenHeight}}
                    />
                  </View>
                </RadioButton>
              ))}
            </RadioForm>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 0.02 * screenHeight,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                if (answer1 === "") {
                  createAlert();
                } else {
                  navigation.navigate("Quiz2", {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    city: city,
                    country: country,
                    bio: bio,
                    list: list,
                    answer1: answer1,
                  });
                }
              }}
            >
              <Text style={styler.getStarted}>CONTINUE</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Quiz1;

const styler = StyleSheet.create({
  screen: {
    flex: 1,
    paddingVertical: 0.03 * screenHeight,
    justifyContent: "space-between",
  },
  head: {
    flex: 0.15,
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  radioButtons: {
    width: screenWidth,
    paddingLeft: 0.015 * screenHeight,
    marginVertical: 0.018 * screenHeight,
  },
  getStarted: {
    borderRadius: 15,
    width: 0.85 * screenWidth,
    height: 0.08 * screenHeight,
    backgroundColor: "#7AC141",
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 0.03 * screenHeight,
    elevation: 5,
    overflow: "hidden",
    paddingVertical: 0.02 * screenHeight
  },
});
