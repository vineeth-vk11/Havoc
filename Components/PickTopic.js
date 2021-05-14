import React, { useState, useCallback, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Dimensions
} from "react-native";
import firebase from "firebase";
require("firebase/firestore");
import { Icon } from "react-native-elements";
import { SearchBar } from "react-native-elements";
import { ListItem } from "react-native-elements";
import { ActivityIndicator } from "react-native-paper";
const list = [
  {
    key: "1",
    name: "Work and Productivity",
    subtitle: "66 Talking",
  },
  {
    key: "2",
    name: "Academic Pressure",
    subtitle: "53 Talking",
  },
  {
    key: "3",
    name: "Relationships",
    subtitle: "72 Talking",
  },
  {
    key: "4",
    name: "LGBTQ & Identity",
    subtitle: "32 Talking",
  },
  {
    key: "5",
    name: "I just want to talk",
    subtitle: "96 Talking",
  },
  {
    key: "6",
    name: "COVID 19",
    subtitle: "49 Talking",
  },
  {
    key: "7",
    name: "Health Issues",
    subtitle: "43 Talking",
  },
  {
    key: "8",
    name: "Parenting",
    subtitle: "34 Talking",
  },
  {
    key: "9",
    name: "Bullying",
    subtitle: "24 Talking",
  },
  {
    key: "10",
    name: "Loneliness",
    subtitle: "25 Talking",
  },
  {
    key: "11",
    name: "Motivation and Confidence",
    subtitle: "36 Talking",
  },
  {
    key: "12",
    name: "Overthinking",
    subtitle: "21 Talking",
  },
  {
    key: "13",
    name: "Sleep",
    subtitle: "15 Talking",
  },
  {
    key: "14",
    name: "Low Energy",
    subtitle: "12 Talking",
  },
];

const screenWidth= Dimensions.get('window').width;
const screenHeight=Dimensions.get('window').height;

const PickTopic = ({ navigation }) => {
  const [search, setsearch] = useState("");
  const [ageGroupExists, setAgeGroupExists] = useState(false);
  const [minAge, setMinAge] = useState();
  const [maxAge, setMaxAge] = useState();
  const [name, setName] = useState();

  const [originalList, setOriginalList] = useState([
    {
      key: "1",
      name: "Work and Productivity",
      subtitle: "66 Talking",
    },
    {
      key: "2",
      name: "Academic Pressure",
      subtitle: "53 Talking",
    },
    {
      key: "3",
      name: "Relationships",
      subtitle: "72 Talking",
    },
    {
      key: "4",
      name: "LGBTQ & Identity",
      subtitle: "32 Talking",
    },
    {
      key: "5",
      name: "I just want to talk",
      subtitle: "96 Talking",
    },
    {
      key: "6",
      name: "COVID 19",
      subtitle: "49 Talking",
    },
    {
      key: "7",
      name: "Health Issues",
      subtitle: "43 Talking",
    },
    {
      key: "8",
      name: "Parenting",
      subtitle: "34 Talking",
    },
    {
      key: "9",
      name: "Bullying",
      subtitle: "24 Talking",
    },
    {
      key: "10",
      name: "Loneliness",
      subtitle: "25 Talking",
    },
    {
      key: "11",
      name: "Motivation and Confidence",
      subtitle: "36 Talking",
    },
    {
      key: "12",
      name: "Overthinking",
      subtitle: "21 Talking",
    },
    {
      key: "13",
      name: "Sleep",
      subtitle: "15 Talking",
    },
    {
      key: "14",
      name: "Low Energy",
      subtitle: "12 Talking",
    },
  ]);

  const [list, setList] = useState(originalList)

  const searchFilterFunction =(txt)=>{
    setsearch(txt);
    const newData=originalList.filter(item=>{
      const itemData=item.name;
      return itemData.indexOf(txt)>-1;
    });
    if(newData.length==originalList.length){
      setList(originalList);
    }else{
      setList(newData);
    }
  }

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (firebase.auth().currentUser) {
      var user = firebase.auth().currentUser.uid;
      const userInfo = firebase
        .firestore()
        .collection("users")
        .doc(user)
        .get()
        .then((documentSnapshot) => {
          var data = documentSnapshot.data();
          if (documentSnapshot.get("minAge")) {
            setAgeGroupExists(true);
            setMaxAge(data["maxAge"]);
            setMinAge(data["minAge"]);
            setName(data["name"]);
          } else {
            setAgeGroupExists(false);
            setName(data["name"]);
          }
          setLoading(false);
        });
    }
  });

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <ImageBackground
    source={require("../assets/ss.png")}
    style={styler.image}
  >
    <SafeAreaView style={styler.screen}>
      <ScrollView>

          <View style={styler.head}>
            <View style={{ flex: 0.35, alignItems: "flex-start" }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack(null);
                }}
              >
                <Icon
                  style={{ marginLeft: 0.032*screenWidth }}
                  name="arrow-back"
                  type="ionicon"
                  color="#000000"
                  size={0.040*screenHeight}
                />
              </TouchableOpacity>
            </View>
            <View style={{ flex: 0.65 }}>
              <Text
                style={{
                  fontSize: 0.033*screenHeight,
                  fontWeight: "bold",
                  alignItems: "flex-start",
                }}
              >
                Pick Topic
              </Text>
            </View>
          </View>
          <View style={{ padding: 0.015*screenHeight, marginTop: 0.015*screenHeight }}>
            <SearchBar
              containerStyle={{
                backgroundColor: "white",
                borderWidth: 1,
                borderRadius: 0.02*screenHeight,
                borderColor: "#7AC141",
                borderTopWidth: 1,
                borderTopColor: "#7AC141",
                borderBottomColor: "#7AC141",
                height: 0.06*screenHeight,
              }}
              inputContainerStyle={{ backgroundColor: "white", height: 0.04*screenHeight }}
              placeholder="Enter topic name"
              onChangeText={searchFilterFunction}
              value={search}
            />
          </View>
          <View>
            {list.map((l, i) => (
              <TouchableOpacity
                key={i}
                onPress={() => {
                  if (ageGroupExists) {
                    navigation.navigate("HowYouFeel", {
                      userName: name,
                      topic: l.name,
                      minAge: minAge,
                      maxAge: maxAge,
                    });
                  } else {
                    navigation.navigate("AgeOfListener", {
                      userName: name,
                      topic: l.name,
                    });
                  }
                }}
              >
                <View
                  key={i}
                  style={{
                    padding: 3,
                    paddingRight: 0.01*screenHeight,
                    paddingLeft: 0.01*screenHeight,
                    marginLeft: 0.011*screenHeight,
                    marginRight: 0.011*screenHeight,
                  }}
                >
                  <ListItem
                    key={i}
                    containerStyle={{
                      backgroundColor: "#F8F8F8",
                      height: 0.08*screenHeight,
                      borderRadius: 0.01*screenHeight,
                      elevation: 0.01*screenHeight,
                    }}
                  >
                    <ListItem.Content>
                      <ListItem.Title>{l.name}</ListItem.Title>
                      <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                    </ListItem.Content>
                    <ListItem.Chevron size={0.04*screenHeight} />
                  </ListItem>
                </View>
              </TouchableOpacity>
            ))}
          </View>
      </ScrollView>
    </SafeAreaView>
    </ImageBackground>

  );
};

export default PickTopic;

const styler = StyleSheet.create({
  head: {
    flex: 0.15,
    flexDirection: "row",
    marginTop: 0.025*screenHeight,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  screen: {
    flex: 1,
    marginTop: 0.035*screenHeight,
  },
});
