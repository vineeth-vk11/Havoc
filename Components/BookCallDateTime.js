import React, { useState } from "react";
import {View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity, TextInput,ScrollView} from 'react-native'

import { Button,Icon} from "react-native-elements";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const BookCallDateTime = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };


  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };


  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTimeConfirm = (time) => {
    console.warn("A Time has been picked: ", time);
    hideTimePicker();
  };

  return (
    <SafeAreaView style={styler.screen} >
      <View style={styler.headView}>
      <View style={styler.head}>
            <TouchableOpacity>
            <Icon
              
             name='arrow-back'
            type='ionicon'
           color='#979797'
           size={30}
             />
                </TouchableOpacity>
          <Text style={{fontSize:24,fontWeight:'bold'}}>Booking</Text>
                <TouchableOpacity>
            <Icon
              
             name='arrow-back'
            type='ionicon'
           color='#ffff'
             />
                </TouchableOpacity>  
            </View>
        </View>
<View style={styler.dateTimeView}>
<View >
      <Button raised
                    containerStyle={{width:100,height:48,margin:10,smarginBottom:20}}
                    buttonStyle={{padding:5,height:48,borderColor:'#7AC141',borderWidth:1,borderRadius:5}} icon={
    <Icon
      name="calendar"
      size={20}
      color="#7AC141"
      type="ionicon"
    />
  }
title="  Date" type="outline" titleStyle={{color:'#7AC141'}}onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
      />
    </View>
    <View >
    <Button raised
                    containerStyle={{width:100,height:48,margin:10,marginBottom:20,color:'green'}}
                    buttonStyle={{padding:5,height:48,borderColor:'#7AC141',borderWidth:1,borderRadius:5}} icon={
    <Icon
      name="time"
      size={20}
      color="#7ACA41"
      type="ionicon"
    />
  }title=" Time" type="outline" titleStyle={{color:'#7AC141'}} onPress={showTimePicker} />
    <DateTimePickerModal
      isVisible={isTimePickerVisible}
      mode="time"
      onConfirm={handleTimeConfirm}
      onCancel={hideTimePicker}
    />
  </View>
  <TextInput 
               style={styler.phoneNumber}
               placeholder={"+91  Phone Number"}
               ></TextInput>
  </View>
<View style={styler.footView}>
<TouchableOpacity>
                   <Text 
                   style={styler.bookNow}
                   >BOOK NOW</Text>
                   </TouchableOpacity>
  </View>


            
  </SafeAreaView>
  );
};
const styler=StyleSheet.create({
  head:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      marginTop:35,
      margin:10
  },
medicationView:{
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'space-between',
  margin:10
},
bookNow:{
  justifyContent:'flex-end',
  borderRadius:15,
  width:310,
  height:52,
  backgroundColor:'#7AC141',
  color:'white', 
  margin:20,
  textAlign:'center',
  textAlignVertical:'center',
  fontSize:20,
},
phoneNumber:{
    padding:10,
    borderColor:'#7AC141',
    borderRadius:15,
    borderWidth:1,
    margin:10,
    width:310,
    height:52,
    color:'#828282',
    justifyContent:'center',
    
    
},
screen:{flex:1},
headView:{
  flex:0.2
},
dateTimeView:{
  flex:0.6

},
footView:{
  flex:0.2
}
})

export default BookCallDateTime;
