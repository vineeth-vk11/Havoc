import React, { Component } from 'react'
import {View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity, TextInput,ScrollView} from 'react-native'
import { Icon } from 'react-native-elements'
import RadioForm from 'react-native-simple-radio-button';
var radio_props = [
    {label: '18 - 24 Years', value: 0 },
    {label: '25 - 34 Years', value: 1 },
    {label: '35 - 50 Years', value: 2 },
    {label: '51 - years or more', value: 3 }
  ];
export default class AgeOfListner extends Component {
    constructor(props){
        super(props);
        this.state={
            value: ''
        }
    }

    render() {
        return (
            <SafeAreaView>
            <View style={styler.head}>
            <TouchableOpacity>
            <Icon
              style={{margin:5}}
             name='arrow-back'
            type='ionicon'
           color='#979797'
             />
                </TouchableOpacity>
            </View>
            <Text style={styler.age}>Age of listener</Text>
            <Text style={styler.set}>(Set Your Preference)</Text>
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
                   style={styler.continue}
                   >Get Started</Text>
                   </TouchableOpacity>
            </SafeAreaView>
        )
    }
}
const styler=StyleSheet.create({
    head:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        marginTop:20
    },
    age:{
        fontSize:20,
        textAlign:'left',
        fontWeight:'bold',
        margin:5,
        marginBottom:0
        
    },
    set:{
        fontSize:15,
        textAlign:'left',
        margin:2
    },
    continue:{
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

})