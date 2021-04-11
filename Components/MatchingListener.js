import React, { Component } from 'react'
import {View, Text, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native'
import { Icon } from 'react-native-elements'

export default class MatchingListener extends Component {
    render() {
        return (
            <SafeAreaView style={styler.screen}>
            <View style={styler.headView}>
            <View style={styler.head}>
            <TouchableOpacity>
            <Icon
              style={{margin:5}}
             name='close'
            type='ionicon'
           color='#979797'size={30}
             />
                </TouchableOpacity>
                
            </View>
                </View>
                <View style={styler.textView}>
            <Text style={styler.textHeading}>Matching you with a Listener</Text>
            <View style={styler.loaderView}>

                </View>
                
                </View>
                <View style={styler.footView}>
            <Text style={styler.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                
                </View>
            
            
    
            </SafeAreaView>
        )
    }
}
const styler=StyleSheet.create({
    head:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-end',
        marginTop:35
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
    },
    screen:{
      flex:1
    },
    headView:{
        flex:0.2,
      },
      textView:{
        flex:0.2,
        marginLeft:10,
  
      },
      loaderView:{
        flex:0.2,
        margin:5
      },
      footView:{
        flex:0.4,
        justifyContent:'flex-end',
        marginBottom:50
      }

})