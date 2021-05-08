import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Dimensions
} from "react-native";
import { CheckBox } from "react-native-elements";
import { cos, set } from "react-native-reanimated";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const NewListenerTopic = ({ navigation }) => {
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

  return (
    <ImageBackground source={require("../assets/ss.png")} style={styler.image}>
      <ScrollView>
        <View style={styler.screen}>
          <View style={styler.titleView}>
            <Text style={{fontSize: 0.03*screenHeight}}>Select Your Topic</Text>
          </View>
          <View style={styler.checkBoxView}>
            <CheckBox
              checked={all}
              key={"All"}
              onPress={() => {
                setAll(!all);
                if (all === false) {
                  list.push("Work and Productivity");
                  list.push("Academic Pressure");
                  list.push("Relationships");
                  list.push("LGBTQ & Identity");
                  list.push("I just want to talk");
                  list.push("Covid 19");
                  list.push("Health Issues");
                  list.push("Parenting");
                  list.push("Bullying");
                  list.push("Lonliness");
                  list.push("Motivation and Confidence");
                  list.push("Overthinking");
                  list.push("Sleep");

                  setWork(true);
                  setAcademic(true);
                  setRelationship(true);
                  setLgbtq(true);
                  setTalk(true);
                  setCovid(true);
                  setHealth(true);
                  setParenting(true);
                  setBullying(true);
                  setLonliness(true);
                  setMotivation(true);
                  setOverthinking(true);
                  setSleep(true);
                } else {
                  list.length = 0;

                  setWork(false);
                  setAcademic(false);
                  setRelationship(false);
                  setLgbtq(false);
                  setTalk(false);
                  setCovid(false);
                  setHealth(false);
                  setParenting(false);
                  setBullying(false);
                  setLonliness(false);
                  setMotivation(false);
                  setOverthinking(false);
                  setSleep(false);
                }
              }}
              title={"Select All"}
              containerStyle={{
                backgroundColor: "transparent",
                borderColor: "transparent",
              }}
            />
            <CheckBox
              checked={work}
              key={"Work and Productivity"}
              onPress={() => {
                setWork(!work);
                if (work === false) {
                  list.push("Work and Productivity");
                } else {
                  removeItemOnce(list, "Work and Productivity");
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
                } else {
                  removeItemOnce(list, "Academic Pressure");
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
                } else {
                  removeItemOnce(list, "Relationships");
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
                } else {
                  removeItemOnce(list, "LGBTQ & Identity");
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
                } else {
                  removeItemOnce(list, "I just want to talk");
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
                } else {
                  removeItemOnce(list, "Covid 19");
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
                } else {
                  removeItemOnce(list, "Health Issues");
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
                } else {
                  removeItemOnce(list, "Parenting");
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
                } else {
                  removeItemOnce(list, "Bullying");
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
                } else {
                  removeItemOnce(list, "Lonliness");
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
                } else {
                  removeItemOnce(list, "Motivation and Confidence");
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
                } else {
                  removeItemOnce(list, "Overthinking");
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
                } else {
                  removeItemOnce(list, "Sleep");
                }
              }}
              title={"Sleep"}
              containerStyle={{
                backgroundColor: "transparent",
                borderColor: "transparent",
              }}
            />
          </View>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Quiz1");
            }}
          >
            <Text style={styler.getStarted}>CONTINUE</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default NewListenerTopic;

const styler = StyleSheet.create({
  screen:{
    flex:1,
    justifyContent:"space-between",
    paddingVertical:0.08*screenHeight,
    paddingHorizontal:0.02*screenHeight
},
getStarted: {
    borderRadius: 15,
    width: 0.85*screenWidth,
    height: 0.08*screenHeight,
    backgroundColor: "#7AC141",
    color: "white",
    marginHorizontal: 0.015*screenHeight,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 0.028*screenHeight,
    elevation: 5,
    marginVertical: '5%'
  },
  checkBoxView:{
      marginVertical:"3%"
  },
  titleView:{
      justifyContent:'center',
      alignItems:'center'
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
