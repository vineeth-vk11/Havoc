import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";
const Register3 = () => {
  return (
    <SafeAreaView style={styler.screen}>
      <View style={styler.headerView}>
        <View style={styler.head}>
          <TouchableOpacity>
            <Icon
            reverse
              name="person-circle"
              type="ionicon"
              color="#7AC141"
              size={24}
            />
          </TouchableOpacity>
          </View>
          <View style={styler.imageView}>
          <Image
            style={{ width: 107, height: 68 }}
            source={require("../assets/Images/HavocTherapy.png")}
          />
        </View>
      </View>
      <View style={styler.textView}>
        <Text style={styler.text}>ARE YOU READY?</Text>
        <Text style={styler.textSmall}>
          Connect with a trained listener to {"\n"} talk about anything
        </Text>
      </View>
      <View style={styler.findMyListnerView}>
        <TouchableOpacity>
          <View style={styler.find}>
            <Text style={{ color: "white", textAlign: "center", fontSize: 20 }}>
              FIND MY{"\n"}SEEKER
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styler.activeUser}>
              <Text>0</Text>
          </View>
      </View>
      <View style={styler.talkingNow}>
        <Text style={styler.tnText}>Talking Now : 180</Text>
      </View>
      <View style={styler.footerView}>
      <View style={{ flexDirection: "column", alignItems: "center",marginBottom: 20}}>
            <TouchableOpacity>
              <Icon
                reverse
                name="chat"
                type="material-icons"
                color="#7AC141"
                size={24}
              />
            </TouchableOpacity>
            <Text>Dedicated</Text>
          </View>
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <TouchableOpacity>
              <Icon
                reverse
                name="user-friends"
                type="font-awesome-5"
                color="#7AC141"
                size={24}
                reverseColor='white'
              />
            </TouchableOpacity>
            <Text>Become</Text>
            <Text>Listener</Text>
          </View>
          <View style={{ flexDirection: "column", alignItems: "center", marginBottom: 20}}>
            <TouchableOpacity>
              <Icon
                reverse
                name="journal"
                type="ionicon"
                color="#7AC141"
                size={24}
              />
            </TouchableOpacity>
            <Text>Journal</Text>
          </View>
      </View>
    </SafeAreaView>
  );
};

export default Register3;

const styler = StyleSheet.create({
  screen: {
    flex: 1,
  },
  head: {
    width:'35%',
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 35,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  textSmall: {
    fontSize: 16,
    margin: 10,
    textAlign: "center",
  },
  find: {
    backgroundColor: "#7AC141",
    width: 135,
    height: 135,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  headerView: {
    flex: 0.3,
    flexDirection: 'row',
    padding:10
  },
  textView: {
    flex: 0.1,
  },
  findMyListnerView: {
    flex: 0.4,
    justifyContent:'center',
    alignItems: "center",
    marginBottom: 20,
    flexDirection: 'row',
  },
  footerView: {
    flexDirection:'row',
    flex: 0.2,
    marginTop:80,
    justifyContent: "space-around",
    alignItems:'center',
  },
  imageView:{
     marginTop: 35
  },
  talkingNow:{
    justifyContent:'center',
    alignItems:'center',
  },
  tnText:{
    fontSize: 25
  },
  activeUser:{
    width:36,
    height:36,
    borderRadius: 18,
    backgroundColor:'red',
    justifyContent:'center',
    alignItems:'center',
    marginLeft:-20
  }
});