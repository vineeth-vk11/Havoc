import React,{useState} from 'react';
import {View,Text,StyleSheet,TouchableOpacity, KeyboardAvoidingView,ScrollView,SafeAreaView} from 'react-native';
import {TextInput} from 'react-native-paper';
import RadioForm, {
    RadioButton,
    RadioButtonInput,
    RadioButtonLabel,
  } from "react-native-simple-radio-button";


const HowYouFeel = ()=>{
    const [value,setvalue]=useState();
    const radio_props = [
        { label:"😃 Very Good", value: 0 },
        { label: "🙂 Good", value: 1 },
        {label:"😐 Ok", value: 2},
        {label:"😔 Bad", value:3},
        {label:"😩 Worst", value: 4}
      ];
    return (
        <View style={styler.screen}>
        <ScrollView>
        <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={5}>
             <View style={styler.titleView}>
                 <Text style={styler.titleText}>How are you feeling now?</Text>
             </View>
             <View style={styler.radioButtons}>
             <RadioForm formHorizontal={false} animation={true}>
          {radio_props.map((obj, i) => (
            <RadioButton labelHorizontal={true} key={i}>
              <View style={{ flexDirection: "row" }}>
                <RadioButtonInput
                  obj={obj}
                  index={i}
                  isSelected={value === i}
                  onPress={(value) => {
                    setvalue(value);
                  }}
                  borderWidth={2}
                  buttonInnerColor={"#7AC141"}
                  buttonOuterColor={value === i ? "#7AC141" : "#DADADA"}
                  buttonSize={16}
                  buttonOuterSize={23}
                  buttonStyle={{ marginRight: 20, marginBottom: 10 }}
                  buttonWrapStyle={{ marginLeft: 10 }}
                />
                <RadioButtonLabel
                  obj={obj}
                  index={i}
                  labelHorizontal={true}
                  onPress={(value) => {
                    setvalue(value);
                  }}
                  labelStyle={{ fontSize: 15, color: "rgba(18, 18, 18, 0.5)" }}
                  labelWrapStyle={{}}
                />
              </View>
            </RadioButton>
          ))}
        </RadioForm>
     </View>
             <View style={styler.gatherYT}>
                 <Text style={styler.gatherText}>Gather your thoughts here. This will </Text>
                  <Text style={styler.gatherText}> help the listener get going/initiate</Text>
             </View>
             <View style={styler.inputText}>
                 <TextInput mode='flat'
                 label="What's on your mind?" 
                 theme={{colors:{primary:'green', underlineColor:'transparent',background:'transparent' }}}/>
             </View>
        <TouchableOpacity>
          <Text style={styler.getStarted}>FIND LISTENER</Text>
        </TouchableOpacity>
        </KeyboardAvoidingView>
        </ScrollView>
        </View>
    );
}

export default HowYouFeel;

const styler =StyleSheet.create({
   screen:{
       flex:1,
       alignItems:'center',
       justifyContent:'space-between',
       paddingVertical:'25%',
   },
   titleView:{
      width:'100%',
      alignItems:'center',
      justifyContent:'center'
   },
   titleText:{
       fontSize: 25,
   },
   inputText:{
       width:'100%',
       paddingHorizontal:'10%',
       marginVertical: '10%'
   },
   radioButtons:{
       width:'100%',  
       paddingLeft:'5%',
       marginVertical:'10%'
   },
   gatherYT:{
       width:'100%',
       paddingVertical:'5%',
       alignItems:'center',
       justifyContent:'center'
   },
   gatherText:{
       fontSize: 20
   },
   getStarted: {
    borderRadius: 15,
    width: 310,
    height: 52,
    backgroundColor: "#7AC141",
    color: "white",
    marginHorizontal: 10,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 20,
    elevation: 5,
  }
});