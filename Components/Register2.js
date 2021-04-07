import React, { Component } from 'react'
import {View, Text, SafeAreaView, Image, StyleSheet, TextInput, TouchableOpacity, Touchable} from 'react-native'
export default class Register2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            age: '14'
        }
    }
    render() {
        return (
            <SafeAreaView style={styler.register}>
                <Text
                style={styler.text}
                >Additional Information</Text>
                <TextInput
                placeholder="What do we call you/ Enter your Name"
                placeholderTextColor='rgba(122, 193, 65, 0.75);'
                style={styler.name}
                ></TextInput>

                <TextInput
                placeholder="Age"
                placeholderTextColor='rgba(122, 193, 65, 0.75);'
                style={styler.name}
                ></TextInput>
<TouchableOpacity>
                   <Text 
                   style={styler.getStarted}
                   >Get Started</Text>
                   </TouchableOpacity>
                </SafeAreaView>
        )
    }
}
const styler= StyleSheet.create({
    register:{
        flex:1,
        alignItems:'center',
        marginTop:20
    },
    text:{
        fontSize:24,
        margin:50,
        
    },
    getStarted:{
        justifyContent:'flex-end',
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
    name:{
        
        padding:10,
        borderColor:'black',
        borderRadius:0,
        width:310,
        height:52,
        color:'#828282',
        justifyContent:'center',
        backgroundColor:'#E5E5E5',
        margin:5
    }
})