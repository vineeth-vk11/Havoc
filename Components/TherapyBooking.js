import React, { Component } from 'react'
import {View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity, TextInput,ScrollView} from 'react-native'
import { Icon } from 'react-native-elements';

export default class TherapyBooking extends Component {
    render() {
        return (
            <SafeAreaView>
               
            <View style={styler.head}>
            <TouchableOpacity>
            <Icon
              
             name='arrow-back'
            type='ionicon'
           color='#979797'
             />
                </TouchableOpacity>
          <Text style={{fontSize:24,fontWeight:'bold'}}>Therapy Booking</Text>
                <TouchableOpacity>
            <Icon
              
             name='arrow-back'
            type='ionicon'
           color='#ffff'
             />
                </TouchableOpacity>  
            </View>
            <View style={styler.bookingSuccessfull}>
                <Icon 
                name='check-circle'
                type='fontAwesome'
                color='#7AC141'/>
                <Text style={{fontSize:24,color:'#80B852'}}>  Booking Successfull</Text>
                </View>
            <Text style={{fontSize:18,fontWeight:'bold',margin:10}}>Summary</Text>
            <View style = {styler.lineStyle} />
                <View style={styler.medicationView}>
                    <Text style={{fontSize:15,fontWeight:'bold'}}>Paid Amount</Text>
                    <Text style={{fontSize:20}}>₹ 250</Text>
                    </View>
                    <View style = {styler.lineStyle} />
                <TouchableOpacity>
                   <Text 
                   style={styler.finish}
                   >FINISH</Text>
                   </TouchableOpacity>
            </SafeAreaView>
        )
    }
}
const styler=StyleSheet.create({
    head:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:20,
        margin:10
    },
medicationView:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    margin:10
},
finish:{
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
lineStyle:{
    borderWidth:0.4,
    borderColor:'black',
    margin:10,
    borderColor:'#828282'
},
bookingSuccessfull:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginTop:80,
    marginBottom:80
}
})
