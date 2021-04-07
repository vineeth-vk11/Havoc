import React, { Component } from 'react'
import {View, Text, SafeAreaView, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import { Icon } from 'react-native-elements'
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
                   <TouchableOpacity
                   >
                   <Text 
                   style={styler.continueWithEmail}
                   >Countinue With Email</Text>
                 </TouchableOpacity>
                 <View style={styler.authentication}>
                     <TouchableOpacity
                     style={{marginLeft:8,marginRight:8}}>
                     <Icon
  reverse
  name='logo-google'
  type='ionicon'
  color='#517fa4'
/>
                         </TouchableOpacity>
                         <TouchableOpacity
                         style={{marginLeft:8,marginRight:8}}>
                     <Icon
  reverse
  name='logo-facebook'
  type='ionicon'
  color='#517fa4'
/>
                         </TouchableOpacity>
                         <TouchableOpacity
                         style={{marginLeft:8,marginRight:8}}>
                     <Icon
  reverse
  name='logo-linkedin'
  type='ionicon'
  color='#517fa4'
/>
                         </TouchableOpacity>
                     </View>

                </SafeAreaView>
        )
    }
}
const styler= StyleSheet.create({
    register:{
 flex:1
    },
    phoneNumber:{
        padding:10,
        borderColor:'black',
        borderRadius:15,
        borderWidth:0.5,
        width:310,
        height:52,
        color:'#828282',
        justifyContent:'center'
        
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
},
authentication:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around'

}
})