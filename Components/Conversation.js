import React, { Component } from 'react'
import {View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity, TextInput,ScrollView} from 'react-native'
import { ListItem, Avatar,Icon } from 'react-native-elements'

export default class MyRequests extends Component {
    render() {
        return (
            <SafeAreaView style={styler.main}>
                
            <View style={styler.head}>
                <TouchableOpacity>
            <Icon
              style={{margin:5}}
             name='arrow-back'
            type='ionicon'
           color='#979797'
             />
             </TouchableOpacity>
                <Text style={{fontSize:30,fontWeight:'bold',margin:40}}>Conversation</Text>
                <Icon
              style={{margin:5}}
             name='arrow-back'
            type='ionicon'
           color='#ffffff'
             />
            </View>
            <View style={styler.container}>
                <View style={styler.texts}>
                    <Text style={{fontSize:30}}>Mahesh</Text>
                    <Text style={{color:'#828282'}}>Career listening</Text>
                    <Text style={{color:'#828282'}}>14 March Sunday</Text>
                    </View>
                    <View style={styler.image}>
                    <Image
        style={styler.tinyLogo}
        source={require('../assets/Images/Conversation.png')}
      />
                        </View>
                </View>
                <View>
                <TouchableOpacity>
                   <Text 
                   style={styler.viewTheChat}
                   >VIEW THE CHAT</Text>
                   </TouchableOpacity>
                   </View>

            </SafeAreaView>
        )
    }
}
const styler=StyleSheet.create({

    head:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:20
    },
    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
    tinyLogo:{
        width:114,
        height:114,
        borderRadius:100
    },
    viewTheChat:{
        justifyContent:'flex-end',
        borderRadius:15,
        width:310,
        height:52,
        backgroundColor:'#7AC141',
        color:'white', 
        margin:20,
        textAlign:'center',
        textAlignVertical:'center',
        fontSize:20,
    }


})