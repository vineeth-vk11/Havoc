import React, { Component } from 'react'
import {View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity, TextInput,ScrollView} from 'react-native'
import { Icon } from 'react-native-elements'
import RadioForm from 'react-native-simple-radio-button';
var radio_props = [
    {label: 'I’ve been waiting for long', value: 0 },
    {label: 'I’m Nervous', value: 1 }
  ];
export default class Leaving extends Component {
    render() {
        return (
            <SafeAreaView>
                <View style={styler.sadFace}>
                <Image
               style={{width:100,height:100}} 
               source={require('../assets/Images/SadFace.png')} />
                <Text style={{fontSize:18,margin:5,color:'#828282'}}>We are sorry to see you leave</Text>
                </View>
                <View style={{margin:10}}>
        <RadioForm
          radio_props={radio_props}
          initial={0}
          buttonColor={'#7AC141'}
          selectedButtonColor={'#7AC141'}
          onPress={(value) => {this.setState({value:value})}}
          
        />
      </View>
      <TouchableOpacity>
                   <Text 
                   style={styler.done}
                   >Done</Text>
                   </TouchableOpacity>
       
                </SafeAreaView>
        )
    }
}
const styler = StyleSheet.create({
    sadFace:{
        alignItems:'center',
        margin:20,
        marginTop:90
    },
    done:{
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
    }
})