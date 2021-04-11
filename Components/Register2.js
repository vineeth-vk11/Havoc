import React, { Component } from 'react'
import {View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
export default class Register2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            age: '14'
        }
    }
    render() {
        return (
            <SafeAreaView style={styler.screen}>
                <View style={styler.addtionalInfoView}>
                <Text
                style={styler.text}
                >Additional Information</Text>
                    </View>
                    <View style={styler.inputsView}>
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
                    </View>
                    <View style={styler.getStartedView}>
                    <TouchableOpacity>
                   <Text 
                   style={styler.getStarted}
                   >Get Started</Text>
                   </TouchableOpacity>
                    </View>

                </SafeAreaView>
        )
    }
}
const styler= StyleSheet.create({
    screen:{
        flex:1,
        alignItems:'center',
        marginTop:20
    },
    text:{
        fontSize:24,
        
    },
    getStarted:{
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
        borderBottomWidth:1,
        borderBottomColor:'rgba(122, 193, 65, 0.4);',
        borderRadius:0,
        width:310,
        height:52,
        color:'#828282',
        justifyContent:'center',
        backgroundColor:'#F9FCF6',
        margin:5,
        fontSize:16
    },
    addtionalInfoView:{
flex:0.3,
alignItems:'center',
justifyContent:'center'
    },
    inputsView:{
flex:0.2
    },
    getStartedView:{
flex:0.5,
justifyContent:'flex-end',
marginBottom:50
    }
})