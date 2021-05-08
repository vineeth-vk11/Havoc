import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions
} from "react-native";
import { Icon } from "react-native-elements";
import { Button } from "react-native-elements";

const screenWidth= Dimensions.get('window').width;
const screenHeight=Dimensions.get('window').height;

const TherapyProduct = ({ navigation, route }) => {
  /*const { name, description, cost, image } = route.params;*/

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
                style={{ marginTop: 0.015*screenHeight, marginLeft: 0.019*screenHeight }}
              />
            </TouchableOpacity>
            <Text style={{ fontSize: 0.025*screenHeight, marginTop: 0.015*screenHeight }}>Therapy Product</Text>
            <TouchableOpacity>
              <Icon name="arrow-back" type="ionicon" color="#ffff" />
            </TouchableOpacity>
          </View>
        </View>

       <View style={styler.imageView}>
          <Image style={styler.meditation} source={require("../assets/Images/Medication.png") } />
        </View>
        <View style={styler.meditationView}>
          <View style={styler.meditationTexts}>
            <Text style={{ fontSize: 0.03*screenHeight }}>Yoga</Text>
            <Text style={{ fontSize: 0.03*screenHeight }}>{"₹ " + 250}</Text>
          </View>
          <View style={{ margin: 0.015*screenHeight }}>
            <Text>XYZ</Text>
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
              containerStyle={{ width: 0.35*screenWidth, margin: 0.015*screenHeight }}
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
    marginTop: 0.05*screenHeight,
    margin: 0.015*screenHeight,
  },
  meditation: {
    width: 0.8*screenWidth,
    height: 0.27*screenHeight,
  },
  meditationTexts: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 0.02*screenHeight,
  },
  applyCoupon: {
    padding: 0.015*screenHeight,
    borderColor: "#7AC141",
    borderRadius: 5,
    borderWidth: 1,
    width: 0.55*screenWidth,
    height: 0.054*screenHeight,
    color: "#828282",
    justifyContent: "center",
  },
  promo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 0.025*screenHeight,
    margin: 0.015*screenHeight,
  },
  bookNow: {
    justifyContent: "flex-end",
    borderRadius: 15,
    width: 0.85*screenWidth,
    height: 0.08*screenHeight,
    backgroundColor: "#7AC141",
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 0.025*screenHeight,
  },
  screen: { flex: 1 },
  headView: {
    flex: 0.15,
  },
  imageView: {
    flex: 0.25,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0.03*screenHeight,
  },
  meditationView: {
    flex: 0.25,
    paddingTop: 0.015*screenHeight,
  },
  promoView: { flex: 0.2, justifyContent: "center" },
  footView: {
    flex: 0.15,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 0.1*screenHeight,
  },
});
