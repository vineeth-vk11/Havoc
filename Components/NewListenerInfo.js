import React from 'react';
import {View,Text,StyleSheet,ScrollView,KeyboardAvoidingView,TouchableOpacity } from 'react-native';
import {TextInput} from "react-native-paper";

const NewListenerInfo= ()=>{
    return (
        <ScrollView>
        <View style={styler.screen}>
            <ScrollView>
                <KeyboardAvoidingView>
                <ScrollView>
            <View style={styler.Title}>
                <Text style={{fontSize: 25}}>Personal Info</Text>
            </View>
            <Text style={styler.declaration}>Users will see only your first name</Text>
            <View style={styler.nameView}>
                <View style={{marginVertical:"2%"}}>
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
       marginVertical:"10%",
       padding:'4%'
   },
   getStarted: {
    borderRadius: 15,
    width: 310,
    height: 52,
    backgroundColor: "#7AC141",
    color: "white",
    marginHorizontal: 10,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 20,
    elevation: 5,
    marginVertical: '5%'
  },
  Title:{
      height:"5%",
      marginVertical:"3%",
      alignItems:'center',
      justifyContent:'center',
  },
  declaration:{
      color:'grey',
      marginVertical:'3%'
  },
  nameView:{
      marginVertical:'2%'
  }
});