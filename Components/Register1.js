import React, { Component } from 'react'
import {View, Text, SafeAreaView, Image, StyleSheet, TextInput, TouchableOpacity, Touchable} from 'react-native'
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace'
export default class Register1 extends Component {
    render() {
        return (
            <SafeAreaView style={styler.register}>
               <Image
               style={{margin:50}} 
               source={require('../assets/Images/HavocTherapy.png')} />
               <TextInput 
               style={styler.phoneNumber}
               placeholder={"Phone Number"}
               ></TextInput>
               <TouchableOpacity>
                   <Text 
                   style={styler.sendOtp}
                   >Send OTP</Text>
                   </TouchableOpacity>
                <View style={{flexDirection:'row'}}>
                   <View style = {styler.lineStyle} />
                   <View style = {styler.lineStylew} />
                   <View style = {styler.lineStyle} />
                   </View>
                   <Text 
                   style={styler.continueWithEmail}
                   >Countinue With Email</Text>
                </SafeAreaView>
        )
    }
}
const styler= StyleSheet.create({
    register:{
        alignItems: 'center'
    },
    phoneNumber:{
        padding:10,
        borderColor:'black',
        borderRadius:15,
        borderWidth:0.5,
        width:310,
        height:52,
        color:'#828282'
        
    },
    sendOtp:{
        borderRadius:15,
        width:310,
        height:52,
        backgroundColor:'#7AC141',
        color:'white', 
        margin:20,
        textAlign:'center',
        textAlignVertical:'center',
        fontSize:20
    },
    lineStyle:{
        borderWidth:0.4,
        width:125,
        borderColor:'black',
        margin:10,
        marginBottom:30,
        marginTop:30,
        borderColor:'#828282'
   },
   lineStylew:{
    borderWidth:0.4,
    width:50,
    borderColor:'black',
    margin:10,
    marginBottom:30,
    marginTop:30,
    borderColor:'white'
},
continueWithEmail:{
    borderRadius:15,
    width:310,
    height:52,
    backgroundColor:'#7AC141',
    color:'white', 
    margin:20,
    textAlign:'center',
    textAlignVertical:'center',
    fontSize:16
}
})