import React, { Component } from 'react'
import {View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity, TextInput,ScrollView} from 'react-native'
import { Icon } from 'react-native-elements'
import RadioForm , {RadioButton, RadioButtonInput, RadioButtonLabel}from 'react-native-simple-radio-button';
var radio_props = [
    {label: 'I’ve been waiting for long', value: 0 },
    {label: 'I’m Nervous', value: 1 }
  ];
export default class Leaving extends Component {
    constructor(props){
        super(props);
        this.state={
            value: ''
        }
    }
    render() {
        return (
            <SafeAreaView style={styler.screen}>
                <View style={styler.sadFaceView}>
                <View style={styler.sadFace}>
                <Image
               style={{width:100,height:100}} 
               source={require('../assets/Images/SadFace.png')} />
                <Text style={{fontSize:18,margin:5,color:'#828282'}}>We are sorry to see you leave</Text>
                </View>
                    </View>
               
                <View style={styler.formView}>
                <Text style={styler.text}>What went wrong?</Text>
                <RadioForm
  formHorizontal={false}
  animation={true}
>
  {
    radio_props.map((obj, i) => (
      <RadioButton labelHorizontal={true} key={i} >
       
        <View style={{flexDirection:'row'}}>
        <RadioButtonInput
          obj={obj}
          index={i}
          isSelected={this.state.value === i}
         onPress={(value) => {this.setState({value:value})}}
          borderWidth={2}
          buttonInnerColor={'#7AC141'}
          buttonOuterColor={this.state.value === i ? '#7AC141' : '#DADADA'}
          buttonSize={16}
          buttonOuterSize={28}
          buttonStyle={{marginRight:20,marginBottom:10}}
          buttonWrapStyle={{marginLeft: 10}}
        />
        <RadioButtonLabel
          obj={obj}
          index={i}
          labelHorizontal={true}
         onPress={(value) => {this.setState({value:value})}}
          labelStyle={{fontSize: 20, color: 'rgba(18, 18, 18, 0.5)'}}
          labelWrapStyle={{}}
        />
          </View>
      </RadioButton>
    ))
  }  
</RadioForm>
      </View>
      <View style={styler.footView}>
      <TouchableOpacity>
                   <Text 
                   style={styler.done}
                   >Done</Text>
                   </TouchableOpacity>
          </View>
     
       
                </SafeAreaView>
        )
    }
}
const styler = StyleSheet.create({
    sadFace:{
        alignItems:'center'
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
    },screen:{
        flex:1
      },
      sadFaceView:{
        flex:0.5,
        justifyContent:'center',
        alignItems:'center'
      },
      formView:{
        flex:0.3,
        margin:5
      },
      footView:{
        flex:0.2,
        justifyContent:'flex-end',
        marginBottom:70
      }, 
      text:{
        fontSize:20,
        textAlign:'left',
        margin:5,
        marginBottom:15
        
    },
  
})