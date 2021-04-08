import React, { Component } from 'react'
import {View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity, TextInput,ScrollView} from 'react-native'
import { Icon } from 'react-native-elements';
import { Button } from 'react-native-elements';
export default class BookCall extends Component {
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
          <Text style={{fontSize:24,fontWeight:'bold'}}>Book a Call</Text>
                <TouchableOpacity>
            <Icon
              
             name='arrow-back'
            type='ionicon'
           color='#ffff'
             />
                </TouchableOpacity>  
            </View>
                <View style={styler.medicationView}>
                    <Text style={{fontSize:22}}>Call</Text>
                    <Text style={{fontSize:22}}>₹ 250</Text>
                    </View>
                    <View style={styler.medicationView}>
                        <Text> Meditation is a practice where an individual uses a technique – such as mindfulness, or focusing the mind on a particular object, thought, or activity – to train attention and awareness, and achieve a mentally clear and emotionally calm and stable state.
                            </Text>
                        </View>
                        <Text style={{fontSize:15, margin:10}}>Duration: 25 minutes per day</Text>
            <View style={styler.promo}>
            <TextInput 
               style={styler.applyCoupon}
               placeholder={"Got a promo code?"}
               placeholderTextColor='#000'
               ></TextInput>
                    <Button
                    raised
                    containerStyle={{width:100,margin:10}}
                    buttonStyle={{padding:5,borderColor:'#7AC141',borderWidth:1,borderRadius:5}}
  title="APPLY"
  type="outline"
/>
                </View>
                <TouchableOpacity>
                   <Text 
                   style={styler.bookNow}
                   >BOOK NOW</Text>
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
    medication:{
        width:258,
        height:172
    }
,container:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    margin:10
},
tinyLogo:{
    width:114,
    height:114,
    borderRadius:100
},
medicationView:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    margin:10
},
applyCoupon:{
    padding:10,
    borderColor:'#7AC141',
    borderRadius:5,
    borderWidth:1,
    width:198,
    height:35,
    color:'#828282',
    justifyContent:'center'
    
},
promo:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start',
    marginTop:20,
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
}
})
