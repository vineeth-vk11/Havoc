import React from 'react';
import {View,Text,StyleSheet,ScrollView,KeyboardAvoidingView,TouchableOpacity, Dimensions } from 'react-native';
import {TextInput} from "react-native-paper";

const screenWidth= Dimensions.get('window').width;
const screenHeight=Dimensions.get('window').height;

const NewListenerInfo= ()=>{
    return (
        <ScrollView>
        <View style={styler.screen}>
            <ScrollView>
                <KeyboardAvoidingView>
                <ScrollView>
            <View style={styler.Title}>
                <Text style={{fontSize: 0.03*screenHeight}}>Personal Info</Text>
            </View>
            <Text style={styler.declaration}>Users will see only your first name</Text>
            <View style={styler.nameView}>
                <View style={{marginVertical:0.015*screenHeight}}>
                <TextInput mode="flat" label="First Name" 
                theme={{colors:{primary:'black', background:'transparent'}}} />
                </View>
                <View>
                <TextInput mode="flat" label="Last Name" 
                theme={{colors:{primary:'black', background:'transparent'}}} />
                </View>
            </View>
            <Text style={styler.declaration}>We will never share your email without asking you first</Text>
            <View style={styler.name}>
            <TextInput mode="flat" label="Email" 
                theme={{colors:{primary:'black', background:'transparent'}}} />
            </View>
            <Text style={styler.declaration}>Where do you live? This will be shown in your profile</Text>
            <View style={styler.name}>
            <TextInput mode="flat" label="City" 
                theme={{colors:{primary:'black', background:'transparent'}}} />
            <TextInput mode="flat" label="Country" 
                theme={{colors:{primary:'black', background:'transparent'}}} />
            </View>
            <Text style={styler.declaration}>Write a bit about who you are and why you are a listener</Text>
            <View style={styler.name}>
            <TextInput mode="flat" label="Enter your bio" 
                theme={{colors:{primary:'black', background:'transparent'}}} />
            </View>
            <TouchableOpacity>
          <Text style={styler.getStarted}>FIND LISTENER</Text>
          </TouchableOpacity>
          </ScrollView>
            </KeyboardAvoidingView>
            </ScrollView>
        </View>
        </ScrollView>
    );
}

export default NewListenerInfo;

const styler=StyleSheet.create({
   screen:{
       flex:1,
       justifyContent:"space-between",
       marginVertical:0.07*screenHeight,
       padding:0.02*screenHeight
   },
   getStarted: {
    borderRadius: 15,
    width: 0.85*screenWidth,
    height: 0.08*screenHeight,
    backgroundColor: "#7AC141",
    color: "white",
    marginHorizontal: 0.02*screenHeight,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 0.028*screenHeight,
    elevation: 5,
    marginVertical: 0.03*screenHeight
  },
  Title:{
      height:0.05*screenHeight,
      marginVertical:0.02*screenHeight,
      alignItems:'center',
      justifyContent:'center',
  },
  declaration:{
      color:'grey',
      marginVertical:0.01*screenHeight
  },
  nameView:{
      marginVertical:0.01*screenHeight
  }
});