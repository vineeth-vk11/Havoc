import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";

const Quiz1 = ({ navigation }) => {
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
  return (
    <ImageBackground source={require("../assets/ss.png")} style={styler.image}>
      <View style={styler.screen}>
        <View style={styler.titleView}>
          <Text style={{ textAlign: "center", fontSize: 28 }}>Question 1</Text>
          <Text
            style={{
              fontSize: 15,
              color: "grey",
              marginHorizontal: 15,
              marginVertical: 10,
            }}
          >
            Please watch the video and answer the question
          </Text>
        </View>
        <View style={{ height: "38%", marginVertical: "0%" }}>
          <YoutubePlayer
            videoId={"EyfzGEAwH9c"}
            play={true}
            height="80%"
            onChangeState={videoEnded}
          />
        </View>
        <View>
          <Text
            style={{
              color: "black",
              marginVertical: 5,
              marginHorizontal: 15,
              fontSize: 17,
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
                      setvalue(value);
                    }}
                    borderWidth={2}
                    buttonInnerColor={"#7AC141"}
                    buttonOuterColor={value === i ? "#7AC141" : "#000000"}
                    buttonSize={12}
                    buttonOuterSize={24}
                    buttonStyle={{ marginRight: 5, marginBottom: 10 }}
                    buttonWrapStyle={{ marginLeft: 5 }}
                  />
                  <RadioButtonLabel
                    obj={obj}
                    index={i}
                    labelHorizontal={true}
                    onPress={(value) => {
                      setvalue(value);
                    }}
                    labelStyle={{ fontSize: 15, color: "#000" }}
                    labelWrapStyle={{}}
                  />
                </View>
              </RadioButton>
            ))}
          </RadioForm>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Quiz2");
            }}
          >
            <Text style={styler.getStarted}>CONTINUE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Quiz1;

const styler = StyleSheet.create({
  screen: {
    flex: 1,
    marginVertical: "15%",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  radioButtons: {
    width: "100%",
    paddingLeft: "5%",
    marginVertical: "5%",
  },
  getStarted: {
    borderRadius: 15,
    width: 310,
    height: 52,
    backgroundColor: "#7AC141",
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 20,
    elevation: 5,
  },
});
