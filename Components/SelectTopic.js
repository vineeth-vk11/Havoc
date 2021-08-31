import React, { } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { Icon } from "react-native-elements";
import Carousel from "react-native-snap-carousel";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const SelectTopic = () => {
  const carouselItems = [
    {
      title: "Hey",
      text: "Text 1",
    },
    {
      title: "Item 2",
      text: "Text 2",
    },
    {
      title: "Item 3",
      text: "Text 3",
    },
    {
      title: "Item 4",
      text: "Text 4",
    },
    {
      title: "Item 5",
      text: "Text 5",
    },
  ];
  const renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          backgroundColor: "purple",
          borderRadius: 5,
          height: 0.29 * screenHeight,
          padding: 0.02 * screenHeight,
          marginLeft: 0.03 * screenHeight,
          marginRight: 0.035 * screenHeight,
        }}
      >
        <Text style={{ color: "white" }}>{item.title}</Text>
        <Image
          style={{ width: 0.55 * screenWidth }}
          source={require("../assets/Images/HavocTherapy.png")}
        />
        <Text style={{ color: "white" }}>{item.text}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <View style={styler.head}>
        <TouchableOpacity>
          <Icon
            style={{ margin: 5 }}
            name="arrow-back"
            type="ionicon"
            color="#979797"
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Icon reverse name="person" type="ionicon" color="#7AC141" />
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Carousel
          layout={"default"}
          data={carouselItems}
          sliderWidth={0.55 * screenWidth}
          itemWidth={0.78 * screenWidth}
          renderItem={renderItem}
        />
      </View>
      <TouchableOpacity style={{ justifyContent: "flex-end" }}>
        <View style={styler.selectTopic}>
          <Text style={{ fontSize: 0.022 * screenHeight }}>Select Topic</Text>
          <Icon
            style={{ margin: 5 }}
            name="chevron-forward"
            type="ionicon"
            color="#979797"
          />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SelectTopic;
const styler = StyleSheet.create({
  head: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 0.07 * screenHeight,
  },
  selectTopic: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#E1FFC9",
    height: 0.08 * screenHeight,
    margin: 0.015 * screenHeight,
    padding: 0.015 * screenHeight,
  },
});
