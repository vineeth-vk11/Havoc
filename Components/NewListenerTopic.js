import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Dimensions,
  Alert,
  SafeAreaView,
} from "react-native";
import { CheckBox } from "react-native-elements";

import { Icon } from "react-native-elements";

import messaging from '@react-native-firebase/messaging';

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const NewListenerTopic = ({ navigation, route }) => {
  const { firstName, lastName, email, city, country, bio } = route.params;

  const [all, setAll] = useState(false);
  const [work, setWork] = useState(false);
  const [academic, setAcademic] = useState(false);
  const [relationship, setRelationship] = useState(false);
  const [lgbtq, setLgbtq] = useState(false);
  const [talk, setTalk] = useState(false);
  const [covid, setCovid] = useState(false);
  const [health, setHealth] = useState(false);
  const [parenting, setParenting] = useState(false);
  const [bullying, setBullying] = useState(false);
  const [lonliness, setLonliness] = useState(false);
  const [motivation, setMotivation] = useState(false);
  const [overthinking, setOverthinking] = useState(false);
  const [sleep, setSleep] = useState(false);
  const [energy, setEnergy] = useState(false);

  const [list, setList] = useState([]);

  function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }

  const createAlert = () =>
    Alert.alert(
      "No Topic Selected",
      "Please select atleast one topic to continue",
      [{ text: "OK", onPress: () => { } }],
      {
        cancelable: false,
      }
    );

  return (
    <ImageBackground source={require("../assets/ss.png")} style={styler.image}>
      <SafeAreaView style={styler.screen}>
        <ScrollView>
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
                  size={0.04 * screenHeight}
                  style={{ marginLeft: 0.03 * screenHeight }}
                />
              </TouchableOpacity>
            </View>
            <View style={{ flex: 0.6 }}>
              <Text
                style={{
                  fontSize: 0.032 * screenHeight,
                  fontWeight: "bold",
                  textAlign: "left",
                }}
              >
                Topics
              </Text>
            </View>
          </View>

          <View style={styler.checkBoxView}>
            <CheckBox
              checked={work}
              key={"Work and Productivity"}
              onPress={() => {
                setWork(!work);
                if (work === false) {
                  list.push("Work and Productivity");
                  messaging()
                    .subscribeToTopic('WorkAndProductivity')
                    .then(() => console.log('Subscribed to work!'))
                } else {
                  removeItemOnce(list, "Work and Productivity");
                  messaging()
                    .unsubscribeFromTopic('WorkAndProductivity')
                    .then(() => console.log('Unsubscribed to work!'))
                }
              }}
              title={"Work and Productivity"}
              containerStyle={{
                backgroundColor: "transparent",
                borderColor: "transparent",
              }}
            />
            <CheckBox
              checked={academic}
              key={"Academic Pressure"}
              onPress={() => {
                setAcademic(!academic);
                if (academic === false) {
                  list.push("Academic Pressure");
                  messaging()
                    .subscribeToTopic('AcademicPressure')
                    .then(() => console.log('Subscribed to academics'))
                } else {
                  removeItemOnce(list, "Academic Pressure");
                  messaging()
                    .unsubscribeFromTopic('AcademicPressure')
                    .then(() => console.log('Unsubscribed to academics'))
                }
              }}
              title={"Academic Pressure"}
              containerStyle={{
                backgroundColor: "transparent",
                borderColor: "transparent",
              }}
            />
            <CheckBox
              checked={relationship}
              key={"Relationships"}
              onPress={() => {
                setRelationship(!relationship);
                if (relationship === false) {
                  list.push("Relationships");
                  messaging()
                    .subscribeToTopic('RelationShips')
                    .then(() => console.log('Subscribed to relationships'))
                } else {
                  removeItemOnce(list, "Relationships");
                  messaging()
                    .unsubscribeFromTopic('RelationShips')
                    .then(() => console.log('Unsubscribed to relationships'))
                }
              }}
              title={"Relationships"}
              containerStyle={{
                backgroundColor: "transparent",
                borderColor: "transparent",
              }}
            />
            <CheckBox
              checked={lgbtq}
              key={"LGBTQ & Identity"}
              onPress={() => {
                setLgbtq(!lgbtq);
                if (lgbtq === false) {
                  list.push("LGBTQ & Identity");
                  messaging()
                    .subscribeToTopic('LGBTQ')
                    .then(() => console.log('Subscribed to lgbtq'))
                } else {
                  removeItemOnce(list, "LGBTQ & Identity");
                  messaging()
                    .unsubscribeFromTopic('LGBTQ')
                    .then(() => console.log('Unsubscribed to lgbtq'))
                }
              }}
              title={"LGBTQ & Identity"}
              containerStyle={{
                backgroundColor: "transparent",
                borderColor: "transparent",
              }}
            />
            <CheckBox
              checked={talk}
              key={"I just want to talk"}
              onPress={() => {
                setTalk(!talk);
                if (talk === false) {
                  list.push("I just want to talk");
                  messaging()
                    .subscribeToTopic('IJustWantToTalk')
                    .then(() => console.log('Subscribed to talk'))
                } else {
                  removeItemOnce(list, "I just want to talk");
                  messaging()
                    .unsubscribeFromTopic('IJustWantToTalk')
                    .then(() => console.log('Unsubscribed to talk'))
                }
              }}
              title={"I just want to talk"}
              containerStyle={{
                backgroundColor: "transparent",
                borderColor: "transparent",
              }}
            />
            <CheckBox
              checked={covid}
              key={"Covid 19"}
              onPress={() => {
                setCovid(!covid);
                if (covid === false) {
                  list.push("Covid 19");
                  messaging()
                    .subscribeToTopic('COVID19')
                    .then(() => console.log('Subscribed to covid'))
                } else {
                  removeItemOnce(list, "Covid 19");
                  messaging()
                    .unsubscribeFromTopic('COVID19')
                    .then(() => console.log('Unsubscribed to covid'))
                }
              }}
              title={"Covid 19"}
              containerStyle={{
                backgroundColor: "transparent",
                borderColor: "transparent",
              }}
            />
            <CheckBox
              checked={health}
              key={"Health Issues"}
              onPress={() => {
                setHealth(!health);
                if (health === false) {
                  list.push("Health Issues");
                  messaging()
                    .subscribeToTopic('HealthIssues')
                    .then(() => console.log('Subscribed to health issues'))
                } else {
                  removeItemOnce(list, "Health Issues");
                  messaging()
                    .unsubscribeFromTopic('HealthIssues')
                    .then(() => console.log('Unsubscribed to health issues'))
                }
              }}
              title={"Health Issues"}
              containerStyle={{
                backgroundColor: "transparent",
                borderColor: "transparent",
              }}
            />
            <CheckBox
              checked={parenting}
              key={"Parenting"}
              onPress={() => {
                setParenting(!parenting);
                if (parenting === false) {
                  list.push("Parenting");
                  messaging()
                    .subscribeToTopic('Parenting')
                    .then(() => console.log('Subscribed to parenting'))
                } else {
                  removeItemOnce(list, "Parenting");
                  messaging()
                    .unsubscribeFromTopic('Parenting')
                    .then(() => console.log('Unsubscribed to parenting'))
                }
              }}
              title={"Parenting"}
              containerStyle={{
                backgroundColor: "transparent",
                borderColor: "transparent",
              }}
            />
            <CheckBox
              checked={bullying}
              key={"Bullying"}
              onPress={() => {
                setBullying(!bullying);
                if (bullying === false) {
                  list.push("Bullying");
                  messaging()
                    .subscribeToTopic('Bullying')
                    .then(() => console.log('Subscribed to bullying'))
                } else {
                  removeItemOnce(list, "Bullying");
                  messaging()
                    .unsubscribeFromTopic('Bullying')
                    .then(() => console.log('Unsubscribed to bullying'))
                }
              }}
              title={"Bullying"}
              containerStyle={{
                backgroundColor: "transparent",
                borderColor: "transparent",
              }}
            />
            <CheckBox
              checked={lonliness}
              key={"Lonliness"}
              onPress={() => {
                setLonliness(!lonliness);
                if (lonliness === false) {
                  list.push("Lonliness");
                  messaging()
                    .subscribeToTopic('Loneliness')
                    .then(() => console.log('Subscribed to loneliness'))
                } else {
                  removeItemOnce(list, "Lonliness");
                  messaging()
                    .unsubscribeFromTopic('Loneliness')
                    .then(() => console.log('Unsubscribed to loneliness'))
                }
              }}
              title={"Lonliness"}
              containerStyle={{
                backgroundColor: "transparent",
                borderColor: "transparent",
              }}
            />
            <CheckBox
              checked={motivation}
              key={"Motivation and Confidence"}
              onPress={() => {
                setMotivation(!motivation);
                if (motivation === false) {
                  list.push("Motivation and Confidence");
                  messaging()
                    .subscribeToTopic('MotivationAndConfidence')
                    .then(() => console.log('Subscribed to motivation'))
                } else {
                  removeItemOnce(list, "Motivation and Confidence");
                  messaging()
                    .unsubscribeFromTopic('MotivationAndConfidence')
                    .then(() => console.log('Unsubscribed to motivation'))
                }
              }}
              title={"Motivation and Confidence"}
              containerStyle={{
                backgroundColor: "transparent",
                borderColor: "transparent",
              }}
            />
            <CheckBox
              checked={overthinking}
              key={"Overthinking"}
              onPress={() => {
                setOverthinking(!overthinking);
                if (overthinking === false) {
                  list.push("Overthinking");
                  messaging()
                    .subscribeToTopic('Overthinking')
                    .then(() => console.log('Subscribed to overthinking'))
                } else {
                  removeItemOnce(list, "Overthinking");
                  messaging()
                    .unsubscribeFromTopic('Overthinking')
                    .then(() => console.log('Unsubscribed to overthinking'))
                }
              }}
              title={"Overthinking"}
              containerStyle={{
                backgroundColor: "transparent",
                borderColor: "transparent",
              }}
            />
            <CheckBox
              checked={sleep}
              key={"Sleep"}
              onPress={() => {
                setSleep(!sleep);
                if (sleep === false) {
                  list.push("Sleep");
                  messaging()
                    .subscribeToTopic('Sleep')
                    .then(() => console.log('Subscribed to sleep'))
                } else {
                  removeItemOnce(list, "Sleep");
                  messaging()
                    .unsubscribeFromTopic('Sleep')
                    .then(() => console.log('Unsubscribed to sleep'))
                }
              }}
              title={"Sleep"}
              containerStyle={{
                backgroundColor: "transparent",
                borderColor: "transparent",
              }}
            />
          </View>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => {
                if (list.length === 0) {
                  createAlert();
                } else {
                  navigation.navigate("Quiz1", {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    city: city,
                    country: country,
                    bio: bio,
                    list: list,
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

export default NewListenerTopic;

const styler = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: 0.08 * screenHeight,
    paddingHorizontal: 0.02 * screenHeight,
  },
  head: {
    flex: 0.15,
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
    marginTop: 0.025 * screenHeight,
  },
  getStarted: {
    borderRadius: 15,
    width: 0.85 * screenWidth,
    height: 0.08 * screenHeight,
    backgroundColor: "#7AC141",
    color: "white",
    marginHorizontal: 0.015 * screenHeight,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 0.028 * screenHeight,
    elevation: 5,
    marginVertical: "5%",
    overflow: "hidden",
    paddingVertical: 0.02 * screenHeight,
  },
  checkBoxView: {
    marginVertical: "3%",
  },
  titleView: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
