import React from 'react'
import {View, Text, SafeAreaView, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import { Icon } from 'react-native-elements';
import { SocialIcon } from 'react-native-elements'
const Register1 = ()=> {
        return (
            <SafeAreaView style={styler.screen}>
                <View style={styler.havoc}>
               <Image
               source={require('../assets/Images/HavocTherapy.png')} />
               </View>
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
                   <View>
                   <TouchableOpacity
                   >
                   <Text 
                   style={styler.continueWithEmail}
                   >Countinue With Email</Text>
                 </TouchableOpacity>
                 <View style={styler.authentication}>
                     <TouchableOpacity
                     style={{marginLeft:8,marginRight:8}}>
                     <SocialIcon
                     type='google'
                     />
                         </TouchableOpacity>
                         <TouchableOpacity
                         style={{marginLeft:8,marginRight:8}}>
                     <SocialIcon
                     type='facebook'
                     />
                         </TouchableOpacity>
                         <TouchableOpacity
                         style={{marginLeft:8,marginRight:8}}>
                     <Icon
  name='logo-apple'
  type='ionicon'
  color='#000'
  size={50}
/>
                         </TouchableOpacity>
                     </View>
                       </View>

                </SafeAreaView>
        )
    }

    export default Register1;
const styler= StyleSheet.create({
    screen:{
        alignItems:'center',
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

},
havoc:{
    justifyContent:'center',
    margin:50
},
})