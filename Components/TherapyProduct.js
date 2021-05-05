import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { Icon } from "react-native-elements";
import { Button } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const TherapyProduct = ({ navigation, route }) => {
  const { name, description, cost, image } = route.params;

  return (
    <SafeAreaView style={styler.screen}>
      <ScrollView>
        <View style={styler.headView}>
          <View style={styler.head}>
            <TouchableOpacity>
              <Icon
                name="arrow-back"
                type="ionicon"
                color="#979797"
                style={{ marginTop: 10, marginLeft: 20 }}
              />
            </TouchableOpacity>
            <Text style={{ fontSize: 24, marginTop: 10 }}>Therapy Product</Text>
            <TouchableOpacity>
              <Icon name="arrow-back" type="ionicon" color="#ffff" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styler.imageView}>
          <Image style={styler.meditation} source={{ uri: image[0] }} />
        </View>
        <View style={styler.meditationView}>
          <View style={styler.meditationTexts}>
            <Text style={{ fontSize: 22 }}>{name}</Text>
            <Text style={{ fontSize: 22 }}>{"₹ " + cost}</Text>
          </View>
          <View style={{ margin: 10 }}>
            <Text>{description}</Text>
          </View>
        </View>
        <View style={styler.promoView}>
          <View style={styler.promo}>
            <TextInput
              style={styler.applyCoupon}
              placeholder={"Got a promo code?"}
              placeholderTextColor="#000"
            ></TextInput>
            <Button
              titleStyle={{ color: "#7AC141" }}
              raised
              containerStyle={{ width: 100, margin: 10 }}
              buttonStyle={{
                padding: 5,
                borderColor: "#7AC141",
                borderWidth: 1,
                borderRadius: 5,
              }}
              title="APPLY"
              type="outline"
            />
          </View>
        </View>
        <View style={styler.footView}>
          <TouchableOpacity>
            <Text style={styler.bookNow}>BOOK NOW</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TherapyProduct;

const styler = StyleSheet.create({
  head: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 35,
    margin: 10,
  },
  meditation: {
    width: 258,
    height: 172,
  },
  tinyLogo: {
    width: 114,
    height: 114,
    borderRadius: 100,
  },
  meditationTexts: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 10,
  },
  applyCoupon: {
    padding: 10,
    borderColor: "#7AC141",
    borderRadius: 5,
    borderWidth: 1,
    width: 198,
    height: 35,
    color: "#828282",
    justifyContent: "center",
  },
  promo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 20,
    margin: 10,
  },
  bookNow: {
    justifyContent: "flex-end",
    borderRadius: 15,
    width: 310,
    height: 52,
    backgroundColor: "#7AC141",
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 20,
  },
  screen: { flex: 1 },
  headView: {
    flex: 0.15,
  },
  imageView: {
    flex: 0.25,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 24,
  },
  meditationView: {
    flex: 0.25,
    paddingTop: 10,
  },
  promoView: { flex: 0.2, justifyContent: "center" },
  footView: {
    flex: 0.15,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 50,
  },
});
