import React, { Component } from 'react'
import {View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity, TextInput,ScrollView} from 'react-native'
import { Icon } from 'react-native-elements'
import RadioForm from 'react-native-simple-radio-button';
import { Rating, AirbnbRating } from 'react-native-elements';
var radio_props = [
    {label: 'Yes', value: 0 },
    {label: 'Not Sure', value: 1 },
    {label: 'NO', value: 2 }
  ];
export default class AgeOfListner extends Component {
    constructor(props){
        super(props);
        this.state={
            value: ''
        }
    }
    ratingCompleted(rating) {
        console.log("Rating is: " + rating)
      }

    render() {
        return (
            <SafeAreaView>
            <View style={styler.head}>
                <Text style={{fontSize:30,fontWeight:'bold',margin:40}}>Review</Text>
            </View>
            <Text style={styler.better}>Are you feeling better now</Text>
            <View style={{margin:10}}>
        <RadioForm
          radio_props={radio_props}
          initial={0}
          buttonColor={'#7AC141'}
          selectedButtonColor={'#7AC141'}
          onPress={(value) => {this.setState({value:value})}}
          
        />
      </View>
      <Text style={styler.better}>Rate the listener</Text>
      <Rating
  
  onFinishRating={this.ratingCompleted}
  style={{ paddingVertical: 10 }}
/>
<Text style={styler.better}>Review</Text>
<View style={{flexDirection:'column',
alignItems:'center',
        justifyContent:'flex-end'}}>
<TextInput
                placeholder="Let us know about your experience"
                placeholderTextColor='rgba(122, 193, 65, 1);'
                style={styler.review}
                ></TextInput>
                <TouchableOpacity>
                   <Text 
                   style={styler.complete}
                   >Complete</Text>
                   </TouchableOpacity>
                </View>
      
            </SafeAreaView>
        )
    }
}
const styler=StyleSheet.create({
    head:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop:20
    },
    better:{
        fontSize:20,
        textAlign:'left',
        margin:10,
        marginBottom:0
        
    },
    complete:{
        justifyContent:'flex-end',
        borderRadius:15,
        width:310,
        height:52,
        backgroundColor:'#7AC141',
        color:'white', 
        margin:50,
        textAlign:'center',
        textAlignVertical:'center',
        fontSize:20
    },
    review:{
        
        padding:10,
        borderColor:'black',
        borderRadius:0,
        width:340,
        height:52,
        color:'#828282',
        justifyContent:'center',
        backgroundColor:'#f5f6fa',
        margin:15
    }

})