import React, { Component } from 'react'
import {View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity, TextInput,ScrollView} from 'react-native'
import { Icon } from 'react-native-elements'

export default class MatchingListener extends Component {
    render() {
        return (
            <SafeAreaView>
            <View style={styler.head}>
            <TouchableOpacity>
            <Icon
              style={{margin:5}}
             name='close'
            type='ionicon'
           color='#979797'
             />
                </TouchableOpacity>
            </View>
            <Text style={styler.textHeading}>Matching you with a Listener</Text>
            
            <Text style={styler.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
    
            </SafeAreaView>
        )
    }
}
const styler=StyleSheet.create({
    head:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-end',
        marginTop:20
    },
    textHeading:{
        fontSize:24,
        textAlign:'center',
        fontWeight:'bold',
        margin:5
        
    },
    text:{
        fontSize:18,
        textAlign:'center',
        margin:5
    }

})