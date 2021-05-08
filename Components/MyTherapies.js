import React, {  useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from "react-native";
import { Icon } from "react-native-elements";
import { SearchBar } from "react-native-elements";
import { ListItem } from "react-native-elements";
const list = [
  {
    therapy: "Medication",
    price: "₹ 250",
    date: "14 March",
  },
  {
    therapy: "Medication",
    price: "₹ 250",
    date: "14 March",
  },
  {
    therapy: "Medication",
    price: "₹ 250",
    date: "14 March",
  },
];

const screenWidth= Dimensions.get('window').width;
const screenHeight=Dimensions.get('window').height;

const MyTherapies = () => {
  const [search, setsearch] = useState();

  updateSearch = (search) => {
    setsearch(search);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styler.head}>
          <TouchableOpacity>
            <Icon
              style={{ margin: 0.015*screenHeight }}
              name="arrow-back"
              type="ionicon"
              color="#979797"
              size={0.04*screenHeight}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 0.032*screenHeight, fontWeight: "bold" }}>My Therapies</Text>
          <TouchableOpacity>
            <Icon reverse name="person" type="ionicon" color="#ffff" />
          </TouchableOpacity>
        </View>
        <View style={{ padding: 0.015*screenHeight }}>
          <SearchBar
            containerStyle={{
              backgroundColor: "white",
              borderWidth: 1,
              borderRadius: 15,
              borderColor: "#7AC141",
              borderTopWidth: 1,
              borderTopColor: "#7AC141",
              borderBottomColor: "#7AC141",
              height: 0.07*screenHeight,
            }}
            inputContainerStyle={{ backgroundColor: "white", height: 0.03*screenHeight }}
            placeholder="Search therapy name"
            onChangeText={updateSearch}
            value={search}
          />
        </View>
        <View>
          {list.map((l, i) => (
            <View style={{ padding: 0.01*screenHeight, paddingRight: 0.01*screenHeight, paddingLeft: 0.01*screenHeight }}>
              <ListItem
                key={i}
                containerStyle={{ backgroundColor: "#F8F8F8", height: 0.08*screenHeight }}
              >
                <ListItem.Content>
                  <ListItem.Title>{l.therapy}</ListItem.Title>
                  <ListItem.Subtitle>{l.date}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Subtitle>{l.price}</ListItem.Subtitle>
              </ListItem>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyTherapies;

const styler = StyleSheet.create({
  head: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 0.04*screenHeight,
  },
});
