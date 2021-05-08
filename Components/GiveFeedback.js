import React from 'react'
import {View,Text,StyleSheet,Dimensions, KeyboardAvoidingView,ScrollView,TouchableNativeFeedback} from 'react-native';
import {TextInput} from 'react-native-paper';

const screenWidth= Dimensions.get('window').width;
   const screenHeight=Dimensions.get('window').height;

const GiveFeedback = ()=>{
    return (
        <View style={styler.screen}>
            <ScrollView>
                <KeyboardAvoidingView behavior='padding'>
            <View style={styler.titleView}>
        <Text style={styler.titleText}>Give Feedback</Text>
        </View>
        <View style={styler.feedbackView}>
            <Text style={styler.feedbackText}>Let us know what you think of we hear you</Text>
            <TextInput mode="flat" label="Feedback" theme={{colors:{primary:'#7AC141', background:'transparent'}}} />
        </View>
      
        <TouchableNativeFeedback >
            <View style={styler.footView}>
           <Text style={styler.complete}>SUBMIT</Text>
           </View>
           </TouchableNativeFeedback>
      
      </KeyboardAvoidingView>
      </ScrollView>
        </View>
    );
}

export default GiveFeedback;

const styler=StyleSheet.create({
  screen:{
      flex:1,
      alignItems:'center'
  },
  titleView:{
      alignItems:'center',
      justifyContent:'center',
      marginTop:0.1*screenHeight,
  },
  titleText:{
      fontSize: 0.08*screenWidth,
      fontWeight:'bold'
  },
  feedbackView:{
      justifyContent:'space-around',
      padding: 0.1*screenWidth
  },
  feedbackText:{
     fontSize: 0.02*screenHeight,
     marginBottom:0.02*screenHeight
  },
  complete: {
    borderRadius: 15,
    width: 0.8*screenWidth,
    height: 0.08*screenHeight,
    backgroundColor: "#7AC141",
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 20,
    elevation:5,
    marginBottom:10,
    shadowColor:'black',
    shadowOffset: {width: 5,height:5},
    shadowOpacity: 0.5,
    shadowRadius: 15
  },
  footView: {
    width: 0.81*screenWidth,
    height:0.09*screenHeight,
    marginTop:0.5*screenHeight,
    justifyContent:'center',
    alignItems: "center",
    marginLeft:0.07*screenWidth,
    borderRadius: 20
  }
});