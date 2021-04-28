import React, {  useState } from 'react'
import {View, Text, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';
import RadioForm , {RadioButton, RadioButtonInput, RadioButtonLabel}from 'react-native-simple-radio-button';
const Register2 =()=> {
    var radio_props = [
        {label: 'Male', value: 0 },
        {label: 'Female', value: 1 }
      ];
      const [value,setvalue]=useState();
        return (
            <SafeAreaView style={styler.screen}>
                <View style={styler.addtionalInfoView}>
                <Text
                style={styler.text}
                >Additional Information</Text>
                    </View>
                    <View style={styler.inputsView}>
                    <TextInput
                    mode='flat'
                label="What do we call you/ Enter your Name"
                style={styler.name}
                theme={{colors:{primary:"#7AC141"}}}
                ></TextInput>

                <TextInput
                mode='flat'
                label="Age"
                style={styler.name}
                theme={{colors:{primary:"#7AC141"}}}
                keyboardType='number-pad'
                ></TextInput>
                <View style={styler.genderView}>
                    <Text style={styler.genderText}>
                        Select Your Gender
                    </Text>
                </View>
                 <RadioForm formHorizontal={false} animation={true}>
  {
    radio_props.map((obj, i) => (
      <RadioButton labelHorizontal={true} key={i} >
       
        <View style={{flexDirection:'row'}}>
        <RadioButtonInput
          obj={obj}
          index={i}
          isSelected={value === i}
         onPress={(value) => {setvalue(value)}}
          borderWidth={2}
          buttonInnerColor={'#7AC141'}
          buttonOuterColor={value === i ? '#7AC141' : '#DADADA'}
          buttonSize={16}
          buttonOuterSize={28}
          buttonStyle={{marginRight:20,marginBottom:10}}
          buttonWrapStyle={{marginLeft: 10}}
        />
        <RadioButtonLabel
          obj={obj}
          index={i}
          labelHorizontal={true}
         onPress={(value) => {setvalue(value)}}
          labelStyle={{fontSize: 20, color: 'rgba(18, 18, 18, 0.5)'}}
          labelWrapStyle={{}}
        />
          </View>
      </RadioButton>
    ))
  }  
</RadioForm>

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

export default Register2;

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
        fontSize:20,
        elevation: 5
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
    },
    genderView:{
        marginHorizontal: 10,
        marginVertical: 20
    },
    genderText:{
        fontSize:25
    }
})